"use client";
import {useState} from 'react';
import Button from '@/app/UI/Button/Button';
import classes from './AllGrades.module.scss';
import Modal from '@/app/UI/Modal/Modal';
import NewGradeForm from '../NewGradeForm/NewGradeForm';


const AllGrades = () => {
    const [showForm , setShowForm] = useState(false);

return(
    <>
    {showForm && <Modal onClose={()=>{setShowForm(false)}}><NewGradeForm /></Modal>}
    <Button description='Add Grade' isSubmit={false} clickFunction={()=>{setShowForm(true)}} />
    </>
)
}

export default AllGrades;