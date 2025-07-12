'use client';

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center flex-auto gap-3">
            <div className="bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white shadow-lg shadow-black/30 text-center">
                <h1 className="text-7xl font-bold">
                    404
                </h1>

                <p className="mt-4">
                    Halaman tidak ditemukan.
                </p>
            </div>

            
            <div className="bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white shadow-lg shadow-black/30 text-center flex flex-col items-center">
                <button onClick={ () => window.location.reload(true) } className="hover:bg-white/15 focus:bg-black/15 transition-colors px-2 py-3 rounded-md cursor-pointer">
                    Coba Lagi
                </button>
                <Link href="/">
                    <button className="hover:bg-white/15 focus:bg-black/15 transition-colors px-2 py-3 rounded-md cursor-pointer">
                        Kembali ke Beranda
                    </button>
                </Link>
            </div>
        </div>
    );
}