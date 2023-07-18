"use client";
import { useState } from "react";
import { Event } from "@/types/Event";
import classes from "./EventItem.module.scss";
import { pickColorAndWeightDependingOnCategory } from "@/app/utils/pickColorAndWeightDependingOnCategory";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DelateConfrimer from "@/app/UI/DelateConfrimer/DelateConfrimer";

type Props = {
  event: Event;
  onDelate: (id: number) => void;
};

const EventItem = ({ event, onDelate }: Props) => {
  const { color: backgroundColor } = pickColorAndWeightDependingOnCategory(
    event.category
  );

  const [showDelateConfrimer, setShowDelateConfrimer] = useState(false);

  return (
    <>
      {showDelateConfrimer && (
        <DelateConfrimer
          onRefuse={() => {
            setShowDelateConfrimer(false);
          }}
          onConfirm={() => {
            onDelate(event.id);
          }}
          item="Event"
        />
      )}
      <div className={classes.event} style={{ backgroundColor }}>
        <DeleteIcon
          className={`${classes.icon} ${classes.delate}`}
          onClick={() => {
            setShowDelateConfrimer(true);
          }}
        />
        <EditIcon className={`${classes.icon} ${classes.edit}`} />
        <p>{event.date}</p>
        <div className={classes.info}>
          {event.subject} : {event.category}
        </div>
        <p> Description : {event.description}</p>
      </div>
    </>
  );
};

export default EventItem;
