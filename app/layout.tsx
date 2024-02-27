import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/Footer";
import NavbarSection from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tour & Travel",
  description: "website penyedia jasa tour and travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
