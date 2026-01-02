// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopMate",
  description: "Your favorite tech store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar અહીં એક જ વાર મુકવાનું હોય */}
        <Navbar />

        {/* બાકીના પેજ અહીં લોડ થશે */}
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}