import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "pj-5",
  title: "MusicStellarLake × RUINS",
  date : {
    year : 2022,
    month: 5,
    day  : 13
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
      name: "kagamiiiiin"
    }
  ],
  flyer: {
    width : 841,
    height: 1189,
    image : "/staff/2022/pj-5.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/ClubRuins/status/1523633893470998528"
    }
  ],
  galleryTwitter: [
    "1523633893470998528"
  ]
};