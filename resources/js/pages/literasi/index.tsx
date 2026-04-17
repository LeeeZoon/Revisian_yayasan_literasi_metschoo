import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Search, BookOpen, FileText } from 'lucide-react';
import { books } from '@/lib/mock-data';

const categories = ['Semua', ...new Set(books.map((b) => b.category))];
const categoryColors: Record<string, string> = {
    Kewirausahaan: '#D4A843',
    Perhotelan: '#3D8EC9',
    Kuliner: '#FF6B9D',
    Teknologi: '#4ECDC4',
    Desain: '#9B59B6',
    Akuntansi: '#2A6A9E',
    'Pengembangan Diri': '#E67E22',
    Hospitality: '#1A4A72',
};

export default function LiterasiIndex() {
    return (
        <>
            <Head title="Web Literasi" />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-metland-dark via-metland-blue-deeper to-metland-blue-dark overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
                    backgroundSize: '50px 50px',
                }} />
                {/* Floating book icons */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/5 text-6xl"
                        style={{ left: `${10 + i * 25}%`, top: `${30 + (i % 2) * 30}%` }}
                        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        📚
                    </motion.div>
                ))}
                <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-metland-blue-light text-sm font-medium mb-4">
                            <BookOpen className="w-4 h-4 inline mr-1.5" />
                            E-Library
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Web Literasi</h1>
                        <p className="text-white/60 max-w-xl mx-auto mb-8">Perpustakaan digital Yayasan Pendidikan Metland. Baca buku-buku edukasi kapan saja, di mana saja.</p>
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-metland-dark/40" />
                            <input type="text" placeholder="Cari buku..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-metland-dark text-sm focus:outline-none focus:ring-2 focus:ring-metland-blue shadow-lg" readOnly />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category tabs */}
            <section className="bg-white border-b border-metland-blue-light/30 sticky top-[60px] z-30">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                                    cat === 'Semua'
                                        ? 'bg-metland-blue text-white'
                                        : 'bg-metland-blue-pale text-metland-dark/70 hover:bg-metland-blue-light hover:text-metland-dark'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Book grid */}
            <section className="py-16 bg-metland-sky">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.map((book, idx) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                            >
                                <Link href={`/literasi/${book.id}/read`} className="group block h-full">
                                    <div className="h-full rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                                        {/* Book cover placeholder */}
                                        <div className="aspect-[3/4] relative overflow-hidden" style={{
                                            background: `linear-gradient(135deg, ${categoryColors[book.category] || '#3D8EC9'}CC, ${categoryColors[book.category] || '#3D8EC9'}99)`,
                                        }}>
                                            {/* Book spine effect */}
                                            <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/15" />
                                            {/* Content on cover */}
                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                                <div className="text-white/20 text-5xl mb-3">📖</div>
                                                <h4 className="text-white font-bold text-sm leading-tight">{book.title}</h4>
                                                <p className="text-white/60 text-xs mt-1">{book.author}</p>
                                            </div>
                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-metland-dark/0 group-hover:bg-metland-dark/40 transition-colors duration-300 flex items-center justify-center">
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-lg bg-white text-metland-blue font-bold text-sm shadow-lg">
                                                    Baca Buku
                                                </span>
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div className="p-4">
                                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium mb-2" style={{
                                                backgroundColor: `${categoryColors[book.category] || '#3D8EC9'}15`,
                                                color: categoryColors[book.category] || '#3D8EC9',
                                            }}>
                                                {book.category}
                                            </span>
                                            <h3 className="text-sm font-bold text-metland-dark line-clamp-1 group-hover:text-metland-blue transition-colors">{book.title}</h3>
                                            <div className="flex items-center gap-1 mt-1.5 text-xs text-metland-dark/50">
                                                <FileText className="w-3 h-3" />
                                                {book.pages} halaman
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
