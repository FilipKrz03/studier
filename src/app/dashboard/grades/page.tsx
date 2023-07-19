import { Metadata } from "next";
import AllGrades from "./components/Grades/AllGrades";

export const metadata: Metadata = {
  title: "Grades",
  description: "Grades page",
};

export default function Grades() {
  return <AllGrades />;
}
