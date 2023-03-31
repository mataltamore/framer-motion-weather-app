export async function getCity(city?: string) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  return response.json();
}
