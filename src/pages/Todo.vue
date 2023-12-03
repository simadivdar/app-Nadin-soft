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
    const changeTask = ref("");
    const addTask = ( newTaskTitle:any) => {
      const newTask: Task = {
        id: tasks.value.length + 1,
        title: newTaskTitle,
        editing: false,
      };
      tasks.value.push(newTask);
      saveTasks();
    };
    const editStatus = (task:any) => {
      task.editing=!task.editing;
    };
    function editTask(task:any){
      task.title=changeTask;
      task.editing=false;
      saveTasks();
      changeTask.value=" ";
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
      addTask,
      removeTask,
      editTask,
      changeTask,
      editStatus
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
          :id="item.id"
          @delete="removeTask(item.id)" @edit="editStatus(item)"/>
          <input
          v-if="item.editing"
  type="text"
  id="new-todo-input"
  name="change-todo"
  autocomplete="off"
  v-model.lazy.trim="changeTask"
  @keypress.enter="editTask(item)" />
      </li>
    </ul>
  </div>
</template>
