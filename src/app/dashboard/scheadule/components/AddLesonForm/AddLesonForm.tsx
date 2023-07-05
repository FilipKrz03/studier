"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TimeField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import classes from "./AddLesonForm.module.scss";
import Button from "@/app/UI/Button/Button";

type Props = {
    onClose:()=>void;
}

const AddLesonForm = ({onClose}:Props) => {

    const closeModalHandler = () => {
        console.log('work');
        onClose();
    }

  return (
    <form className={classes.form}>
      <CloseIcon className={classes.icon} fontSize="large" onClick={closeModalHandler} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className={classes.data}>
          <TimeField format="hh:mm" label="Pic start time" />
          <TimeField format="hh:mm" label="Pic end time" />
        </div>
        <div className={classes.inputs}>
          <TextField fullWidth label="Enter Subject" />
          <TextField fullWidth label="Enter Teacher" />
        </div>
      </LocalizationProvider>
      <Button description="Add Leson" isSubmit={true} />
    </form>
  );
};

export default AddLesonForm;
