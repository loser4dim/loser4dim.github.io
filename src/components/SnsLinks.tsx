"use client";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMixcloud, faBandcamp, faSoundcloud, faBluesky, faXTwitter, faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function IconDiv({ icon }: { icon: IconDefinition }) {
  return (
    <div className="relative w-1/4 h-1/4 min-w-16 min-h-16 flex items-center justify-center">
      <FontAwesomeIcon icon={icon} className="text-5xl" />
    </div>
  );
}

function ImageDev({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-1/4 h-1/4 min-w-16 min-h-16">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );
}

const snsLinks = [
  {
    name: "Mixcloud",
    href: "https://www.mixcloud.com/loser4dim/",
    icon: (<IconDiv icon={faMixcloud} />)
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/loser4dim/tracks/",
    icon: (<IconDiv icon={faSoundcloud} />)
  },
  {
    name: "Bandcamp",
    href: "https://loser4dim.bandcamp.com/",
    icon: (<IconDiv icon={faBandcamp} />)
  },
  {
    name: "Bandcamp-Fan",
    href: "https://bandcamp.com/loser4dim/",
    icon: (<IconDiv icon={faBandcamp} />)
  },
  {
    name: "VRChat",
    href: "https://vrchat.com/home/user/usr_22d7c048-3c45-478b-b492-88347fbbc1fc",
    icon: (<ImageDev src="/icons/VRChatLogo.svg" alt="VRChat" />)
  },
  {
    name: "Misskey.io",
    href: "https://misskey.io/@loser4dim/",
    icon: (<ImageDev src="/icons/Misskey.avif" alt="Misskey.io" />)
  },
  {
    name: "mixi2",
    href: "https://mixi.social/@loser4dim/",
    icon: (<ImageDev src="/icons/mixi2.avif" alt="mixi2" />)
  },
  {
    name: "ToneDen",
    href: "https://www.toneden.io/loser4dim/",
    icon: (<ImageDev src="/icons/ToneDen.avif" alt="ToneDen" />)
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/loser4dim.bsky.social/",
    icon: (<IconDiv icon={faBluesky} />)
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/loser4dim/",
    icon: (<IconDiv icon={faInstagram} />)
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/loser4dim/",
    icon: (<IconDiv icon={faTwitch} />)
  },
  {
    name: "X/Twitter",
    href: "https://x.com/loser4dim/",
    icon: (<IconDiv icon={faXTwitter} />)
  }
];

export default function SnsLinks() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center">
        {
          snsLinks.map(
            sns => (
              <a
                key={sns.name}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center gap-2 transition"
              >
                {sns.icon}
                <span className="
                  text-sm
                  relative
                  after:block
                  after:absolute
                  after:bottom-0
                  after:left-0 
                  after:w-0
                  group-hover:after:w-full
                  after:h-[1px]
                  after:bg-highlight
                  after:transition-all
                  after:duration-400
                ">
                  {sns.name}
                </span>
              </a>
            )
          )
        }
      </div>
    </section>
  );
}
