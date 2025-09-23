import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import LenisController from "@/components/LenisController";
import "@/styles/global.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { ViewTransitions } from "next-view-transitions";

// 100: Thin.
// 200: Extra Light (or Ultra Light).
// 300: Light.g
// 400: Regular.
// 500: Medium.
// 600: Semi Bold (or Demi Bold).
// 700: Bold.
// 800: Extra Bold (or Ultra Bold).
// 900: Black (or Heavy)

const involve = localFont({
  src: [
    {
      path: "/fonts/TTFirsNeue-Regular.otf",
      weight: "400",
      style: "normal",
  },
    {
      path: "/fonts/TTFirsNeue-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/TTFirsNeue-DemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-involve",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buro1189.ru"),
  title: {
    template: "%s | Бюро 1189",
    default: ` Бюро 1189`,
  },
  alternates: { canonical: "./" },
  description:
    "Добро пожаловать на сайт Бюро 1189",
  openGraph: {
    title: "Бюро 1189",
    description:
      "Добро пожаловать на сайт Бюро 1189",
    url: "https://www.buro1189.ru",
    siteName: "Бюро 1189",
    images: [
      {
        url: "/opengraph-image.png",
        width: 631,
        height: 274,
        alt: "Логотип",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang={"ru"}>
        <head>
          <meta
            name="apple-mobile-web-app-title"
            content="Бюро 1189"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          ></meta>
          {/* <meta
            name="google-site-verification"
            content="5Sn_HINkb-Lujm24hNvwAqS3v2XNk_eG_01rVMuJP_w"
          />
          <meta name="yandex-verification" content="60107a46a6e407e6" /> */}
        </head>
        <body className={`${involve.className} `}>
          <Suspense fallback={null}>
            <LenisController />
          </Suspense>

          <Header></Header>
          <main className="px-4 md:px-8 min-h-screen  w-full relative break-all xxs:break-normal">
            {children}
          </main>
          <Footer></Footer>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
