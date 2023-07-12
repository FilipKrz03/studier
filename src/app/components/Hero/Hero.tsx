"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";
import classes from "./Hero.module.scss";


const Hero = () => {

  const user = useAuthContext();

  return (
    <section className={classes.hero}>
      <div className={classes["hero-info"]}>
        <h2>More than just studie planner</h2>
        <p>
          Build your own lesson plan , add tests , presetation and own grades.
          We will deliver analythics
        </p>
        <Link href={user ? '/dashboard' : '/register'}>Get Started</Link>
      </div>
      <Image src={'/img/undraw_design_notes_re_eklr.svg'} width={600} height={600} alt="d" className={classes.image}  />
    </section>
  );
};
export default Hero;
