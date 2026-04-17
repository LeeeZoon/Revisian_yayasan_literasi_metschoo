import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2, Facebook, Twitter } from 'lucide-react';
import { newsArticles } from '@/lib/mock-data';

export default function ArtikelShow({ slug }: { slug?: string }) {
    const article = newsArticles.find((a) => a.slug === slug) || newsArticles[0];
    const related = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

    return (
        <>
            <Head title={article.title} />

            {/* Hero image */}
            <section className="relative pt-24">
                <div className="aspect-[21/9] max-h-[400px] bg-metland-blue-deeper relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-[10rem]">📰</div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-4xl px-4 lg:px-8">
                    {/* Back */}
                    <Link href="/artikel" className="inline-flex items-center gap-2 text-sm text-metland-blue hover:text-metland-blue-dark transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
                    </Link>

                    <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-metland-blue-pale text-metland-blue text-xs font-medium">
                                <Calendar className="w-3 h-3" />
                                {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metland-dark mb-6 leading-tight">{article.title}</h1>
                        <div className="gold-line mb-8" />

                        {/* Content */}
                        <div className="prose-metland text-base md:text-lg leading-relaxed">
                            <p className="text-lg font-medium text-metland-dark mb-6">{article.excerpt}</p>
                            <p>{article.content}</p>
                            <p className="mt-4">Yayasan Pendidikan Metland terus berkomitmen untuk memberikan pendidikan terbaik bagi seluruh peserta didik. Dengan semangat Metland Spirit dan wawasan Entrepreneurial Global, setiap kegiatan dirancang untuk membentuk karakter unggul dan kesiapan menghadapi tantangan dunia kerja.</p>
                            <p className="mt-4">Informasi lebih lanjut mengenai kegiatan dan program pendidikan Yayasan Pendidikan Metland dapat diikuti melalui media sosial resmi atau menghubungi kantor yayasan di Metland Transyogi, Cileungsi, Kabupaten Bogor, Jawa Barat.</p>
                        </div>

                        {/* Share */}
                        <div className="mt-10 pt-6 border-t border-metland-blue-light/30">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-metland-dark flex items-center gap-2">
                                    <Share2 className="w-4 h-4" /> Bagikan:
                                </span>
                                <button className="w-9 h-9 rounded-lg bg-metland-blue-pale flex items-center justify-center text-metland-blue hover:bg-metland-blue hover:text-white transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button className="w-9 h-9 rounded-lg bg-metland-blue-pale flex items-center justify-center text-metland-blue hover:bg-metland-blue hover:text-white transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* Related articles */}
            <section className="py-12 bg-metland-sky">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <h2 className="text-2xl font-bold text-metland-dark mb-8">Artikel Lainnya</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((a, idx) => (
                            <motion.div key={a.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                <Link href={`/artikel/${a.slug}`} className="group block">
                                    <div className="rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
                                        <div className="aspect-video bg-metland-blue-deeper flex items-center justify-center text-white/15 text-5xl">📰</div>
                                        <div className="p-5">
                                            <span className="text-xs text-metland-blue font-medium">
                                                {new Date(a.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                            </span>
                                            <h3 className="text-base font-bold text-metland-dark group-hover:text-metland-blue transition-colors mt-1 line-clamp-2">{a.title}</h3>
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
