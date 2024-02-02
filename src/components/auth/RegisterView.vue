<template>
  <div class="col-lg-7 mx-auto">
    <div class="card card-body">
      <form @submit.prevent="register">
        <div class="alert alert-warning" v-if="error">
          <div>{{ error }}</div>
        </div>
        <div class="mb-4">
          <label for="name" class="fs-6">Name</label>
          <input type="text" id="name" class="form-control" v-model="name" />
        </div>

        <div class="mb-4">
          <label for="email" class="fs-6">Email</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>

        <div class="mb-4">
          <label for="password" class="fs-6">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>

        <button class="btn btn-primary rounded-1 w-100">Register</button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";

export default {
  setup(props, { emit }) {
    let name = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createUser } = useSignup();

    let register = async () => {
      let res = await createUser(name.value, email.value, password.value);
      if (res) {
        emit("register");
      }
    };

    return { register, name, email, password, error };
  },
};
</script>
<style></style>
