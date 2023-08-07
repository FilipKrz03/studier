"use client";
import Link from "next/link";
import { Kanit } from "next/font/google";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import classes from "./Header.module.scss";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useAuthContext } from "@/context/AuthContext";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const user = useAuthContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>
          <h3 className={kanit.className}>Studier</h3>
        </Link>
        {theme === "light" && (
          <WbSunnyIcon
            fontSize="large"
            style={{ color: "orange" }}
            onClick={() => {
              setTheme("dark");
            }}
            className={classes.icon}
          />
        )}
        {theme === "dark" && (
          <Brightness3Icon
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => {
              setTheme("light");
            }}
            className={classes.icon}
          />
        )}
      </div>
      <nav  className={classes["login-options"]}>
        {!user && <Link href="/login" data-testid='nav-link'>Login</Link>}
        {!user && <Link href="/register" data-testid='nav-link'>Sign Up</Link>}
        {user && <Link href="/" data-testid='nav-link'>About</Link>}
        {user && <Link href="/dashboard" data-testid='nav-link'>Dashboard</Link>}
      </nav>
    </header>
  );
};

export default Header;
