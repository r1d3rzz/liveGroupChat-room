<template>
  <div
    class="card card-body rounded-0 bg-light"
    style="height: 500px; overflow: scroll; overflow-x: hidden"
    ref="messageBox"
  >
    <div v-if="messages.length">
      <div
        class="singleMessage mb-3"
        v-for="message in formatMessages"
        :key="message.id"
        :class="{ logguserMessage: user.displayName == message.name }"
      >
        <div class="message">
          <div class="small text-muted">{{ message.created_at }}</div>
          <div>
            <span
              class="me-2 fw-bold"
              :class="{ 'd-none': user.displayName == message.name }"
              >{{ message.name }}</span
            >
            <span class="text-muted">{{ message.message }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>
<script>
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
import {
  collection,
  onSnapshot,
  getFirestore,
  query,
  orderBy,
} from "firebase/firestore";
import getUser from "@/composables/getUser";
export default {
  setup() {
    let messages = ref([]);
    let messageBox = ref(null);
    let { user } = getUser();

    onUpdated(() => {
      messageBox.value.scrollTop = messageBox.value.scrollHeight;
    });

    let formatMessages = computed(() => {
      return messages.value.map((message) => {
        return {
          ...message,
          created_at: formatDistanceToNow(message.created_at.toDate()),
        };
      });
    });

    let db = getFirestore();
    let colRef = query(collection(db, "messages"), orderBy("created_at"));
    onSnapshot(colRef, (snap) => {
      let result = [];
      snap.docs.forEach((doc) => {
        let document = { id: doc.id, ...doc.data() };
        doc.data().created_at && result.push(document);
      });
      messages.value = result;
    });

    return { messages, formatMessages, messageBox, user };
  },
};
</script>
<style scoped>
.singleMessage {
  display: flex;
  justify-content: start;
}

.logguserMessage {
  justify-content: end;
  text-align: end;
}
.message {
  background-color: rgba(159, 140, 241, 0.386);
  padding: 5px 10px;
  border-radius: 5px;
  width: 250px;
}
</style>
