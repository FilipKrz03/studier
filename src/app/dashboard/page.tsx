"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { signOut, getAuth } from "firebase/auth";
import useUserData from "@/hooks/useUserData";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const user: any = useAuthContext();
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  const { userData, loading, error } = useUserData(user ? user.uid : null);

  if (user) {
    return (
      <>
        <p>{!loading && userData.username.stringValue}</p>
        <button
          onClick={() => {
            signOut(auth);
            router.push("/");
          }}
        >
          Sign out
        </button>
      </>
    );
  }
}
