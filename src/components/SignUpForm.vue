<template>
  <h3 class="mb-3">Create Your Chat Account</h3>
  <div class="SignUpForm">
    <form @submit.prevent="signUp">
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

      <p class="text-danger mt-1" v-if="error">{{ error }}</p>

      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-sm btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignUp from "../composables/useSignUp";

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = useSignUp();

    let signUp = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        console.log(res.user);
      }
    };

    return { displayName, email, password, signUp, error };
  },
};
</script>

<style>
</style>