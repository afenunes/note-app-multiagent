import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note App Multi-Agent",
  description: "Collaborative note-taking app built with multi-agent workflow"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
