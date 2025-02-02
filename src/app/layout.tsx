import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_nav/NavBar";
import Footer from "./_nav/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master Novels",
  description: "Your daily dose of novel needs",
  icons: {
    icon: "/favicon.ico",
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
