import {
  BsSun,
  BsFillCloudSunFill,
  BsFillCloudDrizzleFill,
  BsFillCloudSnowFill,
} from "react-icons/bs";
import { IoMdThunderstorm } from "react-icons/io";
import { WiFog } from "react-icons/wi";

// weathercode
// 0 	Clear sky
// 1, 2, 3 	Mainly clear, partly cloudy, and overcast
// 45, 48 	Fog and depositing rime fog
// 51, 53, 55 	Drizzle: Light, moderate, and dense intensity
// 56, 57 	Freezing Drizzle: Light and dense intensity
// 61, 63, 65 	Rain: Slight, moderate and heavy intensity
// 66, 67 	Freezing Rain: Light and heavy intensity
// 71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
// 77 	Snow grains
// 80, 81, 82 	Rain showers: Slight, moderate, and violent
// 85, 86 	Snow showers slight and heavy
// 95 * 	Thunderstorm: Slight or moderate
// 96, 99 * 	Thunderstorm with slight and heavy hail

export function weatherCodeMapping(weatherCode: number) {
  switch (weatherCode) {
    case 1:
    case 2:
    case 3:
      return BsFillCloudSunFill;
    case 45:
    case 48:
      return WiFog;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return BsFillCloudDrizzleFill;
    case 56:
    case 57:
    case 66:
    case 67:
    case 71:
    case 73:
    case 75:
    case 77:
      return BsFillCloudSnowFill;
    case 95:
    case 96:
    case 99:
      return IoMdThunderstorm;
    default:
      return BsSun;
  }
}
