"use client";
import { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function TweetList({ ids }: { ids: string[] }) {
  useEffect(() => {
    window.twttr?.widgets?.load();
  }, [ids]);

  return (
    <>
      {
        ids.map(
          (id, i) => {
            return id ? (
              <div key={i} className="w-full flex justify-center">
                <TwitterTweetEmbed tweetId={id} options={{ maxWidth: 640 }}/>
              </div>
            ) : (
              null
            );
          }
        )
      }
    </>
  );
}