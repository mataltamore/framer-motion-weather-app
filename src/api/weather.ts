export async function getWeather(latitude?: string, longitude?: string) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&forecast_days=1`
  );
  return response.json();
}
