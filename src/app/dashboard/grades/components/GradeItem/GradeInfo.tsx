"use client";
import dayjs from "dayjs";
import { Grade } from "@/types/Grade";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./GradeInfo.module.scss";

type Props = {
  gradeInfo: Grade , 
  weight:number ,
  onClose:() => void , 
};

const GradeInfo = ({ gradeInfo , weight , onClose }: Props) => {
  const data = dayjs(gradeInfo.day).format("MM/DD/YYYY");

  return (
    <div className={classes.info}>
      <CloseIcon fontSize="large" className={classes.icon} onClick={onClose} />
      <p>Date : {data} </p>
      <p>Category : {gradeInfo.category}</p>
      <p>Weight : {weight}</p>
    </div>
  );
};

export default GradeInfo;
