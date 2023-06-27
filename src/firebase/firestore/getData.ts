import app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function getData(collection: string, id: string) {
  const docRef = doc(db, collection, id);
  let result;
  let error;
  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
