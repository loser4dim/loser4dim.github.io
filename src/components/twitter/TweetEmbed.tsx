"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          tweetId : string,
          element : HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

interface TweetEmbedProps {
  tweetId     : string;
  options?    : Record<string, unknown>;
  placeholder?: React.ReactNode;
  onLoad?     : (id: string) => void;
  onError?    : (id: string) => void;
}

export default function TweetEmbed({ tweetId, options, placeholder, onLoad, onError }: TweetEmbedProps) {
  const ref      = useRef<HTMLDivElement>(null);
  const triedRef = useRef(false);

  const [loaded, setLoaded] = useState(false);
  
  useEffect(
    () => {
      let mounted = true;

      const renderTweet = () => {
        if (!mounted || !ref.current || triedRef.current || !window.twttr?.widgets?.createTweet) {
          return;
        }

        triedRef.current      = true;
        ref.current.innerHTML = "";

        window.twttr.widgets
          .createTweet(tweetId, ref.current, options)
          .then(
            () => {
              if (!mounted) {
                return;
              }
              setLoaded(true);
              onLoad?.(tweetId);
            }
          )
          .catch(
            (err) => {
              console.error("Tweet Render Error:", err);
              onError?.(tweetId);
            }
          )
        ;
      };

      const pollingTimeMilliSec = 100;
      const timeoutTimeMilliSec = 5000;

      const checkReady = setInterval(
        () => {
          if (window.twttr?.widgets?.createTweet) {
            clearInterval(checkReady);
            renderTweet();
          }
        },
        pollingTimeMilliSec
      );

      const timeout = setTimeout(
        () => {
          clearInterval(checkReady);
          if (!triedRef.current) {
            console.warn("widgets.js Timeout or Blocked");
            onError?.(tweetId);
          }
        },
        timeoutTimeMilliSec
      );

      return (
        () => {
          mounted = false;
          clearInterval(checkReady);
          clearTimeout(timeout);
        }
      );
    },
    [tweetId, onLoad, onError, options]
  );

  return (
    <>
      {!loaded && placeholder}
      <div ref={ref}/>
    </>
  );
}
