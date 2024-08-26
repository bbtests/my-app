import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import AppModal from "@/components/Modal";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Language Acedemy",
  description: "A learning app for programmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppModal>
          {children}
        </AppModal>
      </body>
    </html>
  );
}
