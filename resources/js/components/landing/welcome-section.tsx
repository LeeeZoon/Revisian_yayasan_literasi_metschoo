import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { siteSettings } from '@/lib/mock-data';

export default function WelcomeSection() {
    const { chairmanWelcome } = siteSettings;

    return (
        <section className="py-20 lg:py-28 bg-metland-sky relative overflow-hidden">
            {/* Subtle pattern background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233D8EC9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Photo placeholder */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-metland-blue/15">
                            {/* Placeholder image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-metland-blue-deeper to-metland-blue-dark flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-7xl mb-4">
                                        <img src="assets/fotoketua.jpg" alt="Foto Ketua Yayasan" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative frame */}
                            <div className="absolute inset-0 border-2 border-metland-gold/20 rounded-2xl m-3" />
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-metland-gold/10 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-32 h-32 bg-metland-blue/10 rounded-full -z-10 blur-xl" />
                    </motion.div>

                    {/* Right: Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-metland-blue-pale text-metland-blue text-sm font-medium mb-4">
                            Sambutan Ketua Yayasan
                        </span>

                        {/* Quote */}
                        <div className="relative mb-8">
                            <Quote className="absolute -top-2 -left-2 w-10 h-10 text-metland-gold/30" />
                            <blockquote className="text-xl md:text-2xl font-serif italic text-metland-dark leading-relaxed pl-8 border-l-4 border-metland-gold">
                                "{chairmanWelcome.quote}"
                            </blockquote>
                        </div>

                        {/* Message */}
                        <p className="text-base text-metland-dark/70 leading-relaxed mb-8">
                            {chairmanWelcome.message}
                        </p>

                        {/* Signature */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-metland-blue flex items-center justify-center text-white font-bold text-lg">
                                {chairmanWelcome.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-bold text-metland-dark">{chairmanWelcome.name}</p>
                                <p className="text-sm text-metland-blue">{chairmanWelcome.title}</p>
                            </div>
                            <div className="ml-auto hidden sm:block">
                                <div className="gold-line" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
