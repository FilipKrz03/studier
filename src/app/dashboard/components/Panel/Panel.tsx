"use client";
import { useState , useEffect } from "react";
import {User as FirebaseUser} from 'firebase/auth'
import useUserData from "@/hooks/useUserData";
import LogoutIcon from "@mui/icons-material/Logout";
import { dashboard } from "@/data/dashboard";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter , usePathname } from "next/navigation";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { signOut, getAuth } from "firebase/auth";
import Link from "next/link";
import classes from "./Panel.module.scss";

const Panel = () => 
{

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const user:FirebaseUser|undefined = useAuthContext();
  const { userData, loading, error } = useUserData(user?.uid || '');
  const router = useRouter();
  const auth = getAuth();
  const pathName = usePathname();

  useEffect(() => {
    if (user === null) router.push("/");
  }, [user, router]);


  const logoutHandler = () => {
    signOut(auth);
    router.push("/");
  };


  const mobileMenuChangeHandler = () => {
    setMobileMenuActive((prevValue) => !prevValue);
  };

  if(user){
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
              <li key={item.title} className={pathName === item.link ? classes.active : ''}>
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
          <li>
            <span onClick={logoutHandler}>
              <LogoutIcon fontSize="large" />
              <p>Logout</p>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};
}

export default Panel;
