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

  if (user) {
    return <div></div>;
  }
}
