import classes from "./DashboardHeroItem.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  gridArea: string;
  link: string;
  isWidther: boolean;
};

const DashboardHeroItem = ({ children, gridArea, link, isWidther }: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.15 }} style={{ gridArea }}>
      <Link
        className={isWidther ? classes.widther : classes.higher}
        href={link}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default DashboardHeroItem;
