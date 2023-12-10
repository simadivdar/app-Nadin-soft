<script setup lang="ts">
import { provide, ref } from "vue";
import inputCity from "../components/inputCity.vue";
import { getCityWeather } from "../services/getWeather";
const weatherData = ref<WeatherData | null>(null);
const loading = ref<boolean>(true);
const errorMessage = ref<string>("");
interface WeatherData {
  current_temperature: number;
  current_weather: string;
  weather_units: string;
}
const getCityWeatherData = async (name: string) => {
  try {
    const cityWeatherData = await getCityWeather(name);
    weatherData.value = cityWeatherData.weatherData;
    loading.value = false;
  } catch (e) {
    if (e instanceof Error) {
      errorMessage.value = e.message;
      loading.value = false;
    }
  }
};
provide("weatherData", weatherData);
provide("loading", loading);
provide("errorMessage", errorMessage);
</script>

<template>
  <div class="mt-5">
    <inputCity @name="getCityWeatherData($event)" />
  </div>
</template>

<style scoped></style>
