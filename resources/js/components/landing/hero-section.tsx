import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-metland-blue/10 blur-3xl"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-metland-blue-light/8 blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-metland-gold/5 blur-3xl"
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-metland-blue-light/30"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-metland-blue-light text-sm mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Entrepreneurial Global School
                    </motion.div>

                    {/* Main heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                        >
                            Yayasan Pendidikan
                        </motion.span>
                        <motion.span
                            className="block bg-gradient-to-r from-metland-blue-light via-white to-metland-gold bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                        >
                            Metland
                        </motion.span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                    >
                        Mencetak generasi unggul berwawasan global melalui pendidikan vokasi berstandar internasional
                        dengan semangat <span className="text-metland-gold font-medium">Metland Spirit</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                    >
                        <Link
                            href="/sekolah"
                            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-metland-blue text-white font-semibold text-base hover:bg-metland-blue-dark transition-all duration-300 shadow-lg shadow-metland-blue/30 hover:shadow-xl hover:shadow-metland-blue/40 hover:-translate-y-0.5"
                        >
                            Jelajahi Sekolah Kami
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/literasi"
                            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-base border border-white/25 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <BookOpen className="w-4 h-4" />
                            Baca Literasi
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                        <div className="w-1 h-2 rounded-full bg-white/60" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
