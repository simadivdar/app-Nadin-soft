<script lang="ts">
import { defineComponent, ref } from "vue";
import { getCityWeather } from "../services/getWeather.js";
interface WeatherData {
  current_temperature: number;
  current_weather: string;
  weather_units: string;
}
export default defineComponent({
  name: "Weather",
  setup() {
    const weatherData = ref<WeatherData | null>(null);
    const loading = ref(true);
    const error = ref(false);
    const getInformation = ref(false);
    const city_name = ref("");
    const errorMessage = ref("");
    const getCityWeatherData = async () => {
      try {
        error.value = false;
        getInformation.value = true;
        city_name.value =
          city_name.value.charAt(0).toUpperCase() + city_name.value.slice(1);
        const cityWeatherData = await getCityWeather(city_name.value);
        weatherData.value = cityWeatherData.weatherData;
        loading.value = false;
      } catch (e) {
        if (e instanceof Error) {
          errorMessage.value = e.message;
        }
        error.value = true;
        loading.value = false;
      }
    };
    return {
      weatherData,
      loading,
      city_name,
      error,
      errorMessage,
      getInformation,
      getCityWeatherData,
    };
  },
});
</script>

<template>
  <div class="mt-5">
    <div class="col-4">
      <input
        class="form-control text-center"
        type="text"
        v-model="city_name"
        @keyup.enter="getCityWeatherData"
        :placeholder="$t('Enter city')"
        aria-label="default input name"
      />
    </div>
    <div class="d-flex justify-content-center text-center m-auto col-8">
      <div v-if="loading && getInformation">loading...</div>
      <div v-else-if="error">{{ errorMessage }}</div>
      <div
        v-else
        class="mt-5 h-25 w-50 border d-flex flex-column justify-content-center"
      >
        <p class="mt-2">{{ city_name }}</p>
        <p>
          {{ weatherData?.current_temperature }}{{ weatherData?.weather_units }}
        </p>
        <p class="mb-4">{{ weatherData?.current_weather }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
