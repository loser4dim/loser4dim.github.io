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
        ) => Promise<any>;
      };
    };
  }
}

interface TwitterTweetEmbedProps {
  tweetId: string;
  options?: Record<string, any>;
  placeholder?: React.ReactNode;
  onLoad?: (element: HTMLElement) => void;
}

export default function TwitterTweetEmbed({
  tweetId,
  options,
  placeholder,
  onLoad,
}: TwitterTweetEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadScript = async () => {
      if (typeof window === "undefined") return;

      if (!window.twttr) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = renderTweet;
        document.body.appendChild(script);
      } else {
        renderTweet();
      }
    };

    const renderTweet = () => {
      if (!mounted || !ref.current || !window.twttr?.widgets?.createTweet) return;

      window.twttr.widgets
        .createTweet(tweetId, ref.current, options)
        .then((element) => {
          if (!mounted) return;
          setLoaded(true);
          onLoad?.(element);
        })
        .catch((err) => console.error("Tweet render error:", err));
    };

    loadScript();

    return () => {
      mounted = false;
    };
  }, [tweetId, options, onLoad]);

  return (
    <>
      {!loaded && placeholder}
      <div ref={ref} className="flex justify-center min-h-[400px]" />
    </>
  );
}
