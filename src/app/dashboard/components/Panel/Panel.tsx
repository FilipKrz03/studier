"use client";
import useUserData from "@/hooks/useUserData";
import LogoutIcon from "@mui/icons-material/Logout";
import { dashboard } from "@/data/dashboard";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut, getAuth } from "firebase/auth";
import classes from "./Panel.module.scss";

const Panel = () => {
  const user: any = useAuthContext();
  const { userData, loading, error } = useUserData(user ? user.uid : null);
  const router = useRouter();
  const auth = getAuth();

  const logoutHandler = () => {
    signOut(auth);
    router.push("/");
  };

  return (
    <nav className={classes.panel}>
      <div className={classes.gretting}>
        <h2>Hey!</h2> <span> {!loading && userData.username.stringValue} </span>
      </div>
      <ul>
        {dashboard.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.title}>
              <Icon fontSize="large" />
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
      <div className={classes.logout} onClick={logoutHandler}>
        <LogoutIcon fontSize="large" />
        <p>Logout</p>
      </div>
    </nav>
  );
};

export default Panel;
