"use client";
import { useEffect } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthChecker = ({ children }: Props) => {
  const user: FirebaseUser | undefined = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) {
      router.push("/");
    }
  }, [user, router]);

  if (user) {
    return <>{children}</>;
  }
};

export default AuthChecker;
