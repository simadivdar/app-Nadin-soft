export async function getCityWeather(cityName: string): Promise<any>  {
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
export async function getCityData(cityName: string): Promise<any> {
  try {
    const response = await fetch(`http://localhost:3000/cities?city=${cityName}`);
    const data = await response.json();
    return data[0];
  } catch (e) {
    throw new Error("Not Found City...");
  }
}
export async function getWeatherData(latitude: number, longitude: number): Promise<any> {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const data = await response.json();
    return {
      current_temperature: data.current_weather.temperature,
      current_weather: data.current_weather.weathercode,
      weather_units: data.current_weather_units.temperature,
    };
  } catch (e) {
    throw new Error("Try again...");
  }
}