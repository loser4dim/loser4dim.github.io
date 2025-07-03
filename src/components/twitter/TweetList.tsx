"use client";

import TweetEmbed from "@/components/twitter/TweetEmbed";

export default function TweetList({ ids }: { ids: string[] }) {
  return (
    <>
      {ids.map((id) => (
        <TweetEmbed key={id} tweetId={id} />
      ))}
    </>
  );
}
