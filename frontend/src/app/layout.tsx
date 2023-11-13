import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BlogVoyage",
  description: "A Blogging Website made by Vikas Parmar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${josefin_sans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
