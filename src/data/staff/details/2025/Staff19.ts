import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-12",
  title: "𝐀𝐒𝐓𝐑𝐀 𝟓",
  date : {
    year : 2025,
    month: 1,
    day  : 11
  },
   time: {
    start: "22:00",
    end  : "25:00"
  },
  place: {
    platform: {
      name    : "VRChat",
      instance: "Friends+"
    }
  },
   organizers: [
    {
      name: "M4tt"
    },
    {
      name: "Pinieon"
    }
  ],
  flyer: {
    width : 893,
    height: 1263,
    image : "/staff/2025/pj-12.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/xM4Ty/status/1875133809160773873"
    }
  ]
};