"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TimeField, LocalizationProvider } from "@mui/x-date-pickers";
import WarningIcon from "@mui/icons-material/Warning";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./AddLesonForm.module.scss";
import Button from "@/app/UI/Button/Button";
import dayjs from "dayjs";
import Alert from "@/app/UI/Alert/Alert";

type Props = {
  onClose: () => void;
};

const AddLesonForm = ({ onClose }: Props) => {
  const [startTimeValue, setStartTimeValue] = useState<any>({ $H: 8, $m: 0 });
  const [endTimeValue, setEndTimeValue] = useState<any>({ $H: 20, $m: 0 });
  const [subjectValue, setSubjectValue] = useState("");
  const [teacherValue, setTeacherValue] = useState("");
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
        endTimeValue.$H > 8 &&
        endTimeValue.$H <= 20 &&
        (startTimeValue.$H < endTimeValue.$H ||
          (startTimeValue.$H === startTimeValue &&
            startTimeValue.$m < endTimeValue.$m))
      )
    ) {
      setFormHoursError(true);
    }
    if (subjectValue === "") {
      setSubjectError(true);
    }
    if (teacherValue === "") {
      setTeacherError(true);
    }
    if (!formHoursError && !teacherError && !subjectError) {
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

  const eight = dayjs().set("hour", 8).startOf("hour");
  const twenty = dayjs().set("hour", 20).startOf("hour");

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
            defaultValue={eight}
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
            defaultValue={twenty}
            onChange={(newValue) => {
              setEndTimeValue(newValue);
              setFormHoursError(false);
            }}
          />
        </div>
        {formHoursError && <Alert alertMessage="Enter valid time data" />}
        <div className={classes.inputs}>
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
