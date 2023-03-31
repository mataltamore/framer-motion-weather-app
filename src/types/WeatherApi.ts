export interface WeatherAPI {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  weathercode: number[];
  windspeed_10m: number[];
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  weathercode: string;
  windspeed_10m: string;
}
