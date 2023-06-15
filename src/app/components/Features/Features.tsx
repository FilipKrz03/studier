"use client";
import FeatureItem from "./FeatureItem";
import classes from "./Features.module.scss";
import { features } from "@/data/features";

const Features = () => {
  return (
    <article className={classes.article}>
      <div className={classes["description-box"]}>
        Check out our main features !
      </div>
      {features.map((feature) => {
        return (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        );
      })}
    </article>
  );
};

export default Features;
