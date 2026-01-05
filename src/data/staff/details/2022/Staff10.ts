import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-6",
  title: "バグコレ",
  date : {
    year : 2022,
    month: 7,
    day  : 29
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
      name: "malobug"
    }
  ],
  flyer: {
    width : 595,
    height: 842,
    image : "/staff/2022/pj-6.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/malobug/status/1552230674316533761"
    }
  ],
  galleryTwitter: [
    "1552230674316533761"
  ]
};