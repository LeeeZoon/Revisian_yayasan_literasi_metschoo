// ===== Mock Data — Yayasan Pendidikan Metland =====
// Data statis sementara berdasarkan riset. Akan diganti API nanti.

export interface School {
    id: number;
    name: string;
    slug: string;
    shortName: string;
    description: string;
    longDescription: string;
    level: string;
    programs?: string[];
    logoPlaceholder: string;
    color: string;
    isActive: boolean;
}

export interface NewsArticle {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnailUrl: string;
    publishedAt: string;
    isActive: boolean;
}

export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    coverUrl: string;
    pdfUrl: string;
    pages: number;
    category: string;
}

export interface GalleryItem {
    id: number;
    imageUrl: string;
    caption: string;
    order: number;
}

export interface StatItem {
    label: string;
    value: number;
    suffix: string;
    icon: string;
}

// ===== Schools =====
export const schools: School[] = [
    {
        id: 1,
        name: 'TK Tunas Metropolitan',
        slug: 'tk-tunas-metropolitan',
        shortName: 'TK',
        description: 'Jenjang KB dan TK dengan pendekatan entrepreneur sejak dini. Membangun fondasi karakter unggul melalui pembelajaran kreatif dan menyenangkan.',
        longDescription: 'TK Tunas Metropolitan merupakan jenjang awal pendidikan di bawah Yayasan Pendidikan Metland yang menerapkan pendekatan Entrepreneurial Global. Melalui program unggulan seperti Entrepreneur Week, Investor Day, dan Metland Fun Zone, anak-anak diperkenalkan dengan konsep kewirausahaan sejak dini dalam suasana belajar yang kreatif, inovatif, dan menyenangkan. Kurikulum dirancang untuk membentuk karakter unggul, kemandirian, dan kreativitas anak.',
        level: 'Taman Kanak-Kanak',
        programs: ['Kelompok Bermain (KB)', 'TK A', 'TK B', 'Entrepreneur Week', 'Metland Fun Zone'],
        logoPlaceholder: '🎨',
        color: '#FF6B9D',
        isActive: true,
    },
    {
        id: 2,
        name: 'SD Tunas Metropolitan',
        slug: 'sd-tunas-metropolitan',
        shortName: 'SD',
        description: 'Sekolah dasar berwawasan Entrepreneurial Global dengan Metland Spirit. Menanamkan jiwa kepemimpinan dan kewirausahaan sejak tingkat dasar.',
        longDescription: 'SD Tunas Metropolitan mengusung visi membentuk siswa menjadi pemimpin berkarakter unggul dan memiliki jiwa entrepreneur. Sebagai sekolah berwawasan Entrepreneurial Global, SD ini mengintegrasikan pembelajaran akademis dengan kegiatan kewirausahaan nyata. Program unggulan Metland Food Festival memberikan pengalaman bisnis langsung kepada siswa, sementara pembelajaran berbasis proyek memastikan setiap anak mengembangkan keterampilan abad ke-21.',
        level: 'Sekolah Dasar',
        programs: ['Kurikulum Merdeka', 'Metland Food Festival', 'Entrepreneur Project', 'English Program', 'Leadership Training'],
        logoPlaceholder: '📚',
        color: '#4ECDC4',
        isActive: true,
    },
    {
        id: 3,
        name: 'SMK Pariwisata Metland School',
        slug: 'smk-pariwisata-metland-school',
        shortName: 'SMK',
        description: 'SMK vokasi berstandar internasional dengan 5 program keahlian unggulan. Kerjasama industri nasional dan internasional untuk kesiapan kerja.',
        longDescription: 'SMK Pariwisata Metland School (NPSN: 69893377) adalah sekolah menengah kejuruan yang berkomitmen menyelenggarakan pendidikan vokasi berstandar internasional. Dengan 5 program keahlian — Kuliner (Tata Boga), Perhotelan (Akomodasi Perhotelan), Akuntansi dan Keuangan Lembaga, Pengembangan Perangkat Lunak dan Gim (PPLG), serta Desain Komunikasi Visual (DKV) — SMK ini menekankan pengembangan keterampilan praktis, sikap profesional, jiwa entrepreneurship, dan kepemimpinan. Kerjasama vokasi dengan industri nasional dan internasional memastikan lulusan siap bersaing di dunia kerja global.',
        level: 'Sekolah Menengah Kejuruan',
        programs: ['Kuliner / Tata Boga', 'Perhotelan', 'Akuntansi & Keuangan', 'PPLG (Perangkat Lunak & Gim)', 'DKV (Desain Komunikasi Visual)'],
        logoPlaceholder: '🎓',
        color: '#3D8EC9',
        isActive: true,
    },
    {
        id: 4,
        name: 'Metland College',
        slug: 'metland-college',
        shortName: 'College',
        description: 'Lembaga Pelatihan Kerja (LPK) fokus hospitality dengan penyaluran kerja internasional ke Dubai, Qatar, Jerman, dan Australia.',
        longDescription: 'Metland College merupakan Lembaga Pelatihan Kerja (LPK) yang dikelola oleh Yayasan Pendidikan Metland, berfokus pada pelatihan dan pengembangan keterampilan kerja di bidang hospitality (perhotelan) dan keahlian praktis lainnya. Beroperasi sejak 2016, Metland College aktif menjalin MoU dengan berbagai SMK di wilayah Kabupaten Bogor untuk membantu penyaluran tenaga kerja profesional, baik di industri dalam negeri maupun peluang kerja di luar negeri seperti Dubai, Qatar, Jerman, dan Australia. Tujuan utamanya adalah menciptakan zero unemployment bagi lulusan.',
        level: 'Lembaga Pelatihan Kerja',
        programs: ['Hospitality Management', 'Hotel & Resort Operations', 'F&B Service Excellence', 'International Placement Program', 'Professional Certification'],
        logoPlaceholder: '🌐',
        color: '#D4A843',
        isActive: true,
    },
];

