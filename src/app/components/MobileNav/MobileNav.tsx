"use client";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import classes from "./MobileNav.module.scss";
import { useAuthContext } from "@/context/AuthContext";
const MobileNav = () => {
  const user = useAuthContext();

  return (
    <nav className={classes.nav}>
      {!user && (
        <Link href="/login">
          <div className={classes.item}>
            <LoginIcon />
            Login
          </div>
        </Link>
      )}
      {!user && (
        <Link href="/register">
          <div className={classes.item}>
            <PersonAddIcon />
            Sign Up
          </div>
        </Link>
      )}
      {user && (
        <Link href="/">
          <div className={classes.item}>
            <InfoIcon />
            About
          </div>
        </Link>
      )}
      {user && (
        <Link href="/dashboard">
          <div className={classes.item}>
            <DashboardIcon />
            Dashboard
          </div>
        </Link>
      )}
    </nav>
  );
};

export default MobileNav;
