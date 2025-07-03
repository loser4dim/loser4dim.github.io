export type Person = {
  name: string;
  url?: string;
};

export type EventDetail = {
  slug : string
  title: string;

  date : {
    year : string;
    month: string;
    day  : string;
  };

  time: {
    start: string;
    end  : string;
  };

  place: {
    name?    : string;
    url?     : string;
    platform?: {
      name?    : string;
      instance?: string;
    };
  };

  flyer?: {
    width : number;
    height: number;
    image : string;
  };

  organizers: Person[];

  group?    : {
    name: string;
    url : string;
  };

  support? : {
    role  : string;
    staffs: Person[];
  }[];

  announcements: {
    sns: string;
    url: string;
  }[];

  hashtags?: string[];

  timetable?: {
    width : number;
    height: number;
    image : string;
  };

  timeSlot?      : {
    start: string;
    end  : string;
    dj   : string[];
    vj?  : string[];
  }[];

  mixArchives?: {
    type    : "soundcloud" | "mixcloud" | "youtube" | "twitch";
    url     : string;
    embedUrl: string;
  }[];

  setlist?: {
    index : number;
    artist: string;
    track : string;
    url?  : string;
  }[];

  galleryTwitter?: string[]
};
