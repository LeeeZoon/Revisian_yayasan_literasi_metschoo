import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { schools } from '@/lib/mock-data';

export default function SekolahShow({ slug }: { slug?: string }) {
    const school = schools.find((s) => s.slug === slug) || schools[0];

    return (
        <>
            <Head title={school.name} />

            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundColor: school.color }} />
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-28 h-28 rounded-2xl flex items-center justify-center text-6xl shadow-2xl" style={{ backgroundColor: `${school.color}25`, border: `2px solid ${school.color}40` }}>
                            {school.logoPlaceholder}
                        </div>
                        <div className="text-center lg:text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-3" style={{ backgroundColor: `${school.color}25`, color: school.color }}>
                                {school.level}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{school.name}</h1>
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/60">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Metland Transyogi, Cileungsi, Bogor</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Back button */}
            <div className="bg-white border-b border-metland-blue-light/30">
                <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3">
                    <Link href="/sekolah" className="inline-flex items-center gap-2 text-sm text-metland-blue hover:text-metland-blue-dark transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Sekolah
                    </Link>
                </div>
            </div>

            {/* Content */}
            <section className="py-16 bg-metland-sky">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* About */}
                            <motion.div className="rounded-2xl bg-white p-6 lg:p-8 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-2xl font-bold text-metland-dark mb-4">Tentang Sekolah</h2>
                                <div className="gold-line mb-6" />
                                <p className="text-metland-dark/70 leading-relaxed">{school.longDescription}</p>
                            </motion.div>

                            {/* Programs */}
                            {school.programs && (
                                <motion.div className="rounded-2xl bg-white p-6 lg:p-8 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                    <h2 className="text-2xl font-bold text-metland-dark mb-4">Program & Keahlian</h2>
                                    <div className="gold-line mb-6" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {school.programs.map((prog) => (
                                            <div key={prog} className="flex items-center gap-3 p-4 rounded-xl bg-metland-blue-pale/50 border border-metland-blue-light/20">
                                                <CheckCircle className="w-5 h-5 text-metland-blue shrink-0" />
                                                <span className="text-sm font-medium text-metland-dark">{prog}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Gallery placeholder */}
                            <motion.div className="rounded-2xl bg-white p-6 lg:p-8 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                <h2 className="text-2xl font-bold text-metland-dark mb-4">Galeri Sekolah</h2>
                                <div className="gold-line mb-6" />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div key={i} className="aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: `${school.color}15` }}>
                                            <div className="w-full h-full flex items-center justify-center text-3xl opacity-30">📷</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <motion.div className="rounded-2xl bg-white p-6 shadow-sm sticky top-24" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                <h3 className="text-lg font-bold text-metland-dark mb-4">Informasi</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between py-2 border-b border-metland-blue-light/20">
                                        <span className="text-metland-dark/50">Jenjang</span>
                                        <span className="font-medium text-metland-dark">{school.level}</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-metland-blue-light/20">
                                        <span className="text-metland-dark/50">Status</span>
                                        <span className="font-medium text-green-600">Aktif</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-metland-blue-light/20">
                                        <span className="text-metland-dark/50">Yayasan</span>
                                        <span className="font-medium text-metland-dark">YPM</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-metland-dark/50">Lokasi</span>
                                        <span className="font-medium text-metland-dark">Cileungsi, Bogor</span>
                                    </div>
                                </div>
                                <a href="#" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-metland-blue text-white font-semibold text-sm hover:bg-metland-blue-dark transition-colors shadow-md">
                                    <ExternalLink className="w-4 h-4" /> Kunjungi Website
                                </a>
                            </motion.div>

                            {/* Other schools */}
                            <div className="rounded-2xl bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-metland-dark mb-4">Sekolah Lainnya</h3>
                                <div className="space-y-3">
                                    {schools.filter(s => s.id !== school.id).map((s) => (
                                        <Link key={s.id} href={`/sekolah/${s.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-metland-blue-pale transition-colors group">
                                            <span className="text-2xl">{s.logoPlaceholder}</span>
                                            <div>
                                                <p className="text-sm font-medium text-metland-dark group-hover:text-metland-blue transition-colors">{s.name}</p>
                                                <p className="text-xs text-metland-dark/50">{s.level}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
