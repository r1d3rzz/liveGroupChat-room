<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 mt-4">
        <NavBar />
        <MessagesView />
        <TypeMessage />
      </div>
    </div>
  </div>
</template>
<script>
import MessagesView from "./MessagesView.vue";
import TypeMessage from "./TypeMessage.vue";
import NavBar from "../../components/NavBar.vue";
import getUser from "@/composables/getUser";
import router from "@/router";
import { watch } from "vue";

export default {
  components: {
    MessagesView,
    TypeMessage,
    NavBar,
  },
  setup(props) {
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>
<style></style>
