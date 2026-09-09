import type { Metadata } from "next";
import Script from "next/script";
import { MotionConfig } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-vector-white text-vector-black">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5DL47FMSE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q5DL47FMSE');
          `}
        </Script>

        {/* reducedMotion="user": toda animación de Framer Motion respeta
            prefers-reduced-motion automáticamente en toda la app. */}
        <MotionConfig reducedMotion="user">
          <Preloader />
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
