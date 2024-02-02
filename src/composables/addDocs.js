import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

let addDocs = async (data, collection_name) => {
  await addDoc(collection(db, collection_name), data).catch((e) =>
    console.log(e, message)
  );
};

export default addDocs;
