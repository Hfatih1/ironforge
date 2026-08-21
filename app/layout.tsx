import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import { SiteProviders } from "@/components/providers/SiteProviders";
import { getDictionary } from "@/lib/i18n/dictionaries";
import "./globals.css";

const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
  "7jNCQzhMjJRhibCmHOGrbPSFZIiuUIWAtuNarUfHq18";

export const metadata: Metadata = {
  verification: { google: googleVerification },
};

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerList = await headers();
  const locale = headerList.get("x-locale") === "en" ? "en" : "sr";
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${bebasNeue.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteProviders locale={locale} dict={dict}>
          {children}
        </SiteProviders>
      </body>
    </html>
  );
}
