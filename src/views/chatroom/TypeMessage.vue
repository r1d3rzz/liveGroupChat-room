<template>
  <div class="card card-body p-2 rounded-top-0" v-if="user">
    <div class="input-group">
      <input
        class="form-control border-0"
        placeholder="Type Here"
        v-model="message"
        @keypress.prevent.enter="sendMessage"
      />
      <button class="btn btn-sm btn-primary" @click="sendMessage">Send</button>
    </div>
  </div>
</template>
<script>
import getUser from "@/composables/getUser";
import { serverTimestamp } from "firebase/firestore/lite";
import { ref } from "vue";
import addDocs from "@/composables/addDocs";

export default {
  setup() {
    let { user } = getUser();

    let message = ref("");

    let sendMessage = async () => {
      let data = {
        message: message.value,
        name: user.value.displayName,
        created_at: serverTimestamp(),
      };

      await addDocs(data, "messages");

      message.value = "";
    };

    return { user, sendMessage, message };
  },
};
</script>
<style></style>
