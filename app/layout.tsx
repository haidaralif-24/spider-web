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
  title: "SpiderWeb · Explore · Experiment · Discover",
  description: "Hands-on science experiments for curious minds, families, and classrooms. Guided step-by-step by Webby your science companion.",
  openGraph: {
    title: "SpiderWeb · Explore · Experiment · Discover",
    description: "Hands-on science experiments for curious minds, families, and classrooms.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable} h-full antialiased`}>
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