import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-3",
  title: "Astra",
  date : {
    year : 2022,
    month: 2,
    day  : 26
  },
   time: {
    start: "21:00",
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
    width : 1190,
    height: 1648,
    image : "/staff/2022/pj-3.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/Pinieon/status/1495261481666965505"
    }
  ],
  galleryTwitter: [
    "1495261481666965505"
  ]
};