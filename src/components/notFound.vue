<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound",

});
</script>

<template>
  <h2 class="text-center text-danger mt-5">{{ $t('NOT FOUND') }}</h2>
  <div class="text-center fw-bold">
    {{ $t('Please be careful that this link is not yours..!') }} 
  </div>
</template>

<style scoped></style>
