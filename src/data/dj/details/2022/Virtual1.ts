import { EventDetail } from "@/types/EventDetail";

export const event: EventDetail = {
  slug : "dj-unknown-1",
  title: "DJなんもわからん EP.7",
  date : {
    year : 2022,
    month: 3,
    day  : 3
  },
  time: {
    start: "21:00",
    end  : "24:00"
  },
  place: {
    name    : "YClubUnknown 3rd",
    platform: {
      name    : "VRChat",
      instance: "Friends+"
    },
  },
  flyer: {
    width : 1439,
    height: 2036,
    image : "/dj/2022/djV1.avif"
  },
  organizers: [
    {
      name: "RcXvr_ブラッコリー",
      url : "https://x.com/ClubUnknown_vrc"
    }
  ],
  support : [
    {
      role  : "DJ",
      staffs: [
        {
          name: "GENOA：げのあ",
          url : ""
        },
        {
          name: "loser4dim"
        },
        {
          name: "micazuki",
          url : ""
        },
        
        {
          name: "餅屋",
          url : ""
        }
      ]
    },
    {
      role  : "VJ",
      staffs: [
        {
          name: "Mano.Hsmt"
        },
        {
          name: "meg_vj_",
          url : ""
        }
      ]
    }
  ],
  announcements: [
    {
      sns: "𝕏-Twitter",
      url: "https://x.com/ClubUnknown_vrc/status/1497520107203211265"
    }
  ],
  hashtags: ["VRC_DJなんもわからん", "VRCUnknown", "VRChat"],
  timeSlot: [
    {
      start: "21:00",
      end  : "21:40",
      dj   : ["loser4dim"],
      vj   : ["Mano.Hsmt"]
    },
    {
      start: "21:40",
      end  : "22:20",
      dj   : ["micazuki"],
      vj   : ["Mano.Hsmt"]
    },
    {
      start: "22:20",
      end  : "23:00",
      dj   : ["餅屋"],
      vj   : ["meg_vj_"]
    },
    {
      start: "23:00",
      end  : "23:40",
      dj   : ["GENOA：げのあ"],
      vj   : ["meg_vj_"]
    }
  ],
  setlist: [
    {
      index : 1,
      artist: "",
      track : "",
      url   : ""
    }
  ],
  galleryTwitter: [
    "1497520107203211265",
    "1497524186079989760",
    "1497524522387636234",
    "1498268248680579073",
    "1497734826153377794",
    "1499044749495640069",
    "1498967482820079616",
    "1499215476433776641",
    "1499438133309763585"
  ]
};