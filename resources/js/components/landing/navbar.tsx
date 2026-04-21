import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { login } from '@/routes';

const navItems = [
    { label: 'Home', href: '/' },
    {
        label: 'Profil',
        href: '#',
        children: [
            { label: 'Visi & Misi', href: '/profil/visi-misi' },
            { label: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
        ],
    },
    {
        label: 'Our School',
        href: '/sekolah',
        children: [
            { label: 'TK Tunas Metropolitan', href: '/sekolah/tk-tunas-metropolitan' },
            { label: 'SD Tunas Metropolitan', href: '/sekolah/sd-tunas-metropolitan' },
            { label: 'SMK Pariwisata Metland School', href: '/sekolah/smk-pariwisata-metland-school' },
            { label: 'Metland College', href: '/sekolah/metland-college' },
        ],
    },
    { label: 'Artikel', href: '/artikel' },
    { label: 'Literasi', href: '/literasi' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { auth } = usePage().props as { auth: { user: unknown } };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'glass shadow-lg shadow-metland-blue/5 py-2'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <img src="assets/logoyayasan.png" alt="Logo Yayasan" width={20} height={20} />
                    </div>
                    <div className="hidden sm:block">
                        <span className={`block text-base font-bold leading-tight transition-colors duration-300 ${isScrolled ? 'text-metland-dark' : 'text-white'}`}>
                            Yayasan Pendidikan  Metland
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="ml-auto hidden lg:flex items-center gap-1 px-10">
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                    isScrolled
                                        ? 'text-metland-dark hover:text-metland-blue hover:bg-metland-blue-pale'
                                        : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {item.label}
                                {item.children && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                            </Link>

                            {/* Dropdown */}
                            {item.children && activeDropdown === item.label && (
                                <div className="absolute top-full left-0 pt-2 animate-fade-in-down">
                                    <div className="glass rounded-xl shadow-xl shadow-metland-blue/10 p-2 min-w-[240px] border border-metland-blue-light/30">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-metland-dark rounded-lg hover:bg-metland-blue-pale hover:text-metland-blue transition-colors duration-200"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {auth?.user ? (
                        <Link
                            href="/dashboard"
                            className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-metland-blue text-white hover:bg-metland-blue-dark transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <button
                            className={`hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300  ${
                                isScrolled
                                    ? 'bg-metland-blue text-white hover:bg-metland-blue-dark shadow-md hover:shadow-lg'
                                    : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm'
                            }`}
                        >
                            Get in touch
                        </button>
                    )}

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-metland-dark hover:bg-metland-blue-pale' : 'text-white hover:bg-white/10'}`}
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="lg:hidden glass mt-2 mx-4 rounded-xl shadow-xl p-4 animate-fade-in-down">
                    {navItems.map((item) => (
                        <div key={item.label}>
                            <Link
                                href={item.href}
                                className="block px-4 py-3 text-sm font-medium text-metland-dark rounded-lg hover:bg-metland-blue-pale hover:text-metland-blue transition-colors"
                                onClick={() => !item.children && setIsMobileOpen(false)}
                            >
                                <span className="flex items-center justify-between">
                                    {item.label}
                                    {item.children && <ChevronDown className="w-4 h-4" />}
                                </span>
                            </Link>
                            {item.children && (
                                <div className="ml-4 border-l-2 border-metland-blue-light pl-3">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            className="block px-3 py-2 text-sm text-metland-dark/70 hover:text-metland-blue transition-colors"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-3 pt-3 border-t border-metland-blue-light/30">
                        <Link
                            href={login()}
                            className="block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-metland-blue text-white hover:bg-metland-blue-dark transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            Login Admin
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
