import { event as djV00 } from "@/data/dj/details/2022/Virtual00";
import { event as djV01 } from "@/data/dj/details/2022/Virtual01";
import { event as djV1 } from "@/data/dj/details/2022/Virtual1";
import { EventDetail } from "@/types/EventDetail";

//import { event as djV2 } from "@/data/dj/details/2022/DJVitrual2";

export const allPlayEvents: Record<string, EventDetail> = {
  "practice": djV00,
  "akipe-tokage-birthday-1": djV01,
  "dj-unknown-1": djV1
};


/*const DJ_HistoryDetail: DJ_Detail = [
  {
    year: "2025",
    events: [
      {
        slug: "1",
        title: "DJガチ初心者練習会",
        platform: "VRChat",
        date: "2022年2月12日",
        description: "VRChatの初心者向けイベントで初めての出演でした。",
        image: "/events/vrchat-beginner-party.webp",
      }
    ],
  },
];*/