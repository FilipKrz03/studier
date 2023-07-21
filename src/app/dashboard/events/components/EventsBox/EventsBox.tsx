"use client";
import { useEffect} from "react";
import Button from "@/app/UI/Button/Button";
import classes from "./EventsBox.module.scss";
import Error from "@/app/UI/Error/Error";
import EventForm from "../EventForm/EventForm";
import Modal from "@/app/UI/Modal/Modal";
import { User as FirebaseUser } from "firebase/auth";
import { eventActions } from "@/app/dashboard/redux-store/event-slice";
import EventItem from "../EventItem/EventItem";
import { useAuthContext } from "@/context/AuthContext";
import { RootState } from "@/app/dashboard/redux-store";
import { useSelector , useDispatch} from "react-redux";
import { sendEventData } from "@/app/dashboard/redux-store/event-slice";
import useUserData from "@/hooks/useUserData";
import LoadingBody from "@/app/UI/LoadingBody/LoadingBody";

const EventsBox = () => {
  const user: FirebaseUser | undefined = useAuthContext();
  const { userData, loading } = useUserData(user?.uid || "");
  const showForm = useSelector(
    (state: RootState) => state.events.isAddFormActive
  );
  const hasChanged = useSelector((state: RootState) => state.events.changed);
  const eventsData = useSelector((state: RootState) => state.events.events);
  const isAddDataError = useSelector((state:RootState) => state.errors.addDataError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(eventActions.replaceData(userData!.events) || []);
    }
  }, [loading, dispatch, userData]);

  useEffect(() => {
    if (hasChanged) {
      dispatch(sendEventData(user!.uid, eventsData) as any);
    }
  }, [eventsData, user, hasChanged, dispatch]);

  if (loading) {
    return <LoadingBody />;
  }

  return (
    <>
      {showForm && (
        <Modal
          onClose={() => {
            dispatch(eventActions.changeNewEventFormDisplay(false));
          }}
        >
          <EventForm
            onClose={() => {
              dispatch(eventActions.changeNewEventFormDisplay(false));
            }}
          />
        </Modal>
      )}
      {isAddDataError && <Error />}
      <Button
        description="Add Event"
        isSubmit={false}
        clickFunction={() => {
          dispatch(eventActions.changeNewEventFormDisplay(true));
        }}
      />
      <div className={classes["events-box"]}>
        {eventsData.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};

export default EventsBox;
