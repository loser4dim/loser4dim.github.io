export type Paragraph = {
  title   : string;
  content : string;
};

export type Track = {
  name : string;
  url? : string;
  memo?: string;
};

export type TrackList = {
  group : string;
  tracks: Track[];
};

export type Date  = {
  year : number;
  month: number;
  day  : number;
};

export type BlogContents = {
  slug : string;
  title: string;
  date : Date;
  
  first_paragraph? : Paragraph[];
  latter_paragraph?: Paragraph[];

  track_list?      : TrackList[];
};
