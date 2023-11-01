<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "Todo",
  setup() {
    type Task = {
      id: number;
      title: string;
      editing: boolean;
    };
    const tasks = ref<Task[]>([]);
    const show=ref(false)
    const newTaskTitle = ref("");

    const addTask = () => {
      const newTask: Task = {
        id: tasks.value.length + 1,
        title: newTaskTitle.value,
        editing: false,
      };
      tasks.value.push(newTask);
      newTaskTitle.value = "";
      saveTasks();
    };

    const removeTask = (taskId: number) => {
      tasks.value = tasks.value.filter((task) => task.id !== taskId);
      saveTasks();
    };

    const saveTasks = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    };

    const loadTasks = () => {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks);
      }
    };

    onMounted(() => {
      loadTasks();
    });

    return {
      tasks,
      newTaskTitle,
      show,
      addTask,
      removeTask,
      saveTasks,
    };
  },
});
</script>

<template>
  <div class="container">
    <h1>لیست کارهای روزانه</h1>
    <ul class="list-group">
      <li v-for="task in tasks" :key="task.id" class="list-group-item">
        <div class="form-check d-flex justify-content-between">
          <div>
            <label class="form-check-label" v-if="!task.editing">
              {{ task.title }}
            </label>

            <input
              v-else
              type="text"
              class="form-control"
              v-model="task.title"
              @input="saveTasks()"
            />
          </div>
          <div>
            <button
              class="btn"
              @click="
                task.editing = !task.editing;
                saveTasks();
              "
            >
              *
            </button>
            <button class="btn" @click="removeTask(task.id)">-</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="mt-3">
      <input v-if="show" type="text" class="form-control" @keyup.enter="addTask" v-model="newTaskTitle" required/>
      <button class="btn" @click="show=!show">+</button>
    </div>
  </div>
</template>
