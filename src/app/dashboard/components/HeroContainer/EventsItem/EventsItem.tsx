import DashboardHeroItem from "@/app/UI/DashboardHeroItem/DashboardHeroItem";
import classes from "./EventsItem.module.scss";
import Image from "next/image";

const EventsItem = () => {
  return (
    <DashboardHeroItem
      link="/dashboard/events"
      gridArea="events"
      isWidther={true}
    >
      <Image
        alt="Events"
        className={classes.image}
        src={"/img/Events.svg"}
        width={300}
        height={135}
      />
      <p>
        Here you can add <span className={classes.plan}> your events </span>
        You can choose subject date and type of event. Event is outdated ? No
        worries we will automaticly delate him 🖌️🖌️ . 
      </p>
    </DashboardHeroItem>
  );
};

export default EventsItem;
