import type { Metadata } from "next";
import { Libre_Caslon_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Angelica Ayos — Portfolio",
  description: "Full-stack developer with 5+ years building accessible, performant web applications. Bridging the gap between clean architecture and pixel-perfect interfaces.",
  openGraph: {
    title: "Angelica Ayos — Portfolio",
    description: "Full-stack developer with 5+ years building accessible, performant web applications. Bridging the gap between clean architecture and pixel-perfect interfaces.",
    url: "https://angelica-ayos-portfolio.vercel.app",
    siteName: "Angelica Ayos",
    images: [
      {
        url: "https://angelica-ayos-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelica Ayos — Portfolio",
    description: "Full-stack developer with 5+ years building accessible, performant web applications. Bridging the gap between clean architecture and pixel-perfect interfaces.",
    images: ["https://angelica-ayos-portfolio.vercel.app/og-image.png"],
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caslon.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
