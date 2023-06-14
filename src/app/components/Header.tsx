import Link from "next/link";
import { Kanit } from "next/font/google";
import classes from "./Header.module.scss";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  return (
    <header className={classes.header}>
      <h3 className={kanit.className}>Studier</h3>
      <nav className={classes["login-options"]}>
        <Link href="/login">Login</Link>
        <Link href="/register">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
