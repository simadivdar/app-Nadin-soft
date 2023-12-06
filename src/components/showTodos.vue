<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  title: { required: true, type: String },
  id: { required: true, type: Number },
});
</script>

<template>
  <div class="d-flex justify-content-between">
    <div>{{ title }}</div>
    <div>
      <button class="btn" @click="$emit('edit')">Edit</button>
      <button class="btn" @click="$emit('delete')">Delete</button>
    </div>
  </div>
</template>
