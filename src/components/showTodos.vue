<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
type Task = {
  id: number;
  title: string;
  editing: boolean;
};
const tasks = ref<Task[]>([]);
const editStatus = (taskId: number) => {
  let task = store.state.todo.tasks.find((task: Task) => task.id === taskId);
  if (task) {
    task.editing = !task.editing;
    task = store.getters.editTask(task);
    store.dispatch("setTask", tasks.value);
  }
};
const removeTask = (taskId: number) => {
  tasks.value = store.getters.removeTask(taskId);
  store.dispatch("setTask", tasks.value);
};
onMounted(() => {
  store.dispatch("loadTasks");
  tasks.value = store.state.todo.tasks;
});
</script>

<template>
  <div class="">
    <ul v-for="task in tasks" :key="task.id">
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
