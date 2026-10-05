import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-2",
  title: "ごっつええFuture in VRChat Ver12.0 × Music Stellar Lake",
  date : {
    year : 2021,
    month: 12,
    day  : 18
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
      name: "monkin"
    }
  ],
  flyer: {
    width : 848,
    height: 1200,
    image : "/staff/2021/pj-2.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/monkin_vrc/status/1469623274615484418"
    }
  ],
  galleryTwitter: [
    "1469623274615484418",
    "1471797454421258240"
  ]
};