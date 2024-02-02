import { ref } from "vue";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

let error = ref(null);

let createUser = async (name, email, password) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      await updateProfile(res.user, { displayName: name });

      return res;
    }
  } catch (e) {
    error.value = e.message;
    console.log(e.message);
  }
};

const useSignup = () => {
  return { error, createUser };
};

export default useSignup;
