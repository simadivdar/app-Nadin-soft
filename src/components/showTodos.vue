<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "showTodos",
  props: {
    title: { required: true, type: String },
    id: { required: true, type: Number },
  },
  setup() {
  
  
    return {
   
    };
  },
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
