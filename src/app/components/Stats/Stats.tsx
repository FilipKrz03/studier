"use client";
import { useRef } from "react";
import CountUp from "react-countup";
import { stats } from "@/data/stats";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import classes from "./Stats.module.scss";

const Stats = () => {
  const ref = useRef<HTMLElement | null>(null);
  const entry = useIntersectionObserver(ref, true);
  const wasSeen = !!entry?.isIntersecting;

  const statistics = stats.map((stat) => {
    return (
      <div key={stat} className={classes["stat-item"]}>
        <h2>
          <CountUp start={0} end={100} duration={3} />%
        </h2>
        <p>{stat}</p>
      </div>
    );
  });

  return (
    <aside className={classes.aside} ref={ref}>
      {wasSeen && statistics}
    </aside>
  );
};

export default Stats;
