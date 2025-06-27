import type { Metadata } from "next";
const metadataBase: Metadata = {
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
export default metadataBase;