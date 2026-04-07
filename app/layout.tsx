import Header from "@/components/header";
import "./globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Luma Beatriz | Psicóloga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={`${manrope.variable} ${cormorant.variable} bg-[#E5E0D8] text-gray-950 relative pt-16 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="hero-orb left-orb" />
          <div className="hero-orb right-orb" />

          <div className="absolute bottom-4 right-3 opacity-[0.08] sm:bottom-8 sm:right-8 sm:opacity-[0.1] dark:opacity-[0.08]">
            <Image
              src="/images/logoLuma-transparent.png"
              alt="Marca d'agua Luma Beatriz"
              width={160}
              height={160}
              quality={95}
              priority={false}
              className="h-auto w-[95px] sm:w-[160px]"
            />
          </div>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            {/* <Footer /> */}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
