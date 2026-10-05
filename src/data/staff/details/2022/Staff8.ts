import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "staff-3",
  title: "Invoke Your Future",
  date : {
    year : 2022,
    month: 6,
    day  : 26
  },
   time: {
    start: "21:30",
    end  : "23:30"
  },
  place: {
    platform: {
      name    : "VRChat",
      instance: "Friends+"
    }
  },
   organizers: [
    {
      name: "meg_vj_"
    }
  ],
  flyer: {
    width : 2480,
    height: 3508,
    image : "/staff/2022/staff-3.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/meg_vj_/status/1537044263003127809"
    }
  ],
  galleryTwitter: [
    "1537044263003127809"
  ]
};