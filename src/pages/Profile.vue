<script setup lang="ts">
import { ref, onMounted } from "vue";

const newUser = ref<string>("");
const addName = () => {
  localStorage.setItem("userName", JSON.stringify(newUser.value));
};

const theme =ref<string>("");
onMounted(() => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    document.documentElement.setAttribute("data-theme", localTheme);
    theme.value = localTheme;
  }
});

function toggleTheme(teme: string) {
  theme.value = teme;
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
}

const addLocale = (locale: string) => {
  localStorage.setItem("locale", JSON.stringify(locale));
  console.log(locale);
};
</script>

<template>
  <div class="d-flex justify-content-center m-auto">
    <div class="col-4">
      <input
        class="form-control text-center"
        type="text"
        v-model="newUser"
        :placeholder="$t('Name')"
        aria-label="default input name"
      />
      <p class="fs-6 m-0 fw-semibold">
        <span class="text-danger">*</span
        >{{ $t("Enter your name in English.") }}
      </p>
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle col-12"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ $t("Theme") }}
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#" @click="toggleTheme('')">{{
              $t("Light")
            }}</a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="toggleTheme('darkMode')"
              >{{ $t("Dark") }}</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              @click="toggleTheme('pinkMode')"
              >{{ $t("Pink") }}</a
            >
          </li>
        </ul>
      </div>
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle col-12"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ $t("locale") }}
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#" @click="addLocale('Fa')">{{
              $t("Fa")
            }}</a>
          </li>
          <li>
            <a class="dropdown-item" @click="addLocale('En')" href="#">{{
              $t("En")
            }}</a>
          </li>
        </ul>
      </div>
      <button class="btn border mt-2 col-8" @click="addName">
        {{ $t("Save") }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
