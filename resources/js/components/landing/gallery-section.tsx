import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '@/lib/mock-data';

export default function GallerySection() {
    const [current, setCurrent] = useState(0);
    const total = galleryItems.length;

    const next = useCallback(() => setCurrent((prev) => (prev + 1) % total), [total]);
    const prev = useCallback(() => setCurrent((prev) => (prev - 1 + total) % total), [total]);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    // Generate placeholder colors for gallery images
    const placeholderColors = ['#3D8EC9', '#2A6A9E', '#1A4A72', '#A8D8F0', '#D4A843', '#4ECDC4'];

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-metland-blue-pale text-metland-blue text-sm font-medium mb-4">
                        Galeri Kegiatan
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metland-dark mb-4">
                        Momen Berharga <span className="text-metland-blue">Kami</span>
                    </h2>
                    <div className="gold-line mx-auto mt-4" />
                </motion.div>

                {/* Carousel */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-metland-blue/10">
                    <div className="aspect-[16/7] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ backgroundColor: placeholderColors[current % placeholderColors.length] }}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Placeholder pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                                        backgroundSize: '50px 50px',
                                    }} />
                                </div>
                                {/* Caption Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 lg:p-10">
                                    <motion.p
                                        className="text-white text-lg md:text-2xl font-semibold font-serif"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {galleryItems[current].caption}
                                    </motion.p>
                                    <p className="text-white/60 text-sm mt-1">Yayasan Pendidikan Metland</p>
                                </div>
                                {/* Center icon */}
                                <div className="text-white/20 text-8xl font-serif">📸</div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-metland-dark hover:bg-white transition-all duration-300 shadow-lg"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-metland-dark hover:bg-white transition-all duration-300 shadow-lg"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {galleryItems.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    idx === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
