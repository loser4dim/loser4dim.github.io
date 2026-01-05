import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-14",
  title: "𝐀𝐒𝐓𝐑𝐀 𝟕",
  date : {
    year : 2025,
    month: 11,
    day  : 28
  },
   time: {
    start: "23:00",
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
    image : "/staff/2025/pj-14.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/xM4Ty/status/1993265913269829675"
    }
  ]
};