<script lang="ts">
import { computed, defineComponent,ref,onMounted} from "vue";

export default defineComponent({
  props: {
    time: Number ,
  },
  setup(props) {
    const userName=ref("")
    const timeMessage = computed(() => {
      if (props.time != undefined){
      if (props.time >= 21 || props.time < 3) {
        return `Good night,${userName.value}`;
      }
      else if (props.time>= 3 && props.time < 11) {
        return `Good morning,${userName.value}`;
      } else {
        return `Good afternoon,${userName.value}`;
      }
    }
    });
    const loadUser = () => {
      const savedUser = localStorage.getItem("userName");
      if (savedUser) {
        userName.value = JSON.parse(savedUser);
      }
    };

    onMounted(() => {
      loadUser();
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
