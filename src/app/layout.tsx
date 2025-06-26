import type { Metadata } from "next";
import {
  BIZ_UDPGothic,
  Open_Sans
} from "next/font/google";

import ClientLayout from "@/components/transition/ClientLayout";
import "@/app/globals.css";

export const metadata: Metadata = {
  title       : "loser4dim",
  description : "loser4dim Portfolio",
  metadataBase: new URL("https://loser4dim.github.io"),
  keywords: ["loser4dim", "DJ", "出演"],
  robots: {
    index       : true,
    follow      : true,
    nocache     : true,
    noimageindex: true
  },
  openGraph: {
    title      : "loser4dim",
    description: "loser4dim DJ Portfolio",
    url        : "https://loser4dim.github.io",
    siteName   : "loser4dim Portfolio",
    images: [
      {
        url   : "/loser4dim/OGP.webp",
        width : 1200,
        height: 630
      }
    ],
    locale: "ja_JP",
    type  : "website",
  },
  twitter: {
    card       : "summary_large_image",
    title      : "loser4dim",
    description: "loser4dim Portfolio",
    images     : ["/loser4dim/OGP.webp"],
  }
}

//Base Japanese Font
const fontBaseJp = BIZ_UDPGothic(
  {
    subsets : ["cyrillic", "greek-ext", "latin", "latin-ext"],
    weight  : ["400", "700"],
    variable: "--font-base-jp",
    display : "swap",
  }
);

//Base English Font
const fontBaseEn = Open_Sans(
  {
    subsets : ["cyrillic", "greek-ext", "latin", "latin-ext", "cyrillic-ext", "greek", "hebrew", "math", "symbols", "vietnamese"],
    weight  : ["300", "400", "500", "600", "700", "800"],
    variable: "--font-base-en",
    display : "swap",
  }
);



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = `${fontBaseJp.variable} ${fontBaseEn.variable}`;

  return (
    <html lang="ja" className={fonts}>
      <body className="
        bg-[radial-gradient(circle,#39C5BB_0%,transparent_10%)]
        bg-[size:1rem_1rem]
        bg-neutral-800
        text-neutral-200"
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}