import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { newsArticles } from '@/lib/mock-data';

export default function ArtikelIndex() {
    const featured = newsArticles[0];
    const articles = newsArticles.slice(1);
    const placeholderColors = ['#1A4A72', '#2A6A9E', '#3D8EC9', '#D4A843', '#4ECDC4', '#FF6B9D'];

    return (
        <>
            <Head title="Artikel & Berita" />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-metland-blue-light text-sm font-medium mb-4">Berita & Artikel</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Kabar Terbaru</h1>
                        <p className="text-white/60 max-w-xl mx-auto mb-8">Informasi terkini seputar kegiatan dan prestasi Yayasan Pendidikan Metland</p>
                        {/* Search bar (visual only) */}
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-metland-dark/40" />
                            <input type="text" placeholder="Cari artikel..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-metland-dark text-sm focus:outline-none focus:ring-2 focus:ring-metland-blue shadow-lg" readOnly />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured article */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Link href={`/artikel/${featured.slug}`} className="group block">
                            <div className="flex flex-col lg:flex-row gap-6 rounded-2xl overflow-hidden bg-metland-sky border border-metland-blue-light/20 hover:shadow-xl transition-all duration-500">
                                <div className="lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[320px] relative" style={{ backgroundColor: placeholderColors[0] }}>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl">📰</div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 rounded-full bg-metland-gold text-white text-xs font-bold">Featured</span>
                                    </div>
                                </div>
                                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-metland-blue text-sm font-medium mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(featured.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-metland-dark group-hover:text-metland-blue transition-colors mb-3">{featured.title}</h2>
                                    <p className="text-metland-dark/60 leading-relaxed mb-5">{featured.excerpt}</p>
                                    <div className="flex items-center gap-1 text-metland-blue font-semibold group-hover:gap-2 transition-all">
                                        Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Article grid */}
            <section className="py-12 pb-20 bg-metland-sky">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <h2 className="text-2xl font-bold text-metland-dark mb-8">Semua Artikel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, idx) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <Link href={`/artikel/${article.slug}`} className="group block h-full">
                                    <div className="h-full rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                                        <div className="aspect-video relative" style={{ backgroundColor: placeholderColors[(idx + 1) % placeholderColors.length] }}>
                                            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-5xl">📰</div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 text-xs text-metland-blue font-medium mb-2">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </div>
                                            <h3 className="text-base font-bold text-metland-dark group-hover:text-metland-blue transition-colors mb-2 line-clamp-2">{article.title}</h3>
                                            <p className="text-sm text-metland-dark/50 line-clamp-2">{article.excerpt}</p>
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
