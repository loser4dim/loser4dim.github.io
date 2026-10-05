"use client";

import { useState, useCallback } from "react";
import TweetEmbed                from "@/components/twitter/TweetEmbed";

export default function TweetList({ ids }: { ids: string[] }) {
  const [fallbackIds, setFallbackIds] = useState<string[]>([]);

  const handleError = useCallback(
    (tweetId: string) => {
      setFallbackIds(
        (prev) => [...prev, tweetId]
      );
    },
    []
  );

  const handleLoad = useCallback(
    (tweetId: string) => {
      setFallbackIds(
        (prev) => prev.filter((id) => id !== tweetId)
      );
    },
    []
  );

  return (
    <>
      {
        ids.map(
          (id) => (
            <div key={id} className="mb-8">
              <TweetEmbed
                tweetId={id}
                placeholder={
                  <div className="flex items-center justify-center min-h-[30px]">
                    {
                      fallbackIds.includes(id) ? (
                        <p className="text-center text-sm text-highlight">
                          Failed to load the post. You can view this post{" "}
                          <a
                            href={`https://twitter.com/i/status/${id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                          >
                            here
                          </a>
                          .
                        </p>
                      ) : (
                        <p className="text-center text-sm text-highlight">
                          Loading...
                        </p>
                      )
                    }
                  </div>
                }
                onLoad={handleLoad}
                onError={handleError}
              />
            </div>
          )
        )
      }
    </>
  );
}
