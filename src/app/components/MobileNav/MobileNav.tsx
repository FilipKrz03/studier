"use client";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import classes from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/login">
        <div className={classes.item}>
          <LoginIcon />
          Login
        </div>
      </Link>
      <Link href="/register">
        <div className={classes.item}>
          <PersonAddIcon />
          Sign Up
        </div>
      </Link>
    </nav>
  );
};

export default MobileNav;
