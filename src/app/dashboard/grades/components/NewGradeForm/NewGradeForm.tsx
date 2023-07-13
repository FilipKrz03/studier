"use client";
import {useState} from 'react';
import {FormControl , InputLabel , Select , MenuItem , SelectChangeEvent , TextField} from '@mui/material';
import { DatePicker , LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { grades , categories } from '@/data/grades';
import classes from './NewGradeForm.module.scss';
import Button from '@/app/UI/Button/Button';

const NewGradeForm = () => {

    const[selectedGrade , setSelectedGrade] = useState('3');
    const [selectedCategory , setSelectedCategory] = useState('Test');


    const gradeChangeHandler = (event:SelectChangeEvent) => {
        setSelectedGrade(event.target.value);
      }

    const categoryChangeHandler = (event:SelectChangeEvent) => {
        setSelectedCategory(event.target.value);
      }

      const submitFormHandler = (event:React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();

      }

    return(
    <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes['date-picker']}>
            Pick Date 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
            </LocalizationProvider>
        </div>
        <div className={classes.subject}>
        <TextField fullWidth label='Subject' />
        </div>
        <FormControl fullWidth>
        <InputLabel>Grade</InputLabel>
        <Select value={selectedGrade} label='Grade' onChange={gradeChangeHandler} >
        {grades.map(grade => {
        return <MenuItem key={grade.number} value={grade.value}>{grade.number}</MenuItem>
        })}
        </Select>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select label='Category' value={selectedCategory} onChange={categoryChangeHandler}>
            {categories.map(category => {
                return <MenuItem key={category} value={category}>{category}</MenuItem>
            })}
        </Select>
        </FormControl>
        <Button description='Add Grade' isSubmit={true}/>
        </form>
    )
}

export default NewGradeForm;