"use client";
import { useAuthContext } from "@/context/AuthContext";
import getData from "@/firebase/firestore/getData";
import { signOut, getAuth } from "firebase/auth";
import { User } from "@/types/User";
import app from "@/firebase/config";


// only for test purposes

export default function Dashboard() {

  const auth = getAuth(app);
  const user:User|null = useAuthContext();

  if(user === null){
    return (
      <div>You are not login</div>
    )
  }

  if(user){
    
  }


}
