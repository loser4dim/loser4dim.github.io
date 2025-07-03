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
  onError?: (error: unknown) => void;
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

  useEffect(() => {
    let mounted = true;

    const renderTweet = () => {
      if (!mounted || !ref.current || !window.twttr?.widgets?.createTweet) return;

      // 🧼 描画前に中をクリアして、Tweet増殖を防ぐにゃ
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
          onError?.(err);
        });
    };

    if (window.twttr?.widgets?.createTweet) {
      renderTweet();
    } else {
      const checkInterval = setInterval(() => {
        if (window.twttr?.widgets?.createTweet) {
          clearInterval(checkInterval);
          renderTweet();
        }
      }, 100);
      setTimeout(() => clearInterval(checkInterval), 5000);
    }

    return () => {
      mounted = false;
    };
  }, [tweetId]); // ✅ options や onLoad など副作用の原因を依存配列から外すにゃ

  return (
    <>
      {!loaded && placeholder}
      <div ref={ref} className="flex justify-center min-h-[400px]" />
    </>
  );
}
