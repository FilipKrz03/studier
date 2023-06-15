"use client";
import Link from "next/link";
import { Kanit } from "next/font/google";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import classes from "./Header.module.scss";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h3 className={kanit.className}>Studier</h3>
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
      <nav className={classes["login-options"]}>
        <Link href="/login">Login</Link>
        <Link href="/register">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