// ===== News Articles =====
export const newsArticles: NewsArticle[] = [
    {
        id: 1,
        title: 'Entrepreneur Week 2026: Siswa Metland Unjuk Kreativitas Bisnis',
        slug: 'entrepreneur-week-2026',
        excerpt: 'Ratusan siswa dari TK hingga SMK berpartisipasi dalam Entrepreneur Week tahunan, menghadirkan inovasi produk dan layanan kreatif.',
        content: 'Yayasan Pendidikan Metland kembali menggelar Entrepreneur Week 2026 yang melibatkan seluruh unit pendidikan mulai dari TK Tunas Metropolitan hingga SMK Pariwisata Metland School. Kegiatan yang berlangsung selama satu minggu ini menampilkan berbagai stan bisnis yang dikelola langsung oleh para siswa, mulai dari produk kuliner kreasi sendiri, kerajinan tangan, hingga layanan digital. Acara puncak ditandai dengan Investor Day di mana para orang tua dan pelaku industri hadir sebagai investor potensial.',
        thumbnailUrl: '/images/placeholder/news-1.jpg',
        publishedAt: '2026-03-15',
        isActive: true,
    },
    {
        id: 2,
        title: 'SMK Metland Jalin MoU dengan Hotel Bintang 5 untuk Magang Internasional',
        slug: 'mou-hotel-bintang-5',
        excerpt: 'Kerjasama strategis ini membuka peluang magang di Dubai dan Qatar bagi siswa program Perhotelan.',
        content: 'SMK Pariwisata Metland School resmi menandatangani Memorandum of Understanding (MoU) dengan jaringan hotel bintang 5 di Dubai dan Qatar. Kerjasama ini membuka peluang magang internasional bagi siswa program Perhotelan dan Kuliner, memberikan pengalaman kerja langsung di industri hospitality global. Program ini merupakan bagian dari komitmen Metland College dalam menyalurkan lulusan berkualitas ke pasar kerja internasional.',
        thumbnailUrl: '/images/placeholder/news-2.jpg',
        publishedAt: '2026-02-28',
        isActive: true,
    },
    {
        id: 3,
        title: 'Wisuda Angkatan ke-8 SMK Pariwisata Metland School',
        slug: 'wisuda-angkatan-8',
        excerpt: '150 lulusan diwisuda dengan tingkat penyerapan kerja mencapai 95% di berbagai sektor industri.',
        content: 'SMK Pariwisata Metland School menggelar wisuda angkatan ke-8 dengan meluluskan 150 siswa dari berbagai program keahlian. Ketua Yayasan Wahyu Sulistio dalam sambutannya menyampaikan bahwa tingkat penyerapan kerja lulusan mencapai 95%, baik di industri dalam negeri maupun luar negeri. Lulusan program PPLG bahkan berhasil magang di perusahaan teknologi ternama, sementara lulusan Kuliner dan Perhotelan diterima di hotel dan restoran kelas dunia.',
        thumbnailUrl: '/images/placeholder/news-3.jpg',
        publishedAt: '2026-01-20',
        isActive: true,
    },
    {
        id: 4,
        title: 'Kelas Praktik Kuliner: Siswa Belajar Masak Bersama Chef Profesional',
        slug: 'kelas-praktik-kuliner',
        excerpt: 'Program Tata Boga menghadirkan chef profesional untuk melatih teknik memasak tingkat lanjut.',
        content: 'Program keahlian Kuliner (Tata Boga) SMK Pariwisata Metland School mengadakan kelas praktik bersama chef profesional dari hotel berbintang. Siswa mendapatkan kesempatan belajar teknik memasak internasional, food plating, dan manajemen dapur secara langsung. Kegiatan ini merupakan bagian dari kurikulum berbasis industri yang menjadi ciri khas pendidikan di Metland School.',
        thumbnailUrl: '/images/placeholder/news-4.jpg',
        publishedAt: '2025-12-10',
        isActive: true,
    },
    {
        id: 5,
        title: 'Kunjungan Industri ke Kawasan Wisata Bali untuk Siswa Perhotelan',
        slug: 'kunjungan-industri-bali',
        excerpt: 'Siswa program Perhotelan berkunjung ke resort dan hotel di Bali untuk pengalaman belajar langsung.',
        content: 'Sebanyak 40 siswa program Perhotelan (Akomodasi Perhotelan) SMK Pariwisata Metland School melangsungkan kunjungan industri ke berbagai hotel dan resort di Bali. Selama 5 hari, para siswa mempelajari operasional hotel, standar pelayanan internasional, dan tren hospitality terkini. Kunjungan ini memperkuat pemahaman teori yang telah dipelajari di kelas dengan pengalaman nyata di lapangan.',
        thumbnailUrl: '/images/placeholder/news-5.jpg',
        publishedAt: '2025-11-22',
        isActive: true,
    },
    {
        id: 6,
        title: 'Siswa DKV Raih Juara di Lomba Desain Poster Nasional',
        slug: 'juara-lomba-dkv',
        excerpt: 'Prestasi membanggakan dari siswa program DKV yang berhasil menembus final dan meraih juara tingkat nasional.',
        content: 'Siswa program Desain Komunikasi Visual (DKV) SMK Pariwisata Metland School berhasil meraih juara di lomba desain poster tingkat nasional. Karya yang bertemakan lingkungan hidup ini dipilih dari ratusan peserta dari seluruh Indonesia. Keberhasilan ini membuktikan kualitas pendidikan kreatif di Metland School yang terus mendorong siswa untuk berprestasi di tingkat nasional maupun internasional.',
        thumbnailUrl: '/images/placeholder/news-6.jpg',
        publishedAt: '2025-10-15',
        isActive: true,
    },
];

