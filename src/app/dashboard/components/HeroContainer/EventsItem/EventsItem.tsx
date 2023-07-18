import classes from "./EventsItem.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const EventsItem = () => {
  return (
    <motion.div className={classes.item} whileHover={{ scale: 1.15 }}>
      <Image alt="Events" src={"/img/Events.svg"} width={300} height={135} />
      <p>
        Here you can make your
        <span className={classes.plan}> Lesson Plan ! </span> You are able to
        add lessons with detail information 📖📖 in easy way You can manage
        however you want !
      </p>
    </motion.div>
  );
};

export default EventsItem;
