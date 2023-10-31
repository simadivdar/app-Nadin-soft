<script lang="ts">
import { defineComponent } from "vue";
import { ref, onMounted, onUnmounted} from 'vue';
import moment from "moment";
import showMessage from "../components/showMessage.vue";
export default defineComponent({
  components: { showMessage },
  name: "Dashboard",
  setup() {
    const localTime = ref('');
    const hour=ref();
    const updateLocalTime = (): any => {
      localTime.value = moment().format('HH:mm');
      const timeArray:string[]=localTime.value.split(":");
      hour.value=(parseInt(timeArray[0]));
    };

    onMounted(() => {
      setInterval(updateLocalTime, 100);
    });

    onUnmounted(() => {
      clearInterval(updateLocalTime());
    });

    return {
      localTime,
      hour
    };
  },
});
</script>

<template>
   <div class="container-fluid w-100 h-100">
    <div class="row gy-5 d-flex justify-content-around">
      <show-message :time="hour"/>
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