// ===== Books =====
export const books: Book[] = [
    {
        id: 1,
        title: 'Panduan Entrepreneur Muda',
        author: 'Tim YPM',
        description: 'Buku panduan lengkap untuk memulai perjalanan kewirausahaan bagi generasi muda Indonesia.',
        coverUrl: '/images/placeholder/book-1.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 120,
        category: 'Kewirausahaan',
    },
    {
        id: 2,
        title: 'Dasar-Dasar Perhotelan Modern',
        author: 'Departemen Perhotelan Metland',
        description: 'Modul pembelajaran perhotelan yang mencakup front office, housekeeping, dan F&B service.',
        coverUrl: '/images/placeholder/book-2.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 185,
        category: 'Perhotelan',
    },
    {
        id: 3,
        title: 'Seni Kuliner Nusantara',
        author: 'Chef Akademi Metland',
        description: 'Eksplorasi kekayaan kuliner Indonesia dengan teknik memasak tradisional dan modern.',
        coverUrl: '/images/placeholder/book-3.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 210,
        category: 'Kuliner',
    },
    {
        id: 4,
        title: 'Pemrograman Web untuk Pemula',
        author: 'Tim PPLG Metland',
        description: 'Panduan belajar HTML, CSS, dan JavaScript dari dasar hingga membuat website pertama.',
        coverUrl: '/images/placeholder/book-4.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 156,
        category: 'Teknologi',
    },
    {
        id: 5,
        title: 'Desain Grafis & Branding',
        author: 'Tim DKV Metland',
        description: 'Prinsip-prinsip desain visual, tipografi, dan strategi branding untuk bisnis modern.',
        coverUrl: '/images/placeholder/book-5.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 140,
        category: 'Desain',
    },
    {
        id: 6,
        title: 'Akuntansi Dasar untuk SMK',
        author: 'Departemen Akuntansi',
        description: 'Modul akuntansi dan keuangan lembaga yang disusun sesuai kurikulum merdeka.',
        coverUrl: '/images/placeholder/book-6.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 198,
        category: 'Akuntansi',
    },
    {
        id: 7,
        title: 'Leadership & Soft Skills',
        author: 'Wahyu Sulistio',
        description: 'Mengembangkan kemampuan kepemimpinan dan keterampilan interpersonal untuk sukses karir.',
        coverUrl: '/images/placeholder/book-7.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 95,
        category: 'Pengembangan Diri',
    },
    {
        id: 8,
        title: 'Global Hospitality Trends',
        author: 'Metland College',
        description: 'Tren terkini industri hospitality global dan peluang karir internasional.',
        coverUrl: '/images/placeholder/book-8.jpg',
        pdfUrl: '/books/sample.pdf',
        pages: 175,
        category: 'Hospitality',
    },
];

