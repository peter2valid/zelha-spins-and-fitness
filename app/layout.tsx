import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#111111"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zelhaspinfitness.co.ke"),
  title: "Zelha Spin & Fitness | Gym in Juja, Kenya",
  description:
    "Zelha Spin & Fitness is a fitness center in Juja offering spinning, strength training, dance fitness, HIIT, and personal coaching near Equity Afya.",
  applicationName: "Zelha Spin & Fitness",
  keywords: [
    "gym in Juja",
    "fitness center in Juja",
    "spinning classes in Juja",
    "gym near Equity Afya Juja",
    "fitness training in Juja Kenya"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={oswald.className} suppressHydrationWarning>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
