<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted, onUnmounted } from 'vue';
import moment from "moment";
export default defineComponent({
  name: "Dashboard",
  setup() {
    const localTime = ref('');

    const updateLocalTime = () => {
      localTime.value = moment().format('HH:mm');
    };

    onMounted(() => {
      setInterval(updateLocalTime, 100);
    });

    onUnmounted(() => {
      clearInterval(updateLocalTime);
    });

    return {
      localTime,
    };
  },
});
</script>

<template>
   <div class="container-fluid w-100 h-100">
    <div class="row gy-5 d-flex justify-content-around">
      <div class="col-12 pt-5"><h2>Good morning sima...</h2></div>
      <div class="col-12">
        <div class="alert alert-success fade show" role="alert">
          <p>{{ localTime }}</p>
        </div>
      </div>
    </div>
   </div>
</template>

<style scoped>

</style>
