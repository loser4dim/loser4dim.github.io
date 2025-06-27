import Image from "next/image";
import Link from "next/link";

import SnsLinks from "@/components/SnsLinks";
//import TransitionLink from "@/components/transition/TransitionLink";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen min-h-screen px-4 pb-12">
      <h1 className="sr-only">
        loser4dim Profile
      </h1>
      <div className="flex items-center justify-center max-h-screen max-w-4/5">
        <Link href="/profile" className="block">
          <Image
            src="/loser4dim/Logo.webp"
            alt="loser4dim Logo Picture"
            width={1247}
            height={1835}
            className="object-contain max-w-screen max-h-screen"
          />
        </Link>
      </div>
      <div className="flex max-w-4/5">
        <SnsLinks />
      </div>
    </main>
  );
}
export const dynamic = "force-static";