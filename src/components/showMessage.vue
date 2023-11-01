<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    time: Number ,
  },
  setup(props) {


    const timeMessage = computed(() => {
      if (props.time != undefined){
      if (props.time >= 21 || props.time < 3) {
        return "سیما شب بخیر";
      }
      else if (props.time>= 3 && props.time < 11) {
        return "صبح بخیر سیما...";
      } else {
        return " سیما...ظهر بخیر";
      }
    }
    });

    return {
      timeMessage,
    };
  },
});
</script>
<template>
  <div class="pt-5">
    <h3 class="text-center">{{ timeMessage }}</h3>
  </div>
</template>
