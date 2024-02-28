import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/Footer";
import NavbarSection from "@/components/Navbar";
import TopbarSection from "@/components/Topbar";

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TopbarSection/>
        <NavbarSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
