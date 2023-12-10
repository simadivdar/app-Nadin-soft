<script setup lang="ts">
import store from "../store/store";
import { ref } from "vue";

const newTaskTitle = ref<string>("");


function addNew() {
  if (newTaskTitle.value === "") {
    return;
  }
  store.dispatch("addTask", newTaskTitle.value);
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
