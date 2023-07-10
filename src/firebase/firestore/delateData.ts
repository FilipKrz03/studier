import app from "../config";
import { getFirestore, doc,  deleteDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function deleteData(collection: string, id: string) {
  let error: any = null;
  try {
    await deleteDoc(doc(db, collection, id));
  } catch (e) {
    error = e;
  }

  return  error ;
}
