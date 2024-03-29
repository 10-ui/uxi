import type { Metadata } from "next";
import { lineFont } from "@/lib/fonts";
import Header from "@/app/_components/header";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={cn(`${lineFont.className}`, "no-scrollbar")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
