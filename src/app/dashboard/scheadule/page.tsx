import { Metadata } from "next";
import LessonScheadule from "./components/Scheadule/LessonScheadule";

export const metadata: Metadata = {
  title: "Scheadule",
  description: "Scheadule page",
};

export default function Scheadule() {
  return <LessonScheadule />;
}
