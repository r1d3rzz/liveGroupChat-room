<template>
  <h3 class="mb-3">Login Your Chat Account</h3>
  <div class="loginForm">
    <form @submit.prevent="login">
      <div class="inputForm mt-3">
        <input
          type="email"
          class="form-control"
          placeholder="email"
          required
          v-model="email"
        />
      </div>

      <input
        type="password"
        class="form-control"
        placeholder="password"
        required
        v-model="password"
      />

      <p class="text-danger mt-1" v-if="error">{{ error }}</p>

      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-sm btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let router = useRouter();
    let { error, loginAccount } = useLogin();

    let login = async () => {
      let res = await loginAccount(email.value, password.value);
      if (res) {
        router.push("/chatroom");
      }
    };

    return { email, password, login, error };
  },
};
</script>

<style>
</style>