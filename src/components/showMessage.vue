
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

const props = defineProps({
  time: Number,
});

const userName = ref("");
const timeMessage = computed(() :string => {
  if (props.time != undefined) {
    if (props.time >= 21 || props.time < 3) {
      return "Good night";
    } else if (props.time >= 3 && props.time < 11) {
      return "Good morning";
    } else {
      return "Good afternoon";
    }
  }
  return "no time";
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

</script>
<template>
  <div class="pt-5">
    <h3 class="text-center">{{ $t(timeMessage) }},{{ userName }}</h3>
  </div>
</template>