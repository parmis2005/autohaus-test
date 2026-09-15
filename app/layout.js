import "./globals.css";
import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import RevealController from "@/components/RevealController";

export const metadata = {
  title: {
    template: "%s | Nordglanz Automobilhaus",
    default: "Nordglanz Automobilhaus | Gebrauchtwagen Beispielstadt",
  },
  description:
    "Autohaus in Beispielstadt: geprüfte Gebrauchtwagen und Jahreswagen, Finanzierung, DEKRA & TÜV, Garantie, Inzahlungnahme. Nordglanz Automobilhaus – Demo-Webseite.",
};

export const viewport = {
  themeColor: "#030712",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <RevealController />
      </body>
    </html>
  );
}
