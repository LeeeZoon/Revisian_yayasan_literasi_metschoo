import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { schools } from '@/lib/mock-data';

export default function SekolahIndex() {
    return (
        <>
            <Head title="Our School" />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-metland-blue-light text-sm font-medium mb-4">Our School</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Unit Pendidikan</h1>
                        <p className="text-white/60 max-w-xl mx-auto">Empat unit pendidikan terintegrasi di bawah naungan Yayasan Pendidikan Metland</p>
                    </motion.div>
                </div>
            </section>

            {/* School list */}
            <section className="py-20 bg-metland-sky">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="space-y-8">
                        {schools.map((school, idx) => (
                            <motion.div
                                key={school.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link href={`/sekolah/${school.slug}`} className="group block">
                                    <div className={`flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                                        {/* Image placeholder */}
                                        <div
                                            className="lg:w-2/5 aspect-video lg:aspect-auto min-h-[240px] flex items-center justify-center text-6xl relative overflow-hidden"
                                            style={{ backgroundColor: `${school.color}20` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5" />
                                            <span className="relative text-7xl">{school.logoPlaceholder}</span>
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                                            <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: `${school.color}15`, color: school.color }}>
                                                {school.level}
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-bold text-metland-dark group-hover:text-metland-blue transition-colors mb-3">{school.name}</h2>
                                            <p className="text-metland-dark/60 leading-relaxed mb-4">{school.longDescription.substring(0, 200)}...</p>
                                            {school.programs && (
                                                <div className="flex flex-wrap gap-2 mb-5">
                                                    {school.programs.map((p) => (
                                                        <span key={p} className="px-3 py-1 rounded-lg text-xs bg-metland-blue-pale text-metland-blue-deeper font-medium">{p}</span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1 text-metland-blue font-semibold group-hover:gap-2 transition-all">
                                                Lihat Detail <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
