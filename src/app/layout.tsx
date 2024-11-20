import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StoryLoom – Weave Your Stories, Share Your Voice, Inspire the World",
  description:
    "Discover StoryLoom, the ultimate blogging platform for storytellers and creators. Share your ideas, connect with readers, and craft inspiring stories in an intuitive, community-driven space.",
  keywords: [
    "Blogging platform",
    "Share stories online",
    "Best platform for writers",
    "Connect with readers",
    "Storytelling website",
    "Create blogs effortlessly",
    "Community for storytellers",
    "Publish articles online",
    "Engage readers worldwide",
    "Writers and creators platform",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/de6398ff68.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
