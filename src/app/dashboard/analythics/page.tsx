import { Metadata } from "next";
import AnalythicsBox from "./components/AnalythicsBox/AnalythicsBox";
import Description from "./components/Description/Description";

export const metadata: Metadata = {
  title: "Analythics",
  description: "Analythics page",
};

export default function Analythics() {
  return (
    <>
      <Description />
      <AnalythicsBox />
    </>
  );
}
