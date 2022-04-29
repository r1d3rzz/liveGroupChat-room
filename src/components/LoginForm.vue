<template>
  <h3 class="mb-3">Login Your Chat Account</h3>
  <div class="loginForm">
    <form>
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

      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-sm btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let email = ref("");
    let password = ref("");

    return { email, password };
  },
};
</script>

<style>
</style>