import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-11",
  title: "Invitation.",
  date : {
    year : 2024,
    month: 11,
    day  : 26
  },
   time: {
    start: "24:00",
    end  : "25:00"
  },
  place: {
    platform: {
      name    : "VRChat",
      instance: "invite+"
    }
  },
   organizers: [
    {
      name: "ZERØ"
    }
  ],
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/kaketemowattemo/status/1858887966023970825"
    }
  ]
};