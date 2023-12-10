<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const editStatus = (taskId: number) => {
  const task = store.state.todo.tasks.find((task: any) => task.id === taskId);
  if (task) {
    task.editing = !task.editing;
    store.dispatch("editTask", task);
  }
};
const removeTask = (taskId: number) => {
  store.dispatch("removeTask", taskId);
};
onMounted(() => {
  store.dispatch("loadTasks");
});
</script>

<template>
  <div class="">
    <ul v-for="task in store.state.todo.tasks" :key="task.id">
      <li>{{ task.title }}</li>
      <input
        v-if="task.editing"
        type="text"
        id="new-todo-input"
        name="change-todo"
        autocomplete="off"
        v-model.lazy.trim="task.title"
      />
      <div>
        <button class="btn" @click="editStatus(task.id)">Edit</button>
        <button class="btn" @click="removeTask(task.id)">Delete</button>
      </div>
    </ul>
  </div>
</template>
