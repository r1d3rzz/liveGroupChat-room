<template>
  <div>
    <textarea
      placeholder="type text and hit enter send message ..."
      class="form-control bg-light border-0"
      v-model="message"
      @keydown.prevent.enter="sendMessage"
    ></textarea>

    <p v-if="error" class="text-danger text-center p-5">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { timestamp } from "../firebase/config";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";

export default {
  setup() {
    let message = ref("");
    let { user } = getUser();

    let { error, addDocs } = useCollection("messages");

    let sendMessage = async () => {
      let chatText = {
        name: user.value.displayName,
        message: message.value,
        created_at: timestamp(),
      };
      message.value = "";

      await addDocs(chatText);
    };

    return { message, sendMessage, error };
  },
};
</script>

<style>
</style>