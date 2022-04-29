<template>
  <div class="welcome container mt-5">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card shadow-sm p-3">
          <div v-if="showForm">
            <LoginForm />
            <p class="mt-4">
              not a member?
              <span class="changeForm" @click="showForm = !showForm"
                >create</span
              >
              account here.
            </p>
          </div>
          <div v-else>
            <SignUpFrom />
            <p class="mt-4">
              Already have account?
              <span class="changeForm" @click="showForm = !showForm"
                >Login</span
              >
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LoginForm from "../components/LoginForm";
import SignUpFrom from "../components/SignUpFrom";
export default {
  components: {
    LoginForm,
    SignUpFrom,
  },
  setup() {
    let showForm = ref(true);

    return { showForm };
  },
};
</script>

<style>
.changeForm {
  font-weight: bold;
  user-select: none;
  color: blue;
  cursor: pointer;
}
</style>