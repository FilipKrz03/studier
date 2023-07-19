"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import classes from "./page.module.scss";

export default function Dashboard() {
  const user: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);

  if (user) {
    return (
      <div className={classes["page-container"]}>
        <HeroContainer />
      </div>
    );
  }
}
