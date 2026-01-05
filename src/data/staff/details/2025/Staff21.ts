import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-13",
  title: "𝗔𝗦𝗧𝗥𝗔 𝟲",
  date : {
    year : 2025,
    month: 4,
    day  : 28
  },
   time: {
    start: "22:00",
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
    width : 893,
    height: 1263,
    image : "/staff/2025/pj-13.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/xM4Ty/status/1915361384138969445"
    }
  ]
};