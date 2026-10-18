import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { site, socialPreview } from "@/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "EmberBuild - Web Design & Development Agency in Mumbai",
  description:
    "EmberBuild designs and develops modern, high-performing websites for businesses and growing brands in Mumbai and across India. Build a stronger online presence with us.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    title: socialPreview.title,
    description: socialPreview.description,
    images: [socialPreview.image],
  },
  twitter: {
    card: "summary_large_image",
    title: socialPreview.title,
    description: socialPreview.description,
    images: [socialPreview.image.url],
  },
  verification: {
    other: {
      "msvalidate.01": "5501518F83AB8C0ABF1DF0F90A4A8E2F",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
