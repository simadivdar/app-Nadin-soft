import { createStore } from "vuex";
import todoModule from "./modules/todo";


const store= createStore<any>({
    modules: {
      todo:todoModule
    }
  })
export default store;