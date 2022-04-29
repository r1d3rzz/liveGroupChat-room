<template>
  <div class="chatRoom container mt-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card shadow-sm">
          <NavBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import NavBar from "../components/NavBar";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: { NavBar },
  setup() {
    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>