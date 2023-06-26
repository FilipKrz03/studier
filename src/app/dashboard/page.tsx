"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut, getAuth } from "firebase/auth";
import app from "@/firebase/config";


// only for test purposes

export default function Dashboard() {
  const auth = getAuth(app);

  const user: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      return router.push("/");
    }
  }, [user]);

  if (user) {
    console.log(user.email);
  }

  const logoutHandler = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <>
        <div>Only loged in </div>
        <p>Email {user.email}</p>
        <button onClick={logoutHandler}>logout</button>
      </>
    );
  }
}
