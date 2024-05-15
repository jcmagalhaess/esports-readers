export type TimezoneOutput = {
  timeZone: string;
  currentLocalTime: string;
  currentUtcOffset: {
    seconds: number;
    milliseconds: number;
    ticks: number;
    nanoseconds: number;
  };
  standardUtcOffset: {
    seconds: number;
    milliseconds: number;
    ticks: number;
    nanoseconds: number;
  };
  hasDayLightSaving: boolean;
  isDayLightSavingActive: boolean;
  dstInterval: any;
};

export type TimezoneGroup = {
  name: string,
  item: TimezoneItemGroup[]
}

export type TimezoneItemGroup = {
  key: string,
  value: string
}
