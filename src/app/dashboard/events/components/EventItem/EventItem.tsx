"use client";
import { Event } from "@/types/Event";
import Modal from "@/app/UI/Modal/Modal";
import classes from "./EventItem.module.scss";
import { pickColorAndWeightDependingOnCategory } from "@/app/utils/pickColorAndWeightDependingOnCategory";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DelateConfrimer from "@/app/UI/DelateConfrimer/DelateConfrimer";
import EventForm from "../EventForm/EventForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { eventActions } from "@/app/dashboard/redux-store/event-slice";
import { RootState } from "@/app/dashboard/redux-store";

type Props = {
  event: Event;
};

const EventItem = ({ event }: Props) => {

  const { color: backgroundColor } = pickColorAndWeightDependingOnCategory(
    event.category
  );

  const dispatch = useDispatch();
  const showEditForm = useSelector((state: RootState) => state.events.isEditFormActive);
  const showDelateConfrimer = useSelector((state:RootState) => state.events.isShowDelateConfrimerActive);

  return (
    <>
      {showEditForm && (
        <Modal
          onClose={() => {
            dispatch(eventActions.changeEditEventFormDisplay(false));
          }}
        >
          <EventForm
            isEditing={true}
            eventItem={event}
            onClose={() => {
              dispatch(eventActions.changeEditEventFormDisplay(false));
            }}
          />
        </Modal>
      )}
      {showDelateConfrimer && (
        <DelateConfrimer
          onRefuse={() => {
            dispatch(eventActions.changeDelateConfrimerDisplay(false));
          }}
          onConfirm={() => {
            dispatch(eventActions.delateEvent(event.id));
            dispatch(eventActions.changeDelateConfrimerDisplay(false));
          }}
          item="Event"
        />
      )}
      <div className={classes.event} style={{ backgroundColor }}>
        <DeleteIcon
          className={`${classes.icon} ${classes.delate}`}
          onClick={() => {
            dispatch(eventActions.changeDelateConfrimerDisplay(true));
          }}
        />
        <EditIcon
          className={`${classes.icon} ${classes.edit}`}
          onClick={() => {
            dispatch(eventActions.changeEditEventFormDisplay(true));
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
