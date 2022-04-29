import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";

let error = ref(null);

let createAccount = async (email, password, displayName) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    await res.user.updateProfile({ displayName });
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignUp = () => {
  return { error, createAccount };
};

export default useSignUp;
