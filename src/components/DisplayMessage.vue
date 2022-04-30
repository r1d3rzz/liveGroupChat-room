<template>
  <div class="messageContainer" ref="messageBox">
    <div
      class="messages px-2"
      v-for="message in messagesFormat"
      :key="message.id"
    >
      <SingleMessage :message="message" />
    </div>
  </div>
</template>

<script>
import SingleMessage from "../views/SingleMessage";
import { db } from "../firebase/config";
import { ref } from "@vue/reactivity";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated } from "@vue/runtime-core";

export default {
  components: { SingleMessage },
  setup() {
    let messageBox = ref(null);
    let messages = ref([]);
    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          doc.data().created_at && results.push({ ...doc.data(), id: doc.id });
        });
        messages.value = results;
      });

    onUpdated(() => {
      messageBox.value.scrollTop = messageBox.value.scrollHeight;
    });

    let messagesFormat = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });

    return { messages, messagesFormat, messageBox };
  },
};
</script>

<style>
.messageContainer {
  max-height: 400px;
  overflow: auto;
}
</style>