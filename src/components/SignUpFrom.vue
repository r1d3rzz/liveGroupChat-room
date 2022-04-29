<template>
  <h3 class="mb-3">Create Your Chat Account</h3>
  <div class="SignUpForm">
    <form>
      <div class="inputForm mt-3">
        <input
          type="text"
          class="form-control"
          placeholder="displayName"
          required
          v-model="displayName"
        />
      </div>

      <div class="inputForm">
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
        <button class="btn btn-sm btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    return { displayName, email, password };
  },
};
</script>

<style>
</style>