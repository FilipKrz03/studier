"use client";
import {useState} from 'react';
import {FormControl , InputLabel , Select , MenuItem , SelectChangeEvent , TextField} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker , LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { grades , categories } from '@/data/grades';
import { Grade } from '@/types/Grade';
import Button from '@/app/UI/Button/Button';
import dayjs , {Dayjs} from 'dayjs';
import Alert from '@/app/UI/Alert/Alert';
import classes from './NewGradeForm.module.scss';
type Props = {
    onClose:() => void , 
    onAdd:(grade:Grade) => void , 
}

const NewGradeForm = ({onClose , onAdd}:Props) => {
    
    const [selectedDay , setSelectedDay] = useState<Dayjs | null>(dayjs());
    const [selectedGrade , setSelectedGrade] = useState('3');
    const [selectedCategory , setSelectedCategory] = useState('Test');
    const [subjectName , setSubjectName] = useState('');
    const [subjectError , setSubjectError] = useState(false);


    const gradeChangeHandler = (event:SelectChangeEvent) => {
        setSelectedGrade(event.target.value);
      }

    const categoryChangeHandler = (event:SelectChangeEvent) => {
        setSelectedCategory(event.target.value);
      }

    const subjectChangeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setSubjectError(false);
        setSubjectName(event.target.value);
    }

      const submitFormHandler = (event:React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        subjectName === '' ? setSubjectError(true) : '';
        if (subjectError) return;
        const gradeItem:Grade = {
            day:selectedDay , 
            subject : subjectName , 
            grade : selectedGrade , 
            category:selectedCategory , 
        }
        onAdd(gradeItem);
        onClose();
      }

    return(
    <form className={classes.form} onSubmit={submitFormHandler}>
        <CloseIcon className={classes.icon} fontSize='large' onClick={()=>{onClose()}} />
        <div className={classes['date-picker']}>
            Pick Date 
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={selectedDay} onChange={(newValue) => setSelectedDay(newValue)} />
            </LocalizationProvider>
        </div>
        <div className={classes.subject}>
        <TextField fullWidth label='Subject' onChange={subjectChangeHandler} />
        {subjectError && <Alert alertMessage='Enter subject name' />}
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