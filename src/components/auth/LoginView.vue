<template>
  <div class="col-lg-7 mx-auto">
    <div class="card card-body">
      <div class="alert alert-warning" v-if="error">
        {{ error }}
      </div>
      <form @submit.prevent="login">
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

        <button class="btn btn-primary rounded-1 w-100">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";

export default {
  setup(props, { emit }) {
    let email = ref("");
    let password = ref("");

    let { error, userLogin } = useLogin();

    let login = async () => {
      try {
        let res = await userLogin(email.value, password.value);
        if (res) {
          emit("login");
        }
      } catch (e) {
        // console.log(e.message);
      }
    };

    return { email, password, login, error };
  },
};
</script>
<style></style>
