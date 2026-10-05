import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "selector-1",
  title: "星屑の記憶たち -Stardust Memories- FINALE",
  date : {
    year : 2025,
    month: 2,
    day  : 27
  },
   time: {
    start: "23:00",
    end  : "24:30"
  },
  place: {
    platform: {
      name    : "VRChat",
      instance: "Friends+"
    }
  },
   organizers: [
    {
      name: "ヤブちゃん"
    }
  ],
  flyer: {
    width : 893,
    height: 1263,
    image : "/staff/2025/selector-1.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/Yabuchan0913_VR/status/1894313617140715577"
    }
  ]
};