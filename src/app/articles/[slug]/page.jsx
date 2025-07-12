// pages/artikel/[slug].js
import { useEffect } from 'react'; // Import useEffect
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    const { slug } = router.query;

    const dummyArticles = {
        'belajar-nextjs': {
            title: 'Memulai Next.js untuk Pemula',
            author: 'Gemini AI',
            content: 'Next.js adalah framework React yang powerful untuk membangun aplikasi web full-stack. Artikel ini akan memandu Anda memulai perjalanan dengan Next.js.',
        },
        'tips-css-modern': {
            title: 'Tips CSS Modern untuk Desain Responsif',
            author: 'Desainer Hebat',
            content: 'Pelajari teknik-teknik CSS terbaru untuk membuat tampilan situs web yang responsif dan menarik di berbagai perangkat.',
        },
    };

    const artikel = dummyArticles[slug];

    useEffect(() => {
        if (!slug) {
            return;
        }

        if (!artikel) {
            router.replace('/404');
        }
    }, [slug, artikel, router]);

    if (!artikel) {
        return <div>Loading atau Mengarahkan ke Halaman Tidak Ditemukan...</div>;
    }

    return (
        <div>
            <h1>{artikel.title}</h1>
            <p>Oleh: {artikel.author}</p>
            <hr />
            <p>{artikel.content}</p>
            <p>
                <a href="/">Kembali ke Halaman Utama</a>
            </p>
        </div>
    );
};