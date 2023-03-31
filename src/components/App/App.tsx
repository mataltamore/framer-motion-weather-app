import { useState } from "react";
import styles from "./App.module.scss";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { WeatherAPI } from "../../types/WeatherApi";
import { useQuery } from "react-query";
import { getWeather } from "../../api/weather";
import { CityAPI } from "../../types/CityApi";
import { getCity } from "../../api/city";
import { WeatherContent } from "../WeatherContent";
import { motion, AnimatePresence } from "framer-motion";

export function App() {
  const [input, setInput] = useState("");

  const {
    data: cityData,
    status: cityStatus,
    refetch: cityRefetch,
  } = useQuery<CityAPI>({
    queryKey: ["city", input],
    queryFn: () => getCity(input),
    enabled: false,
  });

  const latitude = cityData?.results[0].latitude.toString();
  const longitude = cityData?.results[0].longitude.toString();
  let weatherIndex = 0;

  const { data: weatherData, status: weatherStatus } = useQuery<WeatherAPI>({
    queryKey: ["weather", latitude, longitude],
    queryFn: () => getWeather(latitude, longitude),
    enabled: !!latitude && !!longitude,
    onSuccess: () => {
      if (!weatherData) return;

      const currentHour = new Date().toISOString().slice(0, 13);
      weatherIndex =
        weatherData.hourly.time.findIndex((time) =>
          time.startsWith(currentHour)
        ) || 0;
    },
  });

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ scaleY: "auto" }}
        animate={{ scaleY: "330px" }}
        transition={{ duration: 2 }}
      >
        <HiOutlineLocationMarker className={styles.location} />
        <input
          type="text"
          placeholder="enter your location"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
        <button
          type="button"
          className={styles.search}
          onClick={() => cityRefetch()}
        >
          <HiSearch />
        </button>

        <AnimatePresence>
          {cityStatus === "success" && weatherStatus === "success" && (
            <motion.div
              transition={{ delay: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WeatherContent
                weatherData={weatherData}
                weatherIndex={weatherIndex}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
