"use client";

import TweetList from "./TweetList";
import TweetProvider from "./TweetProvider";

export default function TweetListWrapper({ ids }: { ids: string[] }) {
  return (
    <TweetProvider>
      <TweetList ids={ids} />
    </TweetProvider>
  );
}
