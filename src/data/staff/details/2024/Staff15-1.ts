import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "staff-5-1",
  title: "ALT3",
  date : {
    year : 2024,
    month: 3,
    day  : 9
  },
   time: {
    start: "20:00",
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
      name: "0b4k3"
    }
  ],
  flyer: {
    width : 2479,
    height: 3508,
    image : "/staff/2024/staff-5.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/3k4b0/status/1763524259878703110"
    }
  ],
  galleryTwitter: [
    "1763524259878703110"
  ]
};