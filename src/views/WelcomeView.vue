<template>
  <div class="container">
    <div class="row mt-5">
      <div v-if="isLogin">
        <LoginView @login="goToChatroom" />
        <div class="text-white mt-3 text-center">
          If you have not Account.
          <span type="button" class="text-primary" @click="isLogin = !isLogin">
            Register
          </span>
          Here
        </div>
      </div>
      <div v-else>
        <RegisterView @register="goToChatroom" />
        <div class="text-white mt-3 text-center">
          If you have already Account.
          <span type="button" class="text-primary" @click="isLogin = !isLogin">
            Login
          </span>
          Here
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RegisterView from "../components/auth/RegisterView.vue";
import LoginView from "../components/auth/LoginView.vue";
import { ref } from "vue";
import router from "@/router";
export default {
  components: {
    RegisterView,
    LoginView,
  },
  setup(props) {
    let isLogin = ref(true);

    let goToChatroom = () => {
      router.push({ name: "chatroom" });
    };

    return { isLogin, goToChatroom };
  },
};
</script>
<style></style>
