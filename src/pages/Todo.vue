<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import showTodos from "../components/showTodos.vue";
import addItem from "../components/addItem.vue";
const store = useStore();
type Task = {
  id: number;
  title: string;
  editing: boolean;
};

const addTask = (newTaskTitle: string) => {
  store.dispatch("addTask", newTaskTitle);
};

const editStatus = (task: Task) => {
  task.editing = !task.editing;
};

const editTask = (task: Task) => {
  store.dispatch("editTask", task);
};

const removeTask = (taskId: number) => {
  store.dispatch("removeTask", taskId);
};

const tasks = ref<Task[]>([]);

onMounted(() => {
  store.dispatch("loadTasks");
  tasks.value = store.state.tasks;
});
</script>
<template>
  <div class="mt-5 m-auto col-10">
    <h1>To-Do List</h1>
    <addItem @new-task-title="addTask" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <showTodos
          :title="task.title"
          :id="task.id"
          @delete="removeTask(task.id)"
          @edit="editStatus(task)"
        />
        <input
          v-if="task.editing"
          type="text"
          id="new-todo-input"
          name="change-todo"
          autocomplete="off"
          v-model.lazy.trim="task.title"
          @keypress.enter="editTask(task)"
        />
      </li>
    </ul>
  </div>
</template>
