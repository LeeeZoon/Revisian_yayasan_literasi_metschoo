import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { schools } from '@/lib/mock-data';

export default function SchoolShowcaseSection() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-metland-blue-pale text-metland-blue text-sm font-medium mb-4">
                        Our School
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metland-dark mb-4">
                        Unit Pendidikan <span className="text-metland-blue">Kami</span>
                    </h2>
                    <p className="text-base text-metland-dark/60 max-w-2xl mx-auto">
                        Empat unit pendidikan yang terintegrasi, dari TK hingga perguruan tinggi vokasi, semua di bawah naungan Yayasan Pendidikan Metland.
                    </p>
                    <div className="gold-line mx-auto mt-6" />
                </motion.div>

                {/* School cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {schools.map((school, index) => (
                        <motion.div
                            key={school.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Link
                                href={`/sekolah/${school.slug}`}
                                className="group block h-full"
                            >
                                <div className="h-full rounded-2xl border border-metland-blue-light/30 bg-white p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-metland-blue/10 hover:-translate-y-2 hover:border-metland-blue/30">
                                    {/* Icon / Logo */}
                                    <div
                                        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${school.color}15` }}
                                    >
                                        {school.logoPlaceholder}
                                    </div>

                                    {/* Level badge */}
                                    <span
                                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                                        style={{ backgroundColor: `${school.color}15`, color: school.color }}
                                    >
                                        {school.level}
                                    </span>

                                    {/* Name */}
                                    <h3 className="text-lg font-bold text-metland-dark mb-3 group-hover:text-metland-blue transition-colors">
                                        {school.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-metland-dark/60 leading-relaxed mb-5">
                                        {school.description}
                                    </p>

                                    {/* Programs preview */}
                                    {school.programs && (
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {school.programs.slice(0, 3).map((prog) => (
                                                <span
                                                    key={prog}
                                                    className="px-2 py-0.5 rounded text-[11px] bg-metland-blue-pale text-metland-blue-deeper"
                                                >
                                                    {prog}
                                                </span>
                                            ))}
                                            {school.programs.length > 3 && (
                                                <span className="px-2 py-0.5 rounded text-[11px] bg-metland-blue-pale text-metland-blue-deeper">
                                                    +{school.programs.length - 3} lainnya
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <div className="flex items-center gap-1 text-sm font-medium text-metland-blue group-hover:gap-2 transition-all">
                                        Selengkapnya
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
