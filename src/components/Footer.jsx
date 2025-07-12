import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="fixed bottom-0 w-full bg-black flex items-center justify-center gap-3">
            <span className="text-sm font-bold">
                Created by Ahmad Wafiq Amrillah ({currentYear})
            </span>
        </footer>
    );
}