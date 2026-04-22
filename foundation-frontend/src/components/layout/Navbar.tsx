import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavScroll } from '../../hooks/useNavScroll';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
  {
    label: 'What We Do',
    href: '/programs',
    children: [
      { label: 'Education', href: '/programs?cat=education', description: 'Scholarships & learning programs' },
      { label: 'Health', href: '/programs?cat=health', description: 'Community health initiatives' },
      { label: 'Livelihoods', href: '/programs?cat=livelihoods', description: 'Skills & enterprise development' },
    ],
  },
  { label: 'About Us', href: '/about' },
  {
    label: 'Insight & Resources',
    href: '/news',
    children: [
      { label: 'News & Stories', href: '/news', description: 'Latest updates from the field' },
      { label: 'Reports', href: '/news?cat=reports', description: 'Annual reports & publications' },
    ],
  },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { isScrolled } = useNavScroll();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50"
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.96)' : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 2C18 2 8 8 8 18C8 28 18 34 18 34" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 4C18 4 10 9 10 18C10 27 18 32 18 32" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 6C18 6 12 10 12 18C12 26 18 30 18 30" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 8C18 8 14 11 14 18C14 25 18 28 18 28" stroke="#A8D52E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 10C18 10 16 12 16 18C16 24 18 26 18 26" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 2C18 2 28 8 28 18C28 28 18 34 18 34" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 4C18 4 26 9 26 18C26 27 18 32 18 32" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 6C18 6 24 10 24 18C24 26 18 30 18 30" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 8C18 8 22 11 22 18C22 25 18 28 18 28" stroke="#A8D52E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 10C18 10 20 12 20 18C20 24 18 26 18 26" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </motion.div>
              <motion.span
                className="font-semibold text-lg tracking-tight"
                animate={{ color: isScrolled ? '#111111' : '#ffffff' }}
                transition={{ duration: 0.4 }}
              >
                Higher Life
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.href}>
                    <motion.span
                      className="px-4 py-2 text-sm font-medium inline-block cursor-pointer"
                      animate={{ color: isScrolled ? '#111111' : '#ffffff' }}
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-[280px] bg-white rounded-xl shadow-lg p-3 border border-gray-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="text-sm font-medium text-charcoal">{child.label}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{child.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link to="/contact" className="hidden lg:block">
              <motion.span
                className="inline-flex items-center gap-2 bg-lime text-charcoal px-5 py-2.5 rounded-md text-sm font-medium cursor-pointer"
                whileHover={{ scale: 1.04, backgroundColor: '#94BC28' }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span whileHover={{ x: 4 }} className="inline-block">→</motion.span>
                Get Involved
              </motion.span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden z-10 p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" style={{ color: '#111' }} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" style={{ color: isScrolled ? '#111' : '#fff' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl lg:hidden"
            >
              <div className="pt-24 px-6 pb-8 flex flex-col h-full">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                  className="flex-1"
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block py-3 text-lg font-medium border-b border-gray-100 ${
                          location.pathname === item.href ? 'text-lime-dark' : 'text-charcoal'
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block py-2 text-sm text-gray-500 hover:text-charcoal"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full bg-lime text-charcoal text-center py-4 rounded-md font-medium text-sm mt-6"
                >
                  → Get Involved
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
