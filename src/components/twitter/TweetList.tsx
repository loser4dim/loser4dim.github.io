"use client";

import { useState } from "react";
import TweetEmbed from "@/components/twitter/TweetEmbed";

export default function TweetList({ ids }: { ids: string[] }) {
  const [fallbackIds, setFallbackIds] = useState<string[]>([]);

  const handleError = (tweetId: string) => {
    setFallbackIds((prev) => [...prev, tweetId]);
  };

  return (
    <>
      {ids.map((id) => (
        <div key={id} className="mb-8">
          <TweetEmbed
            tweetId={id}
            placeholder={
              <p className="text-center text-sm text-gray-400">
                Tweet Loading...
              </p>
            }
            onLoad={() => {
              setFallbackIds((prev) => prev.filter((t) => t !== id));
            }}
            onError={() => handleError(id)}
          />

          {fallbackIds.includes(id) && (
            <p className="text-center text-sm text-gray-500 mt-2">
              If the tweet is not displayed, please check{" "}
              <a
                href={`https://twitter.com/i/status/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
              >
                this link
              </a>
              .
            </p>
          )}
        </div>
      ))}
    </>
  );
}
