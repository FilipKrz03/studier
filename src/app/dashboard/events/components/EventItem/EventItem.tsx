import { Event } from "@/types/Event";
import classes from "./EventItem.module.scss";

type Props = {
  event: Event;
};

const EventItem = ({ event }: Props) => {
  return(
     <div className={classes.event}>
        <p>{event.date}</p>
        <div className={classes.info}>
            {event.subject} : {event.category}
        </div>
        <p> Description : {event.description}</p>
    </div>
  )
};

export default EventItem;