// ===== Gallery =====
export const galleryItems: GalleryItem[] = [
    { id: 1, imageUrl: '/images/placeholder/gallery-1.jpg', caption: 'Upacara Bendera Hari Senin', order: 1 },
    { id: 2, imageUrl: '/images/placeholder/gallery-2.jpg', caption: 'Praktik Kuliner di Dapur Modern', order: 2 },
    { id: 3, imageUrl: '/images/placeholder/gallery-3.jpg', caption: 'Entrepreneur Week — Investor Day', order: 3 },
    { id: 4, imageUrl: '/images/placeholder/gallery-4.jpg', caption: 'Wisuda Angkatan SMK Metland', order: 4 },
    { id: 5, imageUrl: '/images/placeholder/gallery-5.jpg', caption: 'Kelas Perhotelan — Table Setting', order: 5 },
    { id: 6, imageUrl: '/images/placeholder/gallery-6.jpg', caption: 'Lomba DKV Tingkat Nasional', order: 6 },
];

// ===== Stats =====
export const stats: StatItem[] = [
    { label: 'Siswa Aktif', value: 500, suffix: '+', icon: 'Users' },
    { label: 'Tenaga Pengajar', value: 50, suffix: '+', icon: 'GraduationCap' },
    { label: 'Unit Sekolah', value: 4, suffix: '', icon: 'School' },
    { label: 'Buku Literasi', value: 100, suffix: '+', icon: 'BookOpen' },
];

