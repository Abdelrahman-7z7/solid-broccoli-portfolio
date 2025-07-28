import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import CursorTracker from "../components/CursorTracker";
import Footer from "../components/sections/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A modern, glassmorphism portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Ensure page starts at top on load
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body className={`bg-[#004030] text-[#FFF9E5] font-sans min-h-screen relative overflow-x-hidden ${inter.variable}`}>
        <CursorTracker />
        <Header />
        <main className="relative z-10 pt-5 max-w-5xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
