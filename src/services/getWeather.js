export async function getCityWeather(cityName) {
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
