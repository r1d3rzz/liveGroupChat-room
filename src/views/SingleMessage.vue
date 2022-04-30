<template>
  <div class="singleMessage">
    <small
      ><b>{{ message.name }}</b></small
    >
    <p class="messageInfo">
      <span @click="showTime = !showTime" class="message">{{
        message.message
      }}</span
      ><br />
      <small class="text-muted" v-if="showTime">{{ message.created_at }}</small>
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["message"],
  setup() {
    let showTime = ref(false);

    return { showTime };
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
</style>