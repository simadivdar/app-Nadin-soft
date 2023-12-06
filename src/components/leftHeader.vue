<script setup lang="ts">
</script>
<template>
  <div class="container-fluid p-0">
    <div class="border h-100 container-fluid">
      <ul class="nav flex-column nav-pills">
        <li class="nav-item m-auto mt-3 ">
          <router-link to="/app" class="mode-btn" data-toggle="pill"
            >{{ $t('Dashboard') }}</router-link
          >
        </li>
        <li class="nav-item m-auto mt-3">
          <router-link
            :to="{ name: 'Todo' }"
            class="mode-btn "
            data-toggle="pill"
            >{{ $t('Todos') }}</router-link
          >
        </li>
        <li class="nav-item m-auto mt-3">
          <router-link
            :to="{ name: 'Weather' }"
            class="mode-btn"
            data-toggle="pill"
            >{{ $t('Weather') }}</router-link
          >
        </li>
        <li class="nav-item m-auto mt-3">
          <router-link
            :to="{ name: 'Profile' }"
            class="mode-btn"
            data-toggle="pill"
            >{{ $t('Profile') }}</router-link
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
