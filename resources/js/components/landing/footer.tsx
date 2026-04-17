import { Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { siteSettings, schools } from '@/lib/mock-data';

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-metland-dark text-white overflow-hidden">
            {/* Decorative top wave */}
            <div className="absolute top-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" className="w-full">
                    <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" fill="var(--background)" />
                </svg>
            </div>

            {/* Main footer content */}
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-24 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10">
                                <svg viewBox="0 0 100 120" className="w-10 h-10">
                                    <path d="M50 5 C50 5 62 20 62 30 C62 38 56 42 50 42 C44 42 38 38 38 30 C38 20 50 5 50 5Z" fill="#3D8EC9" />
                                    <path d="M20 45 L50 75 L80 45 L80 85 C80 85 68 72 50 72 C32 72 20 85 20 85 Z" fill="#3D8EC9" />
                                    <path d="M10 75 L10 115 L35 115 L35 95 C35 88 42 82 50 82 C58 82 65 88 65 95 L65 115 L90 115 L90 75 C90 75 75 60 50 60 C25 60 10 75 10 75Z" fill="#A8D8F0" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-base font-bold leading-tight">Yayasan Pendidikan</span>
                                <span className="block text-sm font-medium tracking-wider text-metland-blue-light">METLAND</span>
                            </div>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed mb-4">
                            {siteSettings.yayasan.tagline}. Membentuk generasi unggul melalui pendidikan vokasi berstandar internasional dengan semangat Metland Spirit.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-metland-blue transition-colors duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-metland-blue transition-colors duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-metland-blue transition-colors duration-300">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-metland-gold mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Beranda', href: '/' },
                                { label: 'Visi & Misi', href: '/profil/visi-misi' },
                                { label: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
                                { label: 'Artikel & Berita', href: '/artikel' },
                                { label: 'Web Literasi', href: '/literasi' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-white/60 hover:text-metland-blue-light transition-colors duration-200 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-metland-blue-light/50" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Unit Sekolah */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-metland-gold mb-4">Unit Sekolah</h3>
                        <ul className="space-y-2.5">
                            {schools.map((school) => (
                                <li key={school.id}>
                                    <Link href={`/sekolah/${school.slug}`} className="text-sm text-white/60 hover:text-metland-blue-light transition-colors duration-200 flex items-center gap-2">
                                        <span className="text-base">{school.logoPlaceholder}</span>
                                        {school.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-metland-gold mb-4">Hubungi Kami</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-0.5 text-metland-blue-light shrink-0" />
                                <span className="text-sm text-white/60 leading-relaxed">{siteSettings.yayasan.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-metland-blue-light shrink-0" />
                                <span className="text-sm text-white/60">{siteSettings.yayasan.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-metland-blue-light shrink-0" />
                                <span className="text-sm text-white/60">{siteSettings.yayasan.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/40">
                        &copy; {currentYear} Yayasan Pendidikan Metland. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-metland-blue/20 flex items-center justify-center hover:bg-metland-blue transition-all duration-300 group"
                    >
                        <ArrowUp className="w-4 h-4 text-metland-blue-light group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
