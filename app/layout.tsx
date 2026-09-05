import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebForge AI — Websites woven from words",
  description: "Describe your business. We forge it into a living website. Claude Fable 5 style — editorial, calm, crafted.",
  openGraph: {
    title: "WebForge AI",
    description: "Websites woven from words. Not code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFFCF5] text-[#141413] antialiased selection:bg-[#D97757] selection:text-white">
        {children}
      </body>
    </html>
  );
}
