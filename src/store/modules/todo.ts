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
    SET_TASKS(state: State, tasks: Task[]) {
      state.tasks = tasks;
    },
    ADD_TASK(state: State, newTask: Task) {
      state.tasks.push(newTask);
    },
    EDIT_TASK(state, editedTask: Task) {
      const taskIndex = state.tasks.findIndex(
        (task: Task) => task.id === editedTask.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = editedTask;
      }
    },
    REMOVE_TASK(state, taskId: number) {
      state.tasks = state.tasks.filter((task: Task) => task.id !== taskId);
    },
  },
  actions: {
    loadTasks({ commit }: any) {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        commit("SET_TASKS", tasks);
      }
    },
    addTask({ commit, state }: any, newTaskTitle: string) {
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: newTaskTitle,
        editing: false,
      };
      commit("ADD_TASK", newTask);
      saveTasks(state.tasks);
    },
    editTask({ commit, state }, editedTask: Task) {
      commit("EDIT_TASK", editedTask);
      saveTasks(state.tasks);
    },
    removeTask({ commit, state }, taskId: number) {
      commit("REMOVE_TASK", taskId);
      saveTasks(state.tasks);
    },
  },
  getters: {},
};
export default todoModule;
