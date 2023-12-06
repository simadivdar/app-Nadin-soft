export async function getCityWeather(cityName: string){
  try {
    const cityData = await getCityData(cityName);
    const weatherData = await getWeatherData(cityData.lat, cityData.lng);
    return {
      city_name: cityName,
      weatherData: {
        current_temperature: weatherData.current_temperature,
        current_weather: weatherData.current_weather,
        weather_units: weatherData.weather_units,
      },
    };
  } catch (e) {
    throw new Error("Please try again or enter a different city name.");
  }
}
export async function getCityData(cityName: string): Promise<cityType> {
  const response = await fetch(`http://localhost:3000/cities?city=${cityName}`);
  const data = await response.json();
  return data[0];
}
export async function getWeatherData(
  latitude: string,
  longitude: string
){
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json();
  return {
    current_temperature: data.current_weather.temperature,
    current_weather: data.current_weather.weathercode,
    weather_units: data.current_weather_units.temperature,
  };
}

export default interface cityType {
  city: string;
  lat: string;
  lng: string;
  country: string;
  iso2: string;
  admin_name: string;
  capital: string;
  population: string;
  population_proper: string;
}