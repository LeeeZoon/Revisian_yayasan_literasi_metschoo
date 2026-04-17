import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { organizationStructure } from '@/lib/mock-data';

function PersonCard({ name, role, emoji, size = 'normal' }: { name: string; role: string; emoji: string; size?: 'large' | 'normal' | 'small' }) {
    const sizeClasses = {
        large: 'w-24 h-24 text-4xl',
        normal: 'w-16 h-16 text-2xl',
        small: 'w-14 h-14 text-xl',
    };

    return (
        <div className="flex flex-col items-center text-center group">
            <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-metland-blue to-metland-blue-dark flex items-center justify-center text-white mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}>
                {emoji}
            </div>
            <h3 className={`font-bold text-metland-dark ${size === 'large' ? 'text-lg' : 'text-sm'}`}>{name}</h3>
            <p className={`text-metland-blue ${size === 'large' ? 'text-sm' : 'text-xs'} mt-0.5`}>{role}</p>
        </div>
    );
}

export default function StrukturOrganisasi() {
    const org = organizationStructure;

    return (
        <>
            <Head title="Struktur Organisasi" />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-metland-blue-light text-sm font-medium mb-4">Profil Yayasan</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Struktur Organisasi</h1>
                        <p className="text-white/60 max-w-xl mx-auto">Susunan pengurus Yayasan Pendidikan Metland</p>
                    </motion.div>
                </div>
            </section>

            {/* Organization Chart */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-5xl px-4 lg:px-8">
                    {/* Top: Dewan Pendiri */}
                    <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="p-6 rounded-2xl bg-metland-blue-pale border border-metland-blue-light/30">
                            <PersonCard name={org.ketuaDewanPendiri.name} role={org.ketuaDewanPendiri.role} emoji="👑" size="large" />
                        </div>
                    </motion.div>

                    {/* Connector line */}
                    <div className="flex justify-center">
                        <div className="w-0.5 h-8 bg-metland-blue-light" />
                    </div>

                    {/* Ketua Yayasan */}
                    <motion.div className="flex justify-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <div className="p-6 rounded-2xl bg-metland-sky border border-metland-blue-light/30 shadow-md">
                            <PersonCard name={org.ketuaYayasan.name} role={org.ketuaYayasan.role} emoji="🎓" size="large" />
                        </div>
                    </motion.div>

                    {/* Connector */}
                    <div className="flex justify-center mb-4">
                        <div className="w-0.5 h-8 bg-metland-blue-light" />
                    </div>

                    {/* Divisions */}
                    <motion.div className="mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <h3 className="text-center text-sm font-bold uppercase tracking-wider text-metland-blue mb-6">Bidang</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {org.divisions.map((div, idx) => (
                                <motion.div
                                    key={div.name}
                                    className="p-5 rounded-xl bg-metland-sky border border-metland-blue-light/30 hover:shadow-lg transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <PersonCard name={div.head} role={div.role} emoji="👤" size="small" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Connector */}
                    <div className="section-divider mb-12" />

                    {/* School Heads */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <h3 className="text-center text-sm font-bold uppercase tracking-wider text-metland-gold mb-6">Kepala Sekolah / Direktur</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {org.schoolHeads.map((head, idx) => (
                                <motion.div
                                    key={head.school}
                                    className="p-5 rounded-xl bg-white border border-metland-blue-light/30 shadow-sm hover:shadow-lg transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <PersonCard name={head.name} role={head.role} emoji="🏫" size="small" />
                                    <p className="text-xs text-metland-dark/50 text-center mt-2 font-medium">{head.school}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
