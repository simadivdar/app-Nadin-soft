<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import addItem from "../components/addItem.vue";
import showTodosVue from "../components/showTodos.vue";
export default defineComponent({
  name: "Todo",
  components:{
    addItem,
    showTodosVue
  },
  setup() {
    type Task = {
      id: number;
      title: string;
      editing: boolean;
    };
    const tasks = ref<Task[]>([]);
    const addTask = ( newTaskTitle:any) => {
      const newTask: Task = {
        id: tasks.value.length + 1,
        title: newTaskTitle,
        editing: false,
      };
      tasks.value.push(newTask);
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
      addTask,
    };
  },
});
</script>

<template>
  <div class="mt-5 m-auto col-10">
   <h1>To-Do List</h1>
   <addItem @new-task-title="addTask($event)"/>
    <ul>
      <li v-for="item in tasks" :key="item.id">
        <showTodosVue
          :title="item.title"
          :id="item.id"/>
      </li>
    </ul>
  </div>
</template>
