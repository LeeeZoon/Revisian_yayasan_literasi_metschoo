import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsArticles } from '@/lib/mock-data';

export default function NewsHighlightSection() {
    const featured = newsArticles[0];
    const secondary = newsArticles.slice(1, 4);
    const placeholderColors = ['#1A4A72', '#2A6A9E', '#3D8EC9', '#D4A843'];

    return (
        <section className="py-20 lg:py-28 bg-metland-sky">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-metland-blue-pale text-metland-blue text-sm font-medium mb-4">
                            Berita & Artikel
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metland-dark">
                            Kabar <span className="text-metland-blue">Terbaru</span>
                        </h2>
                        <div className="gold-line mt-4" />
                    </div>
                    <Link
                        href="/artikel"
                        className="hidden md:inline-flex items-center gap-2 mt-4 md:mt-0 text-metland-blue font-medium hover:gap-3 transition-all group"
                    >
                        Lihat Semua Berita
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Featured (large) */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href={`/artikel/${featured.slug}`} className="group block">
                            <div className="rounded-2xl overflow-hidden shadow-xl shadow-metland-blue/10 bg-white">
                                {/* Image placeholder */}
                                <div
                                    className="aspect-[16/9] relative overflow-hidden"
                                    style={{ backgroundColor: placeholderColors[0] }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl">📰</div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-metland-gold text-white text-xs font-medium">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(featured.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-metland-blue/0 group-hover:bg-metland-blue/10 transition-colors duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-metland-dark group-hover:text-metland-blue transition-colors mb-3">
                                        {featured.title}
                                    </h3>
                                    <p className="text-sm text-metland-dark/60 leading-relaxed line-clamp-2">
                                        {featured.excerpt}
                                    </p>
                                    <div className="flex items-center gap-1 mt-4 text-sm font-medium text-metland-blue group-hover:gap-2 transition-all">
                                        Baca Selengkapnya
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Secondary articles */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {secondary.map((article, idx) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                            >
                                <Link href={`/artikel/${article.slug}`} className="group block">
                                    <div className="flex gap-4 p-4 rounded-xl bg-white shadow-md shadow-metland-blue/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        {/* Thumbnail placeholder */}
                                        <div
                                            className="w-24 h-24 rounded-lg shrink-0 flex items-center justify-center text-white/30 text-3xl overflow-hidden"
                                            style={{ backgroundColor: placeholderColors[(idx + 1) % placeholderColors.length] }}
                                        >
                                            📰
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs text-metland-blue font-medium">
                                                {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </span>
                                            <h4 className="text-sm font-bold text-metland-dark group-hover:text-metland-blue transition-colors mt-1 line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <p className="text-xs text-metland-dark/50 mt-1 line-clamp-1">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/artikel"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-metland-blue text-white font-semibold text-sm hover:bg-metland-blue-dark transition-colors shadow-md"
                    >
                        Lihat Semua Berita
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