// ===== Site Settings =====
export const siteSettings = {
    chairmanWelcome: {
        name: 'Wahyu Sulistio',
        title: 'Ketua Yayasan Pendidikan Metland',
        quote: 'Pendidikan adalah investasi terbaik untuk masa depan bangsa. Di Yayasan Pendidikan Metland, kami berkomitmen untuk mencetak generasi muda yang tidak hanya cerdas secara akademis, tetapi juga berkarakter unggul, berjiwa entrepreneur, dan siap bersaing di kancah global.',
        message: 'Selamat datang di Yayasan Pendidikan Metland. Sebagai bagian dari PT Metropolitan Land Tbk, kami percaya bahwa setiap anak memiliki potensi luar biasa yang menanti untuk dikembangkan. Melalui empat unit pendidikan kami — TK Tunas Metropolitan, SD Tunas Metropolitan, SMK Pariwisata Metland School, dan Metland College — kami menyediakan lingkungan belajar yang mendukung pertumbuhan holistik setiap peserta didik. Dengan semangat Metland Spirit dan wawasan Entrepreneurial Global, kami bertekad melahirkan pemimpin masa depan yang mampu memberikan kontribusi nyata bagi bangsa dan dunia.',
        imageUrl: '/images/placeholder/chairman.jpg',
    },
    yayasan: {
        name: 'Yayasan Pendidikan Metland',
        tagline: 'Mencetak Generasi Unggul Berwawasan Global',
        visi: 'Menjadi lembaga pendidikan yang lulusannya memiliki performa karakter unggul dan berkompetensi berstandar internasional.',
        misi: [
            'Memberikan layanan pendidikan yang mengembangkan knowledge, skill, dan attitude berbasis industri',
            'Mengembangkan profesionalisme guru dan tenaga pendidik secara berkelanjutan',
            'Menjalin kerja sama kemitraan yang luas dengan Dunia Usaha dan Dunia Industri (DUDI)',
            'Membentuk siswa menjadi pemimpin berkarakter unggul dan berjiwa entrepreneur',
            'Menyediakan fasilitas dan lingkungan belajar yang kondusif serta berstandar internasional',
        ],
        address: 'Jl. Taman Metro Raya, Metland Transyogi, Kecamatan Cileungsi, Kabupaten Bogor, Jawa Barat',
        phone: '(021) XXXX-XXXX',
        email: 'info@ypmmetland.sch.id',
    },
};

// ===== Organization Structure =====
export const organizationStructure = {
    ketuaDewanPendiri: {
        name: 'Nanda Widya',
        role: 'Ketua Dewan Pendiri',
        imageUrl: '/images/placeholder/org-1.jpg',
    },
    ketuaYayasan: {
        name: 'Wahyu Sulistio',
        role: 'Ketua Yayasan',
        imageUrl: '/images/placeholder/org-2.jpg',
    },
    divisions: [
        { name: 'Bidang Akademik', head: 'Dr. Ahmad Fauzi', role: 'Kepala Bidang Akademik', imageUrl: '/images/placeholder/org-3.jpg' },
        { name: 'Bidang Keuangan', head: 'Siti Rahayu, SE', role: 'Kepala Bidang Keuangan', imageUrl: '/images/placeholder/org-4.jpg' },
        { name: 'Bidang SDM', head: 'Budi Santoso, M.Pd', role: 'Kepala Bidang SDM', imageUrl: '/images/placeholder/org-5.jpg' },
        { name: 'Bidang Sarana & Prasarana', head: 'Ir. Hendra Wijaya', role: 'Kepala Bidang Sarpras', imageUrl: '/images/placeholder/org-6.jpg' },
    ],
    schoolHeads: [
        { school: 'TK Tunas Metropolitan', name: 'Ibu Dewi Lestari, S.Pd', role: 'Kepala Sekolah TK', imageUrl: '/images/placeholder/org-7.jpg' },
        { school: 'SD Tunas Metropolitan', name: 'Bapak Agus Priyanto, M.Pd', role: 'Kepala Sekolah SD', imageUrl: '/images/placeholder/org-8.jpg' },
        { school: 'SMK Pariwisata Metland School', name: 'Ibu Sri Mulyani, M.Pd', role: 'Kepala Sekolah SMK', imageUrl: '/images/placeholder/org-9.jpg' },
        { school: 'Metland College', name: 'Bapak Rizky Firmansyah, MBA', role: 'Direktur Metland College', imageUrl: '/images/placeholder/org-10.jpg' },
    ],
};
