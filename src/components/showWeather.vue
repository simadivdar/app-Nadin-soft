<script setup lang="ts">
import { ref, defineProps, onMounted,inject,Ref } from "vue";
import { getCityWeather } from "../services/getWeather";

interface WeatherData {
  current_temperature: number;
  current_weather: string;
  weather_units: string;
}
const massage=inject<Ref<string>>('massage');
const props = defineProps({
  name: { required: true, type: String },
});
const weatherData = ref<WeatherData | null>(null);
const loading = ref<boolean>(true);
const error = ref<boolean>(false);
const getInformation = ref<boolean>(false);
const errorMessage = ref<string>("");
const city_name = ref<string>(props.name);

const getCityWeatherData = async () => {
  try {
    error.value = false;
    getInformation.value = true;

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
onMounted(() => {
  getCityWeatherData();
});
</script>

<template>
  <div class="mt-5">
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
    <div>{{ massage }}</div>
  </div>
</template>

<style scoped></style>