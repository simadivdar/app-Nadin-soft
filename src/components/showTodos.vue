<script lang="ts">
import { defineComponent,ref} from "vue";

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
<div>{{ title }}</div>
</template>
