"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { signOut, getAuth } from "firebase/auth";
import useUserData from "@/hooks/useUserData";
import { useRouter } from "next/navigation";
import HeroContainer from "./components/HeroContainer/HeroContainer";

export default function Dashboard() {
  const user: any = useAuthContext();
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  if (user) {
    return (
      <div style={{minHeight:'calc(100vh - 100px)' , display:'grid' , placeContent:'center'}}>
        <HeroContainer />
      </div>
    );
  }
}
