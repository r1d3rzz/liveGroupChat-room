import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import ChatRoom from "../views/chatroom/ChatRoom.vue";
import { auth } from "../../firebase/config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
      beforeEnter(to, from, next) {
        let user = auth.currentUser;
        if (!user) {
          next();
        } else {
          next({ name: "chatroom" });
        }
      },
    },
    {
      path: "/chatroom",
      name: "chatroom",
      component: ChatRoom,
      beforeEnter(to, from, next) {
        let user = auth.currentUser;
        if (user) {
          next();
        } else {
          next({ name: "welcome" });
        }
      },
    },
  ],
});

export default router;
