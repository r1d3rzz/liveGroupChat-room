import { ref } from "vue";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

let error = ref(null);

let userLogin = async (email, password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      return res;
    }
  } catch (e) {
    error.value = e.message;
    console.log(e.message);
  }
};

const useLogin = () => {
  return { error, userLogin };
};

export default useLogin;
