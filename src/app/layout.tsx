import fontsBase    from "@/app/font";
import metadataBase from "@/app/metadata"
import "@/app/globals.css";

export const metadata = metadataBase;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={fontsBase}>
      <body className="
        bg-[radial-gradient(circle,var(--color-highlight)_0%,transparent_10%)]
        bg-[size:1rem_1rem]
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        font-jp"
      >
       {children}
      </body>
    </html>
  );
}