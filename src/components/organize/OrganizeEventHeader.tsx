"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { OrganizeEventDetail } from "@/types/organize/EventDetail";

function formatDateEnglish(dateStr: string, time?: string): string {
  const date = new Date(dateStr);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  let result = `on ${weekday}, ${month} ${day}, ${year}`;
  if (time) {
    result += ` - ${time}`;
  }

  return result;
}

export function OrganizeEventHeader({ event }: { event: OrganizeEventDetail }) {
  const [layoutType, setLayoutType] = useState<"horizontal" | "vertical" | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = event.flyerImage!;
    img.onload = () => {
      const { naturalWidth: w, naturalHeight: h } = img;
      setLayoutType(w > h ? "horizontal" : "vertical");
    };
  }, [event.flyerImage]);

  if (layoutType === null) {
    return (
      <div className="mb-8 px-2 text-gray-400 text-center text-sm animate-pulse">
        loading flyer info...
      </div>
    );
  }

  const InfoBlock = (
  <div className="text-gray-200 text-sm space-y-2 max-w-full break-words flex-1">
    <h1 className="text-2xl font-bold text-white">{event.title}</h1>
    <p className="text-sm text-gray-400">
      {formatDateEnglish(event.date, event.time)}
    </p>

    {event.location?.name && (
  <p>
    <span className="text-gray-400">in</span>{" "}
    {event.location.url ? (
      <a
        href={event.location.url}
        className="text-blue-400 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {event.location.name}
      </a>
    ) : (
      event.location.name
    )}

    {/* 👤 Owner をここに挿入にゃ */}
    {event.location.owner && (
      <>
        <span className="text-gray-400"> by </span>
        {event.location.ownerUrl ? (
          <a
            href={event.location.ownerUrl}
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.location.owner}
          </a>
        ) : (
          event.location.owner
        )}
      </>
    )}

    {/* プラットフォームとステータス */}
    {event.location.platform && (
      <span className="text-gray-400"> – {event.location.platform}</span>
    )}
    {event.location.platformStatus && (
      <span className="ml-1 text-gray-500">
        ({event.location.platformStatus})
      </span>
    )}
  </p>
)}

    {/* 🏷 Group */}
    {event.group?.name && (
      <p>
        <span className="text-gray-400">group:</span>{" "}
        {event.group.url ? (
          <a href={event.group.url} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
            {event.group.name}
          </a>
        ) : (
          event.group.name
        )}
      </p>
    )}

    {/* 📢 Announcements */}
    {event.announceUrls && event.announceUrls.length > 0 && (
      <p>
        {event.announceUrls.map((link, index) => (
          <span key={index}>
            <a
              href={link.url}
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
            {event.announceUrls && index < event.announceUrls.length - 1 && " / "}
          </span>
        ))}
      </p>
    )}

    {/* 🔖 Hashtag */}
    {event.hashtag && <p>{event.hashtag}</p>}

    {/* 📡 Streaming */}
    {event.location?.streamUrl && (
      <p>
        <span className="text-gray-400">Streaming:</span>{" "}
        <a
          href={event.location.streamUrl}
          className="text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.location.streamUrl}
        </a>
      </p>
    )}

    {/* 🤝 Collabos */}
    {event.collabos && event.collabos.length > 0 && (
      <p>
        <span className="text-gray-400">organize with</span>{" "}
        {event.collabos.map((c, index) => (
          <span key={index}>
            {c.url ? (
              <a href={c.url} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                {c.name}
              </a>
            ) : (
              c.name
            )}
            {event.collabos && index < event.collabos.length - 1 && " / "}
          </span>
        ))}
      </p>
    )}
  </div>
);

  return layoutType === "vertical" ? (
    <div className="flex flex-col md:flex-row gap-6 items-start mb-8 flex-wrap">
      {InfoBlock}
      <div className="flex-shrink-0">
        <Image
          src={event.flyerImage!}
          alt="flyer"
          width={400}
          height={600}
          className="rounded-lg shadow-md object-contain"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-start gap-4 mb-8 px-2">
      {InfoBlock}
      <div>
        <Image
          src={event.flyerImage!}
          alt="flyer"
          width={800}
          height={500}
          className="rounded-lg shadow-md object-contain"
        />
      </div>
    </div>
  );
}
