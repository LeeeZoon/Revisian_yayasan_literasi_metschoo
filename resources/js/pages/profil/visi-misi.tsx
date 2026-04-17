import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Globe, Award, Handshake } from 'lucide-react';
import { siteSettings } from '@/lib/mock-data';

const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Inovasi', desc: 'Mendorong kreativitas dan pemikiran inovatif dalam setiap aspek pembelajaran' },
    { icon: <Heart className="w-6 h-6" />, title: 'Karakter', desc: 'Membentuk pribadi berintegritas, jujur, dan bertanggung jawab' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global', desc: 'Mempersiapkan lulusan yang mampu bersaing di kancah internasional' },
    { icon: <Award className="w-6 h-6" />, title: 'Keunggulan', desc: 'Berkomitmen pada standar kualitas tertinggi dalam pendidikan' },
    { icon: <Handshake className="w-6 h-6" />, title: 'Kemitraan', desc: 'Menjalin kolaborasi erat dengan dunia usaha dan industri' },
    { icon: <Target className="w-6 h-6" />, title: 'Entrepreneurship', desc: 'Menanamkan jiwa kewirausahaan sejak dini pada setiap peserta didik' },
];

export default function VisiMisi() {
    return (
        <>
            <Head title="Visi & Misi" />

            {/* Hero banner */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-metland-blue-light text-sm font-medium mb-4">Profil Yayasan</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Visi & Misi</h1>
                        <p className="text-white/60 max-w-xl mx-auto">Landasan dan arah pengembangan Yayasan Pendidikan Metland</p>
                    </motion.div>
                </div>
            </section>

            {/* Visi */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex w-20 h-20 rounded-2xl bg-metland-blue-pale items-center justify-center mb-6">
                            <Target className="w-10 h-10 text-metland-blue" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-metland-dark mb-6">Visi</h2>
                        <div className="gold-line mx-auto mb-8" />
                        <blockquote className="text-xl md:text-2xl font-serif italic text-metland-dark leading-relaxed border-l-4 border-metland-gold pl-6 text-left max-w-2xl mx-auto">
                            "{siteSettings.yayasan.visi}"
                        </blockquote>
                    </motion.div>
                </div>
            </section>

            {/* Misi */}
            <section className="py-20 bg-metland-sky">
                <div className="mx-auto max-w-4xl px-4 lg:px-8">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-metland-dark mb-4">Misi</h2>
                        <div className="gold-line mx-auto" />
                    </motion.div>
                    <div className="space-y-4">
                        {siteSettings.yayasan.misi.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <div className="w-10 h-10 rounded-lg bg-metland-blue flex items-center justify-center text-white font-bold shrink-0">
                                    {idx + 1}
                                </div>
                                <p className="text-metland-dark/80 leading-relaxed pt-1.5">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nilai-nilai */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-metland-dark mb-4">Nilai-Nilai Kami</h2>
                        <div className="gold-line mx-auto" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, idx) => (
                            <motion.div
                                key={v.title}
                                className="p-6 rounded-2xl border border-metland-blue-light/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-metland-blue-pale flex items-center justify-center text-metland-blue mb-4">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-bold text-metland-dark mb-2 font-sans">{v.title}</h3>
                                <p className="text-sm text-metland-dark/60 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
