import { Module } from "vuex";
type Task = {
  id: number;
  title: string;
  editing: boolean;
};
interface State {
  tasks: Task[];
}
const saveTasks = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
const todoModule: Module<State, any> = {
   state: {
    tasks: [],
  },
 mutations: {
    SET_TASKS(state:State, tasks: Task[]) {
      state.tasks = tasks;
    },
    ADD_TASK(state:State, newTask: Task) {
      state.tasks.push(newTask);
    },
  },
   actions : {
    setTask({ commit } :any, tasks:Task[]) {
      commit("SET_TASKS", tasks);
      saveTasks(tasks);
    },
    loadTasks({ commit }:any) {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        commit("SET_TASKS", tasks);
      }
    },
    addTask({ commit, state }:any , newTaskTitle: string) {
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: newTaskTitle,
        editing: false,
      };
      commit("ADD_TASK", newTask);
      saveTasks(state.tasks);
    },
  },
 getters:{
    editTask: (state:State) => (editedTask: Task) => {
      const taskIndex = state.tasks.findIndex(
        (task: Task) => task.id === editedTask.id
      );
      return (state.tasks[taskIndex] = editedTask);
    },
    removeTask: (state:State) => (taskId: Number) => {
      return (state.tasks = state.tasks.filter(
        (task: Task) => task.id !== taskId
      ));
    },
  }
}
export default todoModule;