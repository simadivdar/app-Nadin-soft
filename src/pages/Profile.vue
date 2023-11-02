<script lang="ts">
import { defineComponent,ref,onMounted} from "vue";
export default defineComponent({
  name: "Profile",
  setup(){
    const newUser=ref("")
    const addName=()=>{
        localStorage.setItem("userName", JSON.stringify(newUser.value));
    }
const theme = ref("");
onMounted(() => {
  const localTheme = localStorage.getItem("theme");
  if(localTheme){
  document.documentElement.setAttribute("data-theme", localTheme); 
  theme.value=localTheme;
  }
});
function toggleTheme(teme:string) {
  theme.value = teme;
  document.documentElement.setAttribute("data-theme", theme.value); 
  localStorage.setItem("theme", theme.value); 
}
    return{
        newUser,
        addName,
        toggleTheme
    }
  }
});
</script>

<template>
  <div class="d-flex justify-content-center m-auto">
    <div class="col-4">
      <input
        class="form-control text-center"
        type="text"
        v-model="newUser"
        placeholder="Name"
        aria-label="default input name"
      />
      <p class="fs-6 m-0 fw-semibold"><span class="text-danger">*</span>Enter your name in English.</p>
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle col-12"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Theme
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"  @click="toggleTheme('')">Light</a></li>
          <li><a class="dropdown-item" href="#" @click="toggleTheme('darkMode')">Dark</a></li>
          <li><a class="dropdown-item" href="#" @click="toggleTheme('pinkMode')">Pink</a></li>
        </ul>
      </div>
      <div class="dropdown mt-2">
        <button
          class="btn border dropdown-toggle col-12"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          locale
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item disabled" href="#"  aria-disabled="true">IR</a></li>
          <li class="mode-el"><a class="dropdown-item" href="#" >EN</a></li>
        </ul>
      </div>
      <button class="btn border mt-2 col-8" @click="addName">Save</button>
    </div>
  </div>
</template>

<style scoped></style>
