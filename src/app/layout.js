import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Layouts
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Next App",
  description: "Powered by Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden bg-red-300`}
      >
        <Navbar />

        <main className="pt-17 flex flex-col flex-auto overflow-auto min-h-screen max-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
