import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, School, BookOpen } from 'lucide-react';
import { stats } from '@/lib/mock-data';

const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-8 h-8" />,
    GraduationCap: <GraduationCap className="w-8 h-8" />,
    School: <School className="w-8 h-8" />,
    BookOpen: <BookOpen className="w-8 h-8" />,
};

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, inView]);

    return (
        <span className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function StatsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="py-20 lg:py-24 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-metland-blue-deeper via-metland-blue-dark to-metland-blue-deeper" />

            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-20l-20 20zm40 0v-20l-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            {/* Decorative blobs */}
            <div className="absolute -top-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-metland-blue/20 blur-3xl" />
            <div className="absolute -bottom-1/2 -right-1/4 w-[400px] h-[400px] rounded-full bg-metland-gold/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Dampak <span className="text-metland-gold">Kami</span>
                    </h2>
                    <p className="text-white/60 max-w-lg mx-auto">
                        Bertumbuh bersama sejak 2016, membangun masa depan melalui pendidikan vokasi berkualitas.
                    </p>
                    <div className="w-12 h-1 bg-metland-gold rounded mx-auto mt-4" />
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative inline-flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 w-full">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-metland-blue/20 flex items-center justify-center text-metland-blue-light mb-4">
                                    {iconMap[stat.icon]}
                                </div>

                                {/* Number */}
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                                </div>

                                {/* Label */}
                                <p className="text-sm text-white/60 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
