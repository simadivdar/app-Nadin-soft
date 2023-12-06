<script setup lang="ts">
import { ref, defineEmits } from "vue";
const emit = defineEmits(["newTaskTitle"]);

const newTaskTitle = ref<string>("");

function addNew() {
  if (newTaskTitle.value === "") {
    return;
  }
  console.log("Label value: ", newTaskTitle.value);
  emit("newTaskTitle", newTaskTitle.value);
  newTaskTitle.value = "";
}
</script>

<template>
  <div class="mt-5 m-auto col-10">
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="newTaskTitle"
    />
    <button @click="addNew">click</button>
  </div>
</template>
