import { Head } from '@inertiajs/react';
import HeroSection from '@/components/landing/hero-section';
import GallerySection from '@/components/landing/gallery-section';
import WelcomeSection from '@/components/landing/welcome-section';
import SchoolShowcaseSection from '@/components/landing/school-showcase-section';
import NewsHighlightSection from '@/components/landing/news-highlight-section';
import StatsSection from '@/components/landing/stats-section';

export default function Welcome() {
    return (
        <>
            <Head title="Beranda">
                <meta name="description" content="Yayasan Pendidikan Metland — Mencetak generasi unggul berwawasan global melalui pendidikan vokasi berstandar internasional. TK, SD, SMK, dan College." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>

            <HeroSection />
            <GallerySection />
            <WelcomeSection />
            <SchoolShowcaseSection />
            <StatsSection />
            <NewsHighlightSection />
        </>
    );
}
