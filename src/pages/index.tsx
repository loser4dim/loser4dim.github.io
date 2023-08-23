import styles from "@/styles/Home.module.css"

import Head  from "next/head";
import Image from "next/image";
import Link  from "next/link";

import {
  useEffect
} from "react";

import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faMixcloud,
  faDiscord,
  faSoundcloud,
  faTwitch,
  faBandcamp,
  faGithub,
  faThreads,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

const IndexPage = () => {
  useEffect(
    () => {
      if (!window) {
        return;
      }

      const handleResize = () => {
        const LOGO_IMAGE_RATIO = 1247.0 / 1835.0;

        const logo_img = document.getElementById("logo_image") as HTMLElement;

        const new_width  = (window.innerWidth / window.innerHeight < LOGO_IMAGE_RATIO) ? window.innerWidth                    : window.innerHeight * LOGO_IMAGE_RATIO;
        const new_height = (window.innerWidth / window.innerHeight < LOGO_IMAGE_RATIO) ? window.innerWidth / LOGO_IMAGE_RATIO : window.innerHeight;
        logo_img.setAttribute("width" , (new_width).toString());
        logo_img.setAttribute("height", (new_height).toString());

        return;
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return;
    },
    []
  );

  return(
    <div className = {styles["IndexPage"]}>
      <Head>
        <title>
          loser4dim
        </title>
        <meta
          name    = "description"
          content = "loser4dim Page"
        />
        <meta
          name    = "viewport"
          content = "width=device-width, initial-scale=1"
        />
        <link
          rel  = "icon"
          href = "/Resources/favicon.ico"
        />
        <link
          rel  = "apple-touch-icon"
          href = "/Resources/logo192.png"
        />
      </Head>
      <main className = {styles["IndexMain"]}>
        <noscript>
          You Need to Enable JavaScript to Run This Application.
        </noscript>
        <div className = {styles["IndexLogo"]}>
          <Image
            id     = "logo_image"
            src    = "/Resources/logo.webp"
            width  = {1247}
            height = {1835}
            alt    = "logo"
            quality = {100}
          />
        </div>
        <div className = {styles["IndexLinks"]}>
          <nav>
              <ul className = {styles["IndexLinksList"]}>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://www.mixcloud.com/loser4dim/">
                    <FontAwesomeIcon icon={faMixcloud} />
                  </a>
                </li>

                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://soundcloud.com/loser4dim/tracks">
                    <FontAwesomeIcon icon={faSoundcloud} />
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://bandcamp.com/loser4dim/">
                    <FontAwesomeIcon icon={faBandcamp} />
                  </a>
                </li>
              </ul>
              <ul  className = {styles["IndexLinksList"]}>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://instagram.com/loser4dim/">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://www.threads.net/@loser4dim/">
                    <FontAwesomeIcon icon={faThreads} />
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://x.com/loser4dim/">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
              </ul>
              <ul  className = {styles["IndexLinksList"]}>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://github.com/loser4dim/">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://www.twitch.tv/loser4dim/">
                    <FontAwesomeIcon icon={faTwitch} />
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://discord.gg/3mPudy837n">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </li>
              </ul>
              <ul  className = {styles["IndexLinksList"]}>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://misskey.io/@loser4dim/">
                    <Image
                      id     = "io_img"
                      src    = "/Resources/MisskeyIO.webp"
                      width  = {64}
                      height = {64}
                      alt    = "logo"
                    />
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://misskey.niri.la/@loser4dim/">
                    <Image
                      id     = "nirila_img"
                      src    = "/Resources/MisskeyNirila.png"
                      width  = {64}
                      height = {64}
                      alt    = "logo"
                    />
                  </a>
                </li>
                <li className = {styles["IndexLinksListContent"]}>
                  <a href="https://vrchat.com/home/user/usr_22d7c048-3c45-478b-b492-88347fbbc1fc">
                    <Image
                      id     = "vrchat_img"
                      src    = "/Resources/VRChat.svg"
                      width  = {128}
                      height = {64}
                      alt    = "logo"
                    />
                  </a>
                </li>
              </ul>
          </nav>
        </div>
        <Link href="/renderer4d">
          開発中………
        </Link>
      </main>
    </div>
  );
}
export default IndexPage;