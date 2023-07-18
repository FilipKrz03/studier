"use client";
import { useState  , useEffect} from "react";
import Button from "@/app/UI/Button/Button";
import classes from "./EventsBox.module.scss";
import EventForm from "../EventForm/EventForm";
import Modal from "@/app/UI/Modal/Modal";
import {User as FirebaseUser} from 'firebase/auth';
import { Event } from "@/types/Event";
import EventItem from "../EventItem/EventItem";
import addData from "@/firebase/firestore/addData";
import { useAuthContext } from "@/context/AuthContext";
import useUserData from "@/hooks/useUserData";

const EventsBox = () => {

  const user:FirebaseUser|undefined = useAuthContext();
  const {userData , loading} = useUserData(user?.uid || '');
  const [showForm, setShowForm] = useState(false);
  const [events , setEvents] = useState<Event[]>([])

  useEffect(()=>{
    if(!loading){
      setEvents(userData?.events || []);
    }
  }, [loading , userData])


  const addEventHandler =  async(event:Event) => {
    setEvents([...events , event]);
    const {error} = await addData('users' , user!.uid , {
        events:[...events  , event]
    })
    if(error){
      console.log(error);
    }
  } 

  const delateEventHandler = async(id:number) => {
    const updatedEventsArray = events.filter(event => event.id !== id);
    setEvents(updatedEventsArray);
    const {error} = await addData('users' , user!.uid , {
      events:updatedEventsArray
  })
  if(error){
    console.log(error);
  }
  }

  return (
    <>
      {showForm && (
        <Modal
          onClose={() => {
            setShowForm(false);
          }}
        >
          <EventForm onAdd={addEventHandler} onClose={()=>{setShowForm(false)}} />
        </Modal>
      )}
      <Button
        description="Add Event"
        isSubmit={false}
        clickFunction={() => {
          setShowForm(true);
        }}
      />
      <div className={classes['events-box']}>
        {events.map(event => {
          return <EventItem key={event.id} event={event} onDelate={delateEventHandler} />
        })}
      </div>
    </>
  );
};

export default EventsBox;
