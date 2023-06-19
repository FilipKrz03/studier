"use client";
import Link from "next/link";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import classes from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <nav className={classes.nav}>
        <div className={classes.item}>
            <LoginIcon />
        <Link href="/login">Login</Link>
        </div>
        <div className={classes.item}>
            <PersonAddIcon />
        <Link href="/register">Sign Up</Link>
        </div>
    </nav>
  );
};

export default MobileNav;
