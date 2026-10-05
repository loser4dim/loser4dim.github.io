import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "staff-2",
  title: "Stellar Garage",
  date : {
    year : 2022,
    month: 6,
    day  : 12
  },
   time: {
    start: "20:50",
    end  : "25:20"
  },
  place: {
    platform: {
      name    : "VRChat",
      instance: "Friends+"
    }
  },
   organizers: [
    {
      name: "SoumaAoi"
    }
  ],
  flyer: {
    width : 1080,
    height: 1920,
    image : "/staff/2022/staff-2.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/SouRyuuBPR/status/1533418361664700421"
    }
  ],
  galleryTwitter: [
    "1533418361664700421"
  ]
};