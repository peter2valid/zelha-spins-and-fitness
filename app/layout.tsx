import type { Metadata, Viewport } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/data/siteContent";

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
  ],
  icons: {
    icon: "/images/about-gym.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={oswald.className} suppressHydrationWarning>
        {children}
        {/* LocalBusiness JSON-LD for improved local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              description: siteConfig.name + " — " + siteConfig.shortName,
              telephone: siteConfig.phoneNumbers && siteConfig.phoneNumbers[0],
              email: siteConfig.email,
              url: "https://zelhaspinfitness.co.ke",
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.location,
                addressCountry: "KE"
              },
              sameAs: Object.values(siteConfig.socialLinks).filter(Boolean)
            })
          }}
        />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
