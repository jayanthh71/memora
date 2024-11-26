import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { abril, charis } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memora",
  description: "A place for all your memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abril.variable} ${charis.variable}`}>
      <body className="overflow-x-hidden bg-background antialiased">
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <div className="flex flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
