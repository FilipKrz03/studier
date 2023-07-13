"use client";
import { useState } from "react";
import { TextField , Select , MenuItem , InputLabel, FormControl, SelectChangeEvent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TimeField, LocalizationProvider } from "@mui/x-date-pickers";
import WarningIcon from "@mui/icons-material/Warning";
import { Lesson } from "@/types/Lesson";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./AddLesonForm.module.scss";
import Button from "@/app/UI/Button/Button";
import dayjs from "dayjs";
import Alert from "@/app/UI/Alert/Alert";

type Props = {
  onClose: () => void ,
  onAddLesson?: (lesson:Lesson) => void ,
  onEditLesson?:(lesson:Lesson) => void , 
  lessonInfo?:Lesson , 
  isEditing?:boolean
};

const AddLesonForm = ({ onClose , onAddLesson , onEditLesson ,  lessonInfo , isEditing = false }: Props) => {

  const startTime = dayjs().set("hour", lessonInfo?.startTime.hour || 8).minute(lessonInfo?.startTime.minute || 0);
  const endTime = dayjs().set("hour", lessonInfo?.endTime.hour || 20).minute(lessonInfo?.endTime.minute || 0);

  const [startTimeValue, setStartTimeValue] = useState<any>({$H: lessonInfo?.startTime.hour || 8 , $m:lessonInfo?.startTime.minute || 0});
  const [endTimeValue, setEndTimeValue] = useState<any>({ $H:  lessonInfo?.endTime.hour || 20, $m: lessonInfo?.endTime.minute || 0 });
  const [subjectValue, setSubjectValue] = useState(lessonInfo?.subject || "");
  const [teacherValue, setTeacherValue] = useState(lessonInfo?.teacher || "");
  const [dayValue , setDayValue] = useState(lessonInfo?.day || 'Monday');
  const [formHoursError, setFormHoursError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [teacherError, setTeacherError] = useState(false);

 
  const closeModalHandler = () => {
    onClose();
  };

  const submitFormHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !(
        startTimeValue.$H >= 8 &&
        startTimeValue.$H < 20 &&
        endTimeValue.$H >= 8 &&
        endTimeValue.$H <= 20 &&
        (startTimeValue.$H < endTimeValue.$H ||
        (startTimeValue.$H === endTimeValue.$H &&
        startTimeValue.$m < endTimeValue.$m))
      )
    ) {
      setFormHoursError(true);
      return;
    }
    if (subjectValue === "") {
      setSubjectError(true);
      return;
    }
    if (teacherValue === "") {
      setTeacherError(true);
      return;
    }
    if (!formHoursError && !teacherError && !subjectError) {
      const lesson:Lesson = {
        id: lessonInfo?.id || Math.random() ,  
        startTime : {hour:startTimeValue.$H , minute : startTimeValue.$m} , 
        endTime : {hour:endTimeValue.$H , minute:endTimeValue.$m} , 
        day:dayValue , 
        subject:subjectValue , 
        teacher:teacherValue , 
      }
      if(!isEditing){
      onAddLesson!(lesson);
      }
      if(isEditing){
        onEditLesson!(lesson);
      }
      onClose();
    }
  };

  const changeSubjectHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSubjectValue(event.target.value);
    setSubjectError(false);
  };

  const changeTeacherHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTeacherValue(event.target.value);
    setTeacherError(false);
  };

  const dayChangeHandler = (event:SelectChangeEvent<string>) => {
      setDayValue(event.target.value);
  }

  const eight = dayjs().set("hour", 8).startOf("hour");
  const twenty = dayjs().set("hour", 20).minute(1);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <CloseIcon
        className={classes.icon}
        fontSize="large"
        onClick={closeModalHandler}
      />
      <div className={classes.rules}>
        <WarningIcon fontSize="medium" />
        <p>
          You should enter data time between 08:00-20:00 , start time must be
          smaller than 20 and end time must be greater than 8 , start time
          should be smaller than end time
        </p>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={classes.data}>
          <TimeField
            minTime={eight}
            maxTime={twenty}
            format="HH:mm"
            label="Pic start time"
            defaultValue={startTime}
            onChange={(prevValue) => {
              setStartTimeValue(prevValue);
              setFormHoursError(false);
            }}
          />
          <TimeField
            maxTime={twenty}
            minTime={eight}
            format="HH:mm"
            label="Pic end time"
            defaultValue={endTime}
            onChange={(newValue) => {
              setEndTimeValue(newValue);
              setFormHoursError(false);
            }}
          />
        </div>
        {formHoursError && <Alert alertMessage="Enter valid time data" />}
        <div className={classes.inputs}>
        <FormControl fullWidth>
          <InputLabel>Day</InputLabel>
          <Select  label='Day' value={dayValue} onChange={dayChangeHandler}   >
            <MenuItem value={'Monday'}>Monday</MenuItem>
            <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
            <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
            <MenuItem value={'Thursday'}>Thursday</MenuItem>
            <MenuItem value={'Friday'}>Friday</MenuItem>
            <MenuItem value={'Satudray'}>Satudray</MenuItem>
            <MenuItem value={'Sunday'}>Sunday</MenuItem>
          </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Enter Subject"
            value={subjectValue}
            onChange={changeSubjectHandler}
          />
          {subjectError && <Alert alertMessage="Enter subject name" />}
          <TextField
            fullWidth
            label="Enter Teacher"
            value={teacherValue}
            onChange={changeTeacherHandler}
          />
          {teacherError && <Alert alertMessage="Enter teacher name" />}
        </div>
      </LocalizationProvider>
      <Button description="Add Lesson" isSubmit={true} />
    </form>
  );
};

export default AddLesonForm;
