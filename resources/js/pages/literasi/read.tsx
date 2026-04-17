import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { books } from '@/lib/mock-data';

export default function LiterasiRead({ id }: { id?: string }) {
    const book = books.find((b) => b.id === Number(id)) || books[0];

    return (
        <>
            <Head title={`Baca: ${book.title}`} />

            {/* Toolbar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-metland-dark/95 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 lg:px-8 h-14 flex items-center justify-between">
                    <Link href="/literasi" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Kembali ke Perpustakaan</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-metland-blue-light" />
                        <span className="text-white text-sm font-medium truncate max-w-[200px] sm:max-w-none">{book.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                            <ZoomOut className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                            <ZoomIn className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Reader area */}
            <div className="min-h-screen bg-gradient-to-b from-metland-dark via-[#162A42] to-metland-dark pt-14 flex items-center justify-center p-4 lg:p-8">
                <motion.div
                    className="w-full max-w-5xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Book mockup */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        {/* Two-page spread */}
                        <div className="flex h-full">
                            {/* Left page */}
                            <div className="flex-1 bg-[#FFF8F0] relative">
                                {/* Page texture */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23000000'/%3E%3C/svg%3E")`,
                                }} />
                                {/* Content */}
                                <div className="relative p-8 lg:p-12 h-full flex flex-col">
                                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                                        <div className="text-6xl mb-6">📖</div>
                                        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-metland-dark mb-3">{book.title}</h2>
                                        <p className="text-sm text-metland-dark/60 mb-2">{book.author}</p>
                                        <div className="gold-line mx-auto my-4" />
                                        <p className="text-sm text-metland-dark/50 max-w-xs">{book.description}</p>
                                    </div>
                                    <div className="text-center text-xs text-metland-dark/30">Halaman 1</div>
                                </div>
                                {/* Inner shadow */}
                                <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent" />
                            </div>
                            {/* Center spine */}
                            <div className="w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 shadow-inner" />
                            {/* Right page */}
                            <div className="flex-1 bg-[#FFFAF5] relative">
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23000000'/%3E%3C/svg%3E")`,
                                }} />
                                <div className="relative p-8 lg:p-12 h-full flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-serif font-bold text-metland-dark mb-4">Daftar Isi</h3>
                                        <div className="space-y-3">
                                            {['Kata Pengantar', 'Bab 1: Pendahuluan', 'Bab 2: Konsep Dasar', 'Bab 3: Praktik & Implementasi', 'Bab 4: Studi Kasus', 'Bab 5: Evaluasi & Refleksi', 'Penutup', 'Daftar Pustaka'].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center text-sm border-b border-dashed border-metland-dark/10 pb-1">
                                                    <span className="text-metland-dark/70">{item}</span>
                                                    <span className="text-metland-dark/40 text-xs">{i * 15 + 1}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-center text-xs text-metland-dark/30">Halaman 2</div>
                                </div>
                                <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent" />
                            </div>
                        </div>
                    </div>

                    {/* Page navigation */}
                    <div className="flex items-center justify-between mt-6">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-sm">
                            <ChevronLeft className="w-4 h-4" /> Sebelumnya
                        </button>
                        <span className="text-white/50 text-sm">Halaman 1-2 dari {book.pages}</span>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-sm">
                            Selanjutnya <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Info banner */}
                    <motion.div
                        className="mt-8 p-4 rounded-xl bg-metland-blue/20 border border-metland-blue/30 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <p className="text-white/70 text-sm">
                            🔧 <span className="font-medium text-white">Flipbook Reader</span> akan terhubung ke sistem backend saat fitur backend diaktifkan.
                            Saat ini menampilkan tampilan mockup interaktif.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
