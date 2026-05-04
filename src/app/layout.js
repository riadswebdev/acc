import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Borrowing",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-linear-to-r from-gray-900 to-gray-950">
        <main className="w-full max-w-350 mx-auto ">{children}</main>
        <Footer />
        <Toaster/>
      </body>
    </html>
  );
}
