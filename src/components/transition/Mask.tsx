"use client";

import { usePageTransition } from "@/components/transition/PageTransitionProvider";

export default function Mask() {
  const { phase }       = usePageTransition();
  const isVisible       = (phase !== "idle");
  const transitionClass = (
    phase === "entering" ?
      "entering" :
    phase === "exiting" ?
      "exiting" :
    phase === "loading" ?
      "loading" :
      ""
  );
  const className = `mask-overlay ${transitionClass}`;

  return (
    <div className={className}>
      {
        isVisible && (
          <div className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none"
          >
            <div className="
              relative
              text-center
              text-neutral-50
              text-xl
              leading-none
              loading-dots"
            >
              <span className="dot one">
                ■
              </span>
              <span className="dot two">
                □
              </span>
              <br />
              <span className="dot four">
                □
              </span>
              <span className="dot three">
                □
              </span>
            </div>
          </div>
        )
      }
    </div>
  );
}
