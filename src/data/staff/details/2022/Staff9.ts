import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "presentation-1",
  title: "CUERaider Vol.40 \"私立CUERAIDER学園\"",
  date : {
    year : 2022,
    month: 7,
    day  : 6
  },
   time: {
    start: "20:00",
    end  : "24:00"
  },
  place: {
    platform: {
      name    : "Twitch"
    }
  },
   organizers: [
    {
      name: "mopp"
    }
  ],
  flyer: {
    width : 1080,
    height: 1920,
    image : "/staff/2022/presentation-1.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/mopp1076/status/1543928767294296069"
    }
  ],
  galleryTwitter: [
    "1457679416608247808",
    "1543929144274067462",
    "1543929912188633089",
    "1543932913817124864",
    "1543934161819291648",
    "1543935004362752000",
    "1544160797945139202",
    "1544518646730346497",
    "1544519184557563905",
    "1544613058248855553",
    "1544617734217949195",
    "1544630825740017664"
  ]
};