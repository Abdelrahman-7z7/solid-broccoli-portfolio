import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import CursorTracker from "../components/CursorTracker";
import Footer from "../components/sections/Footer";
import StructuredData from "../components/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdelrahman Reyad Elorabi - Backend Engineer & Fullstack Developer",
  description: "Professional portfolio of Abdelrahman Reyad Elorabi, a passionate backend engineer and fullstack developer based in Istanbul. Specializing in Node.js, React, database design, and scalable web applications.",
  keywords: [
    "Abdelrahman Reyad Elorabi",
    "Backend Engineer",
    "Fullstack Developer",
    "Node.js Developer",
    "React Developer",
    "Database Specialist",
    "Istanbul Developer",
    "Web Development",
    "API Development",
    "Portfolio"
  ],
  authors: [{ name: "Abdelrahman Reyad Elorabi" }],
  creator: "Abdelrahman Reyad Elorabi",
  publisher: "Abdelrahman Reyad Elorabi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abdelrahman-reyad-elorabi-portfolio.vercel.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Abdelrahman Reyad Elorabi - Backend Engineer & Fullstack Developer",
    description: "Professional portfolio of Abdelrahman Reyad Elorabi, a passionate backend engineer and fullstack developer based in Istanbul. Specializing in Node.js, React, database design, and scalable web applications.",
    url: 'https://abdelrahman-reyad-elorabi-portfolio.vercel.app/', // Replace with your actual domain
    siteName: 'Abdelrahman Reyad Elorabi Portfolio',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Abdelrahman Reyad Elorabi - Backend Engineer & Fullstack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Abdelrahman Reyad Elorabi - Backend Engineer & Fullstack Developer",
    description: "Professional portfolio of Abdelrahman Reyad Elorabi, a passionate backend engineer and fullstack developer based in Istanbul.",
    images: ['/og-image.jpg'], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=76vP6VL7HbOHYBcvSxkpKLgSJ02kYRAOdny6qeE0MeQ', // Replace with your actual Google verification code
  },
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
        <StructuredData />
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
