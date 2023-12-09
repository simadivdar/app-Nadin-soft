<script setup lang="ts">
import showTodos from "../components/showTodos.vue";
import addItem from "../components/addItem.vue";
</script>
<template>
  <div class="mt-5 m-auto col-10">
    <h1>To-Do List</h1>
    <addItem />
    <ul>
    <showTodos />
    </ul>
  </div>
</template>
