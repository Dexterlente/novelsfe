import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_nav/NavBar";
import Footer from "./_nav/Footer";
import { ROOT_SEO } from "./_seo/seo_config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ROOT_SEO.TITLE,
  description: ROOT_SEO.DESCRIPTION,
  icons: {
    icon: ROOT_SEO.LOGO,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#464646] overflow-x-hidden w-full">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
