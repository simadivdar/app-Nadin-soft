<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LeftHeader",

});
</script>
<template>
  <div class="container-fluid p-0">
    <div class="border h-100 container-fluid ">
      <ul class="nav flex-column nav-pills">
        <li class="nav-item">
          <router-link
            to="/app"
            class="nav-link text-dark "
            data-toggle="pill"
            >Dashboard</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to=" "
            class="nav-link text-dark "
            data-toggle="pill"
            >Todos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to=" "
            class="nav-link text-dark "
            data-toggle="pill"
            >Weather</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to=" "
            class="nav-link text-dark"
            data-toggle="pill"
            >Profile</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.router-link-exact-active {
  background-color: rgba(79, 182, 207, 0.245) !important;
}
</style>
