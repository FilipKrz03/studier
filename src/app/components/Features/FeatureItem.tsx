"use client";
import Link from "next/link";
import classes from "./FeatureItem.module.scss";
import { useAuthContext } from "@/context/AuthContext";

type Props = {
  title: string;
  description: string;
  icon: any;
};

const FeatureItem = ({ title, description, icon }: Props) => {
  const Icon = icon;
  const user = useAuthContext();

  return (
    <div className={classes.item} data-testid="feature-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={user ? "/dashboard" : "/register"}>Get started</Link>
      <div className={classes.icon}>
        <Icon fontSize="small" style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default FeatureItem;
