<template>
  <div class="singleMessage" :class="{ loginUser: loggedUser == message.name }">
    <small
      ><b>{{ message.name }}</b></small
    >
    <p class="messageInfo">
      <span
        @click="showTime = !showTime"
        class="message"
        :class="{ loginUserMessage: loggedUser == message.name }"
        >{{ message.message }}</span
      ><br />
      <small class="text-muted" v-if="showTime">{{ message.created_at }}</small>
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
export default {
  props: ["message"],
  setup() {
    let showTime = ref(false);

    let { user } = getUser();

    let loggedUser = user.value.displayName;

    return { showTime, loggedUser };
  },
};
</script>

<style>
.message {
  cursor: pointer;
  -webkit-border-radius: 115px;
  -webkit-border-top-left-radius: 0;
  -moz-border-radius: 115px;
  -moz-border-radius-topleft: 0;
  border-radius: 115px;
  border-top-left-radius: 0;
  padding: 6px 10px;
  background-color: rgba(135, 207, 235, 0.545);
}
.messageInfo {
  padding: 0;
}
.loginUser {
  text-align: end;
}
.loginUserMessage {
  background-color: rgba(255, 255, 0, 0.545);
  -webkit-border-radius: 91px;
  -webkit-border-top-right-radius: 0;
  -moz-border-radius: 91px;
  -moz-border-radius-topright: 0;
  border-radius: 91px;
  border-top-right-radius: 0;
}
</style>