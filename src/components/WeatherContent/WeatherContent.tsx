import { WeatherAPI } from "../../types/WeatherApi";
import styles from "./WeatherContent.module.scss";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { weatherCodeMapping } from "../../utils/weatherCodeMapping";

interface WeatherContentProps {
  weatherData: WeatherAPI;
  weatherIndex: number;
}

export function WeatherContent(props: WeatherContentProps) {
  const { weatherData, weatherIndex } = props;

  const Icon = weatherCodeMapping(weatherData.hourly.weathercode[weatherIndex]);

  return (
    <div className={styles.content}>
      <p>
        {new Date().toLocaleString("it-IT", {
          weekday: "long",
          year: "numeric",
          month: "2-digit",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
      </p>

      <div className={styles.content__primary}>
        <Icon size="4rem" />
        <p>
          temperature: {weatherData.hourly.temperature_2m[weatherIndex]}{" "}
          {weatherData.hourly_units.temperature_2m}
        </p>
      </div>

      <div className={styles.content__secondary}>
        <div>
          <WiHumidity size="1.5rem" />
          <div>
            <p>
              {weatherData.hourly.relativehumidity_2m[weatherIndex]}
              {weatherData.hourly_units.relativehumidity_2m}
            </p>
            <p>humidity</p>
          </div>
        </div>

        <div>
          <WiStrongWind size="1.5rem" />
          <div>
            <p>
              {weatherData.hourly.windspeed_10m[weatherIndex]}{" "}
              {weatherData.hourly_units.windspeed_10m}
            </p>
            <p>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
