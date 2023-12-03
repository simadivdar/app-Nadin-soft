<script lang="ts">
import { defineComponent,ref} from "vue";

export default defineComponent({
  name: "addItem",
  emits: ['newTaskTitle'],
  setup(props, { emit }) {
  const newTaskTitle = ref("");
  function addNew() {
    if (newTaskTitle.value === "") {
    return;
  }

  console.log('Label value: ',newTaskTitle.value);
  emit('newTaskTitle',newTaskTitle.value);
  newTaskTitle.value="";

}
    return {
     newTaskTitle,
     addNew
    };
  },
});
</script>

<template>
  <div class="mt-5 m-auto col-10">

    <input
  type="text"
  id="new-todo-input"
  name="new-todo"
  autocomplete="off"
  v-model.lazy.trim="newTaskTitle" />
  <button  @click="addNew">click</button>
  </div>
</template>
