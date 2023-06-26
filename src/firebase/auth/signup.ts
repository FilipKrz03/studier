import app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}
