import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#111111"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zelhaspinfitness.co.ke"),
  title: "Zelha Spin and Fitness Gym | Juja, Kenya",
  description:
    "Zelha Spin and Fitness Gym is located at Kalimoni Highway View Plaza (Former Uchumi), Juja, Kenya. We offer spin classes, HIIT, strength training, Zumba, boot camp, personal training and outdoor hikes.",
  applicationName: "Zelha Spin and Fitness Gym",
  keywords: [
    "gym in Juja",
    "fitness center in Juja",
    "spinning classes in Juja",
    "HIIT classes Juja",
    "Zumba Juja",
    "boot camp Juja",
    "personal training Juja Kenya",
    "Kalimoni Highway View Plaza gym",
    "Zelha Fitness",
    "zelhafitness"
  ],
  icons: {
    icon: "/img/LOGO4.png",
    apple: "/img/LOGO4.png"
  }
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Paytone+One&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script src="https://kit.fontawesome.com/3b7003e6ac.js" crossOrigin="anonymous" async />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
