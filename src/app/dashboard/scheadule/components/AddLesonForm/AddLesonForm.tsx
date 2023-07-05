"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TimeField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./AddLesonForm.module.scss";
import Button from "@/app/UI/Button/Button";
import dayjs from "dayjs";

type Props = {
  onClose: () => void;
};

const AddLesonForm = ({ onClose }: Props) => {
  
  const [startTimeValue, setStartTimeValue] = useState<{
    $H: number;
    $m: number;
  } | null>();
  const [endTimeValue, setEndTimeValue] = useState<{
    $H: number;
    $m: number;
  } | null>();

  const closeModalHandler = () => {
    onClose();
  };

  const submitFormHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (startTimeValue && endTimeValue) {
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <CloseIcon
        className={classes.icon}
        fontSize="large"
        onClick={closeModalHandler}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={classes.data}>
          <TimeField
            format="HH:mm"
            label="Pic start time"
            value={startTimeValue}
            onChange={(newValue) => setStartTimeValue(newValue)}
          />
          <TimeField
            format="HH:mm"
            label="Pic end time"
            value={endTimeValue}
            onChange={(newValue) => setEndTimeValue(newValue)}
          />
        </div>
        <div className={classes.inputs}>
          <TextField fullWidth label="Enter Subject" />
          <TextField fullWidth label="Enter Teacher" />
        </div>
      </LocalizationProvider>
      <Button description="Add Lesson" isSubmit={true} />
    </form>
  );
};

export default AddLesonForm;
