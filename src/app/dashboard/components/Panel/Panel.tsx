"use client";
import { useState } from "react";
import useUserData from "@/hooks/useUserData";
import LogoutIcon from "@mui/icons-material/Logout";
import { dashboard } from "@/data/dashboard";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { signOut, getAuth } from "firebase/auth";
import Link from "next/link";
import classes from "./Panel.module.scss";

const Panel = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const user: any = useAuthContext();
  const { userData, loading, error } = useUserData(user ? user.uid : null);
  const router = useRouter();
  const auth = getAuth();

  const logoutHandler = () => {
    signOut(auth);
    router.push("/");
  };

  const mobileMenuChangeHandler = () => {
    setMobileMenuActive((prevValue) => !prevValue);
  };

  return (
    <>
      <ChangeCircleIcon
        className={`${classes["mobile-icon"]} ${
          mobileMenuActive ? classes.sticky : ""
        }`}
        fontSize="large"
        onClick={mobileMenuChangeHandler}
      />
      <nav
        className={`${classes.panel} ${mobileMenuActive ? classes.active : ""}`}
      >
        <div className={classes.gretting}>
          <h2>Hey!</h2>{" "}
          <span> {!loading && userData!.username} </span>
        </div>
        <ul>
          {dashboard.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <Link
                  href={item.link}
                  onClick={() => setMobileMenuActive(false)}
                >
                  <Icon fontSize="large" />
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={classes.logout} onClick={logoutHandler}>
          <LogoutIcon fontSize="large" />
          <p>Logout</p>
        </div>
      </nav>
    </>
  );
};

export default Panel;
