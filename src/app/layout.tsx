import type { Metadata } from "next";
import Fonts from "@/assets/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Bybi",
  description: "A Personal Blog by Habibi Zaidatul Mamuriyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Fonts} font-sans antialiased`}>{children}</body>
    </html>
  );
}
