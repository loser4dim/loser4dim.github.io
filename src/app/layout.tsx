import Script from "next/script";
import "@/app/globals.css";
import metadataBase from "@/app/metadata"
import ClientLayoutWrapper from "@/components/transition/ClientLayout"

export const metadata = metadataBase;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="
        bg-[radial-gradient(circle,var(--color-highlight)_0%,transparent_10%)]
        bg-[size:1rem_1rem]
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        font-base"
      >
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="afterInteractive"
        />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}