"use client";
import { Event } from "@/types/Event";
import Modal from "@/app/UI/Modal/Modal";
import classes from "./EventItem.module.scss";
import { pickColorAndWeightDependingOnCategory } from "@/app/utils/pickColorAndWeightDependingOnCategory";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DelateConfrimer from "@/app/UI/DelateConfrimer/DelateConfrimer";
import EventForm from "../EventForm/EventForm";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { eventActions } from "@/app/dashboard/redux-store/event-slice";
import { useState } from "react";

type Props = {
  event: Event;
};

const EventItem = ({ event }: Props) => {
  const { color: backgroundColor } = pickColorAndWeightDependingOnCategory(
    event.category
  );

  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDelateConfrimer, setShowDelateConfrimer] = useState(false);

  return (
    <>
      {showEditForm && (
        <Modal
          onClose={() => {
            setShowEditForm(false);
          }}
        >
          <EventForm
            isEditing={true}
            eventItem={event}
            onClose={() => {
              setShowEditForm(false);
            }}
          />
        </Modal>
      )}
      {showDelateConfrimer && (
        <DelateConfrimer
          onRefuse={() => {
            setShowDelateConfrimer(false);
          }}
          onConfirm={() => {
            dispatch(eventActions.delateEvent(event.id));
            setShowDelateConfrimer(false);
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
        <EditIcon
          className={`${classes.icon} ${classes.edit}`}
          onClick={() => {
            setShowEditForm(true);
          }}
        />
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
