"use client";
import { useEffect } from "react";

export default function TweetProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://platform.twitter.com/widgets.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);
  return <>{children}</>;
}