import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "staff-1",
  title: "Piano Therapy Op.2",
  date : {
    year : 2022,
    month: 4,
    day  : 15
  },
   time: {
    start: "21:00",
    end  : "22:30"
  },
  place: {
    platform: {
      name    : "VRChat",
      instance: "Friends+"
    }
  },
   organizers: [
    {
      name: "かすみん"
    }
  ],
  flyer: {
    width : 720,
    height: 1040,
    image : "/staff/2022/staff-1.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/kasumin_vrc/status/1510967143851970571"
    }
  ],
  galleryTwitter: [
    "1510967143851970571"
  ]
};