import styles from "@/styles/Home.module.css"

import Head  from "next/head";
import Image from "next/image";
import Link  from "next/link";

/*import {
  useEffect
} from "react";*/

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

/*const handleResize = () => {
  if (!window) {
    return;
  }
  
  const LOGO_IMAGE_RATIO = 1247.0 / 1835.0;

  const logo_img = document.getElementById("logo_image") as HTMLElement;

  const new_width  = (window.innerWidth / window.innerHeight < LOGO_IMAGE_RATIO) ? window.innerWidth                    : window.innerHeight * LOGO_IMAGE_RATIO;
  const new_height = (window.innerWidth / window.innerHeight < LOGO_IMAGE_RATIO) ? window.innerWidth / LOGO_IMAGE_RATIO : window.innerHeight;
  //logo_img.setAttribute("width" , (new_width).toString());
  //logo_img.setAttribute("height", (new_height).toString());

  return;
}*/

const IndexPage = () => {
  /*useEffect(
    () => {
      if (!window) {
        return;
      }
      window.addEventListener("resize", handleResize);
      return;
    },
    []
  );*/

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
            id      = "logo_image"
            src     = "/Resources/logo.webp"
            fill    = {true}
            alt     = "logo"
            quality = {100}
            sizes   = "(max-width: 1247px) 100vw"
            style   = {
              {
                objectFit: "contain"
              }
            }
          />
        </div>
        <div className = {styles["IndexLists"]}>
          <nav>
              <ul className = {styles["IndexListsColumn"]}>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://www.mixcloud.com/loser4dim/">
                    <FontAwesomeIcon icon={faMixcloud} />
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://soundcloud.com/loser4dim/tracks">
                    <FontAwesomeIcon icon={faSoundcloud} />
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://bandcamp.com/loser4dim/">
                    <FontAwesomeIcon icon={faBandcamp} />
                  </a>
                </li>

                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://instagram.com/loser4dim/">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://www.threads.net/@loser4dim/">
                    <FontAwesomeIcon icon={faThreads} />
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://x.com/loser4dim/">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://github.com/loser4dim/">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://www.twitch.tv/loser4dim/">
                    <FontAwesomeIcon icon={faTwitch} />
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://misskey.io/@loser4dim/">
                    <p>
                    <Image
                      id     = "io_img"
                      src    = "/Resources/MisskeyIO.webp"
                      fill   = {true}
                      alt    = "MisskeyIO"
                      sizes  = "(max-height: 50pt) 8vmin"
                      style  = {
                        {
                          objectFit: "contain"
                        }
                      }
                    />
                    </p>
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://misskey.niri.la/@loser4dim/">
                    <Image
                      id     = "nirila_img"
                      src    = "/Resources/MisskeyNirila.png"
                      fill   = {true}
                      alt    = "MisskeyNirila"
                      sizes  = "(max-height: 50pt) 8vmin"
                      style  = {
                        {
                          objectFit: "contain"
                        }
                      }
                    />
                  </a>
                </li>
                <li className = {styles["IndexListsColumnContent"]}>
                  <a href="https://vrchat.com/home/user/usr_22d7c048-3c45-478b-b492-88347fbbc1fc">
                    <Image
                      id     = "vrchat_img"
                      src    = "/Resources/VRChat.png"
                      fill   = {true}
                      alt    = "logo"
                      sizes  = "(max-height: 50pt) 8vmin"
                      style  = {
                        {
                          objectFit: "contain"
                        }
                      }
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
