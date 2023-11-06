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
      return "Good night";
      }
      else if (props.time>= 3 && props.time < 11) {
        return "Good morning";
      } else {
        return "Good afternoon";
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
      userName
    };
  },
});
</script>
<template>
  <div class="pt-5">
    <h3 class="text-center">{{ $t(timeMessage) }},{{ userName }}</h3>
  </div>
</template>
