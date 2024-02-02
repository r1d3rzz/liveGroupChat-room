<template>
  <div class="card card-body p-2 rounded-bottom-0" v-if="user">
    <div class="d-flex justify-content-between align-items-center">
      <div class="text-muted">
        <div>{{ user.displayName }}</div>
        <div>{{ user.email }}</div>
      </div>
      <div>
        <button class="btn btn-sm btn-danger" @click="logout">logout</button>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import getUser from "@/composables/getUser";

export default {
  setup() {
    let { user } = getUser();

    let logout = async () => {
      await signOut(auth);
    };

    return { logout, user };
  },
};
</script>
<style></style>
