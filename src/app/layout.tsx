import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vaelor — Precision-Built Websites for Defense Contractors",
  description: "Vaelor modernizes the digital presence of defense contractors, DoD-aligned firms, and federal civilian agencies. From discovery to launch in 14 days.",
  keywords: "defense contractor website, government contractor web design, DoD digital presence, federal IT web design",
  openGraph: {
    title: "Vaelor — Precision-Built Websites for Defense Contractors",
    description: "From discovery to launch in 14 days. Built for government contractors, defense vendors, and aerospace firms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`} style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
