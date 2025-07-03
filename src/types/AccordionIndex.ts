export type EventIndex = {
  day  : string;
  title: string;
  slug : string;
};

export type EventMonthGroup = {
  month : string;
  events: EventIndex[];
};

export type EventYearGroup = {
  year  : string;
  months: EventMonthGroup[];
};

export type CompositionIndex = {
  day  : string;
  title: string;
  album: string;
  url  : string;
  label: string;
};

export type CompositionMonthGroup = {
  month : string;
  tracks: CompositionIndex[];
};

export type CompositionYearGroup = {
  year  : string;
  months: CompositionMonthGroup[];
};