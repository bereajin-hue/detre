import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../../data/site-config";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  metadataBase: new URL(siteConfig.meta.canonical),
  alternates: {
    canonical: siteConfig.meta.canonical,
  },
  verification: {
    other: {
      "naver-site-verification": siteConfig.meta.naverVerification,
    },
    google: siteConfig.meta.googleVerification || undefined,
  },
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.canonical,
    siteName: siteConfig.header.projectName,
    images: [siteConfig.meta.ogImage],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.header.projectName,
  description: siteConfig.meta.description,
  url: siteConfig.meta.canonical,
  telephone: siteConfig.contact.phone,
  image: `${siteConfig.meta.canonical}${siteConfig.meta.ogImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "화성시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
