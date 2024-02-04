import type { Metadata } from "next";
import "../../styling/globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fullstakk AS – Complete web dev",
  description: "Portfolio side som viser arbeid utført av Fullstakk AS",
  icons: [{ url: "/assets/fs.svg" }],
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="bg-background text-foreground_2 relative min-h-screen overflow-x-hidden scroll-smooth">
        <div className="max-w-3xl mx-auto pb-14 min-h-screen px-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
