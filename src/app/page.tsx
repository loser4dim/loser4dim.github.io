import Image from "next/image";

//import SnsLinks from "@/components/SnsLinks";
//import TransitionLink from "@/components/transition/TransitionLink";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="sr-only">
        loser4dim
      </h1>
        aaaaaaaa
        <Image
          src="/loser4dim/Logo.webp"
          alt="Logo"
          fill
          priority
          className="object-contain transition"
        />
      
    </main>
  );
}
export const dynamic = "force-static";
