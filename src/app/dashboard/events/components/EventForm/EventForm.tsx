"use client";
import { useState } from "react";
import classes from "./EventForm.module.scss";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { categories } from "@/data/grades";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import Button from "@/app/UI/Button/Button";
import { Event } from "@/types/Event";
import CloseIcon from '@mui/icons-material/Close';
import Alert from "@/app/UI/Alert/Alert";


type Props = {
    onAdd:(event:Event) => void , 
    onClose:() => void , 
}

const EventForm = ({onAdd , onClose}:Props) => {
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(dayjs());
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Test");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [subjectError, setSbujectError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const subjectChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSelectedSubject(event.target.value);
    setSbujectError(false);
  };

  const categoryChangeHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionValue(event.target.value);
    setDescriptionError(false);
  };

  const submitFormHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedSubject.trim() === "") {
      setSbujectError(true);
      return;
    }
    if (descriptionValue.trim() === "") {
      setDescriptionError(true);
      return;
    }
    const date = dayjs(selectedDay).format("MM/DD/YYYY");
    const schoolEvent: Event = {
      id: Math.random(),
      date,
      subject: selectedSubject,
      category: selectedCategory,
      description: descriptionValue,
    };
    onAdd(schoolEvent);
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
        <CloseIcon className={classes.icon} onClick={()=>{onClose()}} fontSize="large" />
      <div className={classes["date-picker"]}>
        Pick Date
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDay}
            onChange={(newValue) => setSelectedDay(newValue)}
            minDate={dayjs()}
          />
        </LocalizationProvider>
      </div>
      <div className={classes.subject}>
        <TextField
          fullWidth
          value={selectedSubject}
          onChange={subjectChangeHandler}
          label="Subject"
        />
        {subjectError && <Alert alertMessage="Enter Subject" />}
      </div>

      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={selectedCategory}
          onChange={categoryChangeHandler}
        >
          {categories.map((category) => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div className={classes.description}>
        <TextField
          label="Description"
          fullWidth
          multiline
          value={descriptionValue}
          onChange={descriptionChangeHandler}
        />
        {descriptionError && <Alert alertMessage="Enter description" />}
      </div>
      <Button isSubmit={true} description="Add Event" />
    </form>
  );
};

export default EventForm;
