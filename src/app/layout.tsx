import type { Metadata } from "next";

import "@/app/font";
import "@/app/globals.css";

export const metadata: Metadata = {
  title       : "loser4dim",
  description : "loser4dim Portfolio",
  metadataBase: new URL("https://loser4dim.github.io"),
  keywords    : ["loser4dim", "DJ", "出演"],
  robots      : {
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
    images     : [
      {
        url   : "/loser4dim/OGP.webp",
        width : 1200,
        height: 630
      }
    ],
    locale: "ja_JP",
    type  : "website"
  },
  twitter: {
    card       : "summary_large_image",
    title      : "loser4dim",
    description: "loser4dim Portfolio",
    images     : ["/loser4dim/TwitterOGP.png"]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-red-500 text-yellow-300 font-sans">
       <div>
        hello
       </div>
       {children}
      </body>
    </html>
  );
}

/*
<body className="
        bg-[radial-gradient(circle,#39C5BB_0%,transparent_10%)]
        bg-[size:1rem_1rem]
        bg-black-500
        text-neutral-200
        font-sans"
      >
*/