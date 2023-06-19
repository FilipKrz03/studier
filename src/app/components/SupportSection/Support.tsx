"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { motion } from "framer-motion";
import { devices } from "@/data/devices";
import Image from "next/image";
import classes from "./Support.module.scss";

const Support = () => {
  const devicesRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(devicesRef, true);
  const wasSeen = entry?.isIntersecting;

  let animationDealy = 0;
  const deviceQuestions = devices.map((device) => {
    animationDealy += 0.4;
    return (
      <motion.div
        key={device.question}
        className={classes["device-text"]}
        animate={{ scale: 1, filter: "blur(0px)" }}
        initial={{ scale: 0, filter: "blur(5px)" }}
        transition={{ delay: 0 + animationDealy, duration: 0.4 }}
      >
        <h3>{device.question}</h3>
        <p>{device.answer}</p>
      </motion.div>
    );
  });

  return (
    <section className={classes.support}>
      <Image
        className={classes.image}
        src={"/img/undraw_devices_re_dxae.svg"}
        width={600}
        height={600}
        alt="Support-pic"
      />
      <div className={classes["support-info"]}>
        <h2>Our support ! </h2>
        <p>Our website works excelent in all kinds of devices</p>
        <div className={classes.devices} ref={devicesRef}>
          {wasSeen && deviceQuestions}
        </div>
      </div>
    </section>
  );
};

export default Support;
