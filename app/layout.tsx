import type { Metadata, Viewport } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpiderWeb · Jelajahi · Eksperimen · Temukan",
  description: "Eksperimen sains langsung untuk pikiran penasaran, keluarga, dan kelas. Dibimbing langkah demi langkah oleh Webby pendamping sainsmu.",
  openGraph: {
    title: "SpiderWeb · Jelajahi · Eksperimen · Temukan",
    description: "Eksperimen sains langsung untuk pikiran penasaran, keluarga, dan kelas.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="id" className={`${fredoka.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-cloud-white text-deep-charcoal font-body selection:bg-discovery-yellow selection:text-deep-charcoal">
        {children}
      </body>
    </html>
  );
}