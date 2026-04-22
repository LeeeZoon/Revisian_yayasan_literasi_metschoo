import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import WordReveal from '../animations/WordReveal';

const heroImages = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&q=80',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={heroImages[currentIndex]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(100deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute bottom-[8%] right-[6%] max-w-[55%] text-right">
        <WordReveal
          text="Building Africa's future. One person, one community, one purpose at a time."
          tag="h1"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.08] tracking-tight justify-end"
          delay={0.3}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Link to="/programs">
            <motion.span
              className="inline-flex items-center gap-3 bg-lime text-charcoal px-6 py-4 rounded text-sm font-medium uppercase tracking-wider cursor-pointer"
              whileHover={{ backgroundColor: '#94BC28' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span whileHover={{ x: 6 }} className="inline-block">→</motion.span>
              What We Do
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Welcome Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-10 left-8 flex items-center gap-3"
      >
        <div className="w-2 h-2 bg-white" />
        <span className="text-sm text-white/70">Welcome</span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-12 bg-white/60 origin-top"
        animate={{ scaleY: [1, 0.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
