import app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function signIn(emial: string, password: string) {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, emial, password);
  } catch (err) {
    error = err;
  }

  return { result, error };
}
