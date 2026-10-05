import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-10",
  title: "𝐀𝐒𝐓𝐑𝐀 𝟒",
  date : {
    year : 2021,
    month: 11,
    day  : 13
  },
   time: {
    start: "21:00",
    end  : "24:00"
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
    width : 1190,
    height: 1684,
    image : "/staff/2024/pj-10.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/xM4Ty/status/1782726279223193977"
    }
  ]
};