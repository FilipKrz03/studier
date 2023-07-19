import { Metadata } from "next";
import Description from "./components/Description/Description";
import EventsBox from "./components/EventsBox/EventsBox";

export const metadata: Metadata = {
  title: "Events",
  description: "Events page",
};

export default function Events() {
  return (
    <>
      <Description />
      <EventsBox />
    </>
  );
}
