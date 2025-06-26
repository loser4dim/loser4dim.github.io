"use client";

import {
  faMixcloud,
  faBandcamp,
  faSoundcloud,
  faBluesky,
  faXTwitter,
  faInstagram,
  faTwitch
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import Image from "next/image";

const snsLinks = [
  {
    name: "Mixcloud",
    href: "https://www.mixcloud.com/loser4dim/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faMixcloud} className="text-5xl" />
      </div>
    )
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/loser4dim/tracks/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faSoundcloud} className="text-5xl" />
      </div>
    )
  },
  {
    name: "Bandcamp-Artist",
    href: "https://loser4dim.bandcamp.com/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faBandcamp} className="text-5xl" />
      </div>
    )
  },
  {
    name: "Bandcamp-Fan",
    href: "https://bandcamp.com/loser4dim/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faBandcamp} className="text-5xl" />
      </div>
    )
  },
  {
    name: "VRChat",
    href: "https://vrchat.com/home/user/usr_22d7c048-3c45-478b-b492-88347fbbc1fc",
    icon: (
      <div className="relative w-16 h-16">
        <Image
          src="/icons/VRChatLogo.svg"
          alt="VRChat"
          fill
          className="object-contain"
        />
      </div>
    ),
  },
  {
    name: "mixi2",
    href: "https://mixi.social/@loser4dim/",
    icon: (
      <div className="relative w-16 h-16">
        <Image
          src="/icons/mixi2.webp"
          alt="mixi2"
          fill
          className="object-contain"
        />
      </div>
    ),
  },
  {
    name: "Misskey.io",
    href: "https://misskey.io/@loser4dim/",
    icon: (
      <div className="relative w-16 h-16">
        <Image
          src="/icons/Misskey.webp"
          alt="Misskey.io"
          fill
          className="object-contain"
        />
      </div>
    ),
  },
  {
    name: "にりらみすきー部",
    href: "https://misskey.niri.la/@loser4dim/",
    icon: (
      <div className="relative w-16 h-16">
        <Image
          src="/icons/Misskey.webp"
          alt="Niri-la-Misskey"
          fill
          className="object-contain"
        />
      </div>
    ),
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/loser4dim.bsky.social/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faBluesky} className="text-5xl" />
      </div>
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/loser4dim/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faInstagram} className="text-5xl" />
      </div>
    )
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/loser4dim/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faTwitch} className="text-5xl" />
      </div>
    )
  },
  {
    name: "X/Twitter",
    href: "https://x.com/loser4dim/",
    icon: (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <FontAwesomeIcon icon={faXTwitter} className="text-5xl" />
      </div>
    )
  }
];

export default function SnsLinks() {
  return (
    <section className="w-full px-4 py-12 flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {
          snsLinks.map(
            (sns) => (
              <a
                key={sns.name}
                href={sns.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition"
              >
                {sns.icon}
                <span
                  className="text-sm text-center relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#39C5BB] after:transition-all after:duration-300 group-hover:after:w-full"
                >
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
