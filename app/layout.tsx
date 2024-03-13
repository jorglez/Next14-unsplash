import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image gallery",
  description: "Galería de imágenes consumiendo unsplash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-white flex flex-col min-h-screen justify-between`}
      >
        {children}
        <footer className="bg-slate-950 text-white h-20 p-5 w-full">
          <p>
            <span className="font-bold">Dev:</span> Jorge Luis Gonzalez Vargas
          </p>
          <p>
            <span className="font-bold">Github:</span>{" "}
            <a href="https://github.com/jorglez">https://github.com/jorglez</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
