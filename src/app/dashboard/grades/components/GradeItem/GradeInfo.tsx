"use client";
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grade } from "@/types/Grade";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./GradeInfo.module.scss";
import DelateConfrimer from '@/app/UI/DelateConfrimer/DelateConfrimer';

type Props = {
  gradeInfo: Grade , 
  weight:number ,
  onClose:() => void , 
};

const GradeInfo = ({ gradeInfo , weight , onClose }: Props) => {

  const [showDelateConfrimer , setShowDelateConfrimer] = useState(false);
  
  const delateHandler = ()  => {
  onClose();  
  }

  return (
    <>
    {showDelateConfrimer && <DelateConfrimer item='grade' onRefuse={()=>{setShowDelateConfrimer(false)}} onConfirm={delateHandler} />}
    <div className={classes.info}>
      <CloseIcon fontSize="large" className={`${classes.icon} ${classes.close}`} onClick={onClose} />
      <DeleteIcon fontSize='large' className={`${classes.icon} ${classes.delete}`} onClick={()=>{setShowDelateConfrimer(true)}} />
      <p>Date : {gradeInfo.day} </p>
      <p>Category : {gradeInfo.category}</p>
      <p>Weight : {weight}</p>
    </div>
    </>
  );
};

export default GradeInfo;
