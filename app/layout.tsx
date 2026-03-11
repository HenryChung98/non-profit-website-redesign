import type { Metadata, Viewport } from "next";
import { SITE } from "@/lib/constants";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  authors: [{ name: SITE.name }],
  twitter: {
    title: "Welcome",
    description:
      "Social recreation center for adults 50+ with over 50 activity groups in Coquitlam",
    images: SITE.image,
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`antialiased`}>
        <main className="flex min-h-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
