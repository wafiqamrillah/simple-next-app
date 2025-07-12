import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed p-3 top-0 w-full">
            <div className="h-14 flex items-center gap-6 bg-gradient-to-b p-3 from-blue-600 to-blue-950 border-4 rounded-lg border-white overflow-y-auto shadow-lg shadow-black/30">
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/profile">
                    Profile
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
}