<script lang="ts">
import { defineComponent, ref } from "vue";
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
    const latitude = ref();
    const longitude = ref();
    const getCity = async () => {
      try {
        error.value = false;
        getInformation.value = true;
        city_name.value=city_name.value.charAt(0).toUpperCase() + city_name.value.slice(1);
        const response = await fetch(
          `http://localhost:3000/cities?city=${city_name.value}`
        );
        const data = await response.json();
        console.log(data);
        latitude.value = data[0].lat;
        longitude.value = data[0].lng;
        getWeather();
        loading.value = false;
      } catch (e) {
        errorMessage.value = "Not Found City...";
        error.value = true;
        loading.value = false;
      }
    };

    const getWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current_weather=true`
        );
        const data = await response.json();
        weatherData.value = {
          current_temperature: data.current_weather.temperature,
          current_weather: data.current_weather.weathercode,
          weather_units: data.current_weather_units.temperature,
        };
        loading.value = false;
      } catch (e) {
        errorMessage.value = "Try again..";
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
      getCity,
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
        @keyup.enter="getCity"
        placeholder="Enter city "
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
