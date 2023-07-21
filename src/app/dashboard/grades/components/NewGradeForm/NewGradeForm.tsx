"use client";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { grades, categories } from "@/data/grades";
import { Grade } from "@/types/Grade";
import Button from "@/app/UI/Button/Button";
import { useDispatch } from "react-redux";
import { gradesActions } from "@/app/dashboard/redux-store/grades-slice";
import dayjs, { Dayjs } from "dayjs";
import Alert from "@/app/UI/Alert/Alert";
import classes from "./NewGradeForm.module.scss";

type Props = {
  onClose: () => void;
  isEditing?: boolean;
  gradeInfo?: Grade;
};

const NewGradeForm = ({ onClose, isEditing = false, gradeInfo }: Props) => {
  const [selectedDay, setSelectedDay] = useState<Dayjs | null>(
    dayjs(gradeInfo?.day) || dayjs()
  );
  const [selectedGrade, setSelectedGrade] = useState(gradeInfo?.grade || "3");
  const [selectedCategory, setSelectedCategory] = useState(
    gradeInfo?.category || "Test"
  );
  const [subjectName, setSubjectName] = useState(gradeInfo?.subject || "");
  const [subjectError, setSubjectError] = useState(false);

  const dispatch = useDispatch();

  const gradeChangeHandler = (event: SelectChangeEvent) => {
    setSelectedGrade(event.target.value);
  };

  const categoryChangeHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const subjectChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSubjectError(false);
    setSubjectName(event.target.value);
  };

  const submitFormHandler = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (subjectName.trim() === "") {
      setSubjectError(true);
      return;
    }
    const date = dayjs(selectedDay).format("MM/DD/YYYY");
    const gradeItem: Grade = {
      id: gradeInfo?.id || Math.random(),
      day: date,
      subject: subjectName,
      grade: selectedGrade,
      category: selectedCategory,
    };
    if (!isEditing) dispatch(gradesActions.addGrade(gradeItem));
    if (isEditing) dispatch(gradesActions.changeGrade(gradeItem));
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <CloseIcon
        className={classes.icon}
        fontSize="large"
        onClick={() => {
          onClose();
        }}
      />
      <div className={classes["date-picker"]}>
        Pick Date
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDay}
            onChange={(newValue) => setSelectedDay(newValue)}
          />
        </LocalizationProvider>
      </div>
      <div className={classes.subject}>
        <TextField
          fullWidth
          label="Subject"
          onChange={subjectChangeHandler}
          value={subjectName}
          disabled={isEditing}
        />
        {subjectError && <Alert alertMessage="Enter subject name" />}
      </div>
      <FormControl fullWidth>
        <InputLabel>Grade</InputLabel>
        <Select
          value={selectedGrade}
          label="Grade"
          onChange={gradeChangeHandler}
        >
          {grades.map((grade) => {
            return (
              <MenuItem key={grade.number} value={grade.value}>
                {grade.number}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
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
      <Button description="Add Grade" isSubmit={true} />
    </form>
  );
};

export default NewGradeForm;
