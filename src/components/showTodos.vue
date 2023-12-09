<script setup lang="ts">
import { useStore } from "vuex";
const props = defineProps({
  title: { required: true, type: String },
  id: { required: true, type: Number },
});

const store = useStore();

const editStatus = () => {
  const task = store.state.tasks.find((task: any) => task.id === props.id);
  if (task) {
    task.editing = !task.editing;
    store.dispatch("editTask", task);
  }
};

const removeTask = () => {
  store.dispatch("removeTask", props.id);
};
</script>

<template>
  <div class="d-flex justify-content-between">
    <div>{{ title }}</div>
    <div>
      <button class="btn" @click="editStatus">Edit</button>
      <button class="btn" @click="removeTask">Delete</button>
    </div>
  </div>
</template>
