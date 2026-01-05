import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-1",
  title: "MusicStellarLake × RUINS",
  date : {
    year : 2021,
    month: 11,
    day  : 13
  },
   time: {
    start: "21:30",
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
      name: "kagamiiiiin"
    }
  ],
  flyer: {
    width : 1275,
    height: 1875,
    image : "/staff/2021/pj-1.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/ClubRuins/status/1457679416608247808"
    }
  ],
  galleryTwitter: [
    "1457679416608247808"
  ]
};