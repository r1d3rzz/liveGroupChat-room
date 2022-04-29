import { ref } from "vue";
import { db } from "../firebase/config";

let useCollection = (collection) => {
  let error = ref("");

  let addDocs = async (doc) => {
    try {
      await db.collection(collection).add(doc);
    } catch (err) {
      error.value = "cannot send message";
      console.log(err.message);
    }
  };

  return { error, addDocs };
};

export default useCollection;
