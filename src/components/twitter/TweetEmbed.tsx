"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          tweetId: string,
          element: HTMLElement,
          options?: Record<string, any>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

interface TwitterTweetEmbedProps {
  tweetId: string;
  options?: Record<string, any>;
  placeholder?: React.ReactNode;
  onLoad?: (element: HTMLElement) => void;
  onError?: () => void;
}

export default function TwitterTweetEmbed({
  tweetId,
  options,
  placeholder,
  onLoad,
  onError,
}: TwitterTweetEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const triedRef = useRef(false);

  useEffect(() => {
    let mounted = true;

    const renderTweet = () => {
      if (!mounted || !ref.current || triedRef.current) return;
      if (!window.twttr?.widgets?.createTweet) return;

      triedRef.current = true;
      ref.current.innerHTML = "";

      window.twttr.widgets
        .createTweet(tweetId, ref.current, options)
        .then((element) => {
          if (!mounted) return;
          setLoaded(true);
          onLoad?.(element);
        })
        .catch((err) => {
          console.error("Tweet render error:", err);
          onError?.();
        });
    };

    const checkReady = setInterval(() => {
      if (window.twttr?.widgets?.createTweet) {
        clearInterval(checkReady);
        renderTweet();
      }
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(checkReady);
      if (!triedRef.current) {
        console.warn("widgets.js timeout or blocked");
        onError?.();
      }
    }, 5000);

    return () => {
      mounted = false;
      clearInterval(checkReady);
      clearTimeout(timeout);
    };
  }, [tweetId, onLoad, onError, options]);

  return (
    <>
      {!loaded && placeholder}
      <div ref={ref} className="flex justify-center min-h-[400px]" />
    </>
  );
}
