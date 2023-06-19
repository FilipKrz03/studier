import Link from "next/link";
import classes from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/login">Login</Link>
      <Link href="/register">Sign Up</Link>
    </nav>
  );
};

export default MobileNav;
