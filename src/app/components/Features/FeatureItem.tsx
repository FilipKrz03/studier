import Link from "next/link";
import classes from "./FeatureItem.module.scss";

type Props = {
  title: string;
  description: string;
  icon: any;
};

const FeatureItem = ({ title, description, icon }: Props) => {
  const Icon = icon;

  return (
    <div className={classes.item}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href="/register">Get started</Link>
      <div className={classes.icon}>
        <Icon fontSize="small" style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default FeatureItem;
