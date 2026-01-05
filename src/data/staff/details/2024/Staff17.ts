import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "presentation-2",
  title: "CUERaider Vol.123 \"CUERAIDER、VRC初上陸 ～実際にやってみた～\"",
  date : {
    year : 2024,
    month: 5,
    day  : 22
  },
   time: {
    start: "20:00",
    end  : "24:00"
  },
  place: {
    platform: {
      name    : "Twitch"
    }
  },
   organizers: [
    {
      name: "mopp"
    }
  ],
  flyer: {
    width : 2560,
    height: 1440,
    image : "/staff/2024/presentation-2.avif"
  },
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/Floating_Pool/status/1790760547170029624"
    }
  ],
  galleryTwitter: [
    "1790760547170029624"
  ]
};