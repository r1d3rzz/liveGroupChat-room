<template>
  <div class="navbar d-flex justify-content-between p-2 bg-light" v-if="user">
    <div>
      <span
        >Hi <b>{{ user.displayName }}</b></span
      ><br />
      <small class="text-muted">logged as {{ user.email }}</small>
    </div>
    <div>
      <button class="btn btn-sm btn-danger" @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase/config";
import getUser from "../composables/getUser";

export default {
  setup() {
    let logout = async () => {
      try {
        await auth.signOut();
      } catch (err) {
        console.log(err.message);
      }
    };

    let { user } = getUser();

    return { logout, user };
  },
};
</script>

<style>
</style>