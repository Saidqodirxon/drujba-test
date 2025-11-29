import "./globals.css";
import "./styles/main.scss";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: "Xalqaro Do'stlik Saroyi Ticket",
  description: "Next.js App Router + TS + Tailwind + SCSS starter",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="">
      <body className="bg-background text-foreground antialiased">
        <ReactQueryProvider>
          <Toaster richColors position="top-right" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
