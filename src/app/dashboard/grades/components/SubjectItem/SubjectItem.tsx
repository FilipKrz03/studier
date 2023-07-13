import { Subject } from '@/types/Grade';
import classes from './SubjectItem.module.scss';
import GradeItem from '../GradeItem/GradeItem';

type Props = {
    subjectData:Subject 
}

const SubjectItem = ({subjectData}:Props) => {
    return(
        <div className={classes.subject}>
            <h3>{subjectData.subject}</h3>
            <div className={classes.grades}>
                {subjectData.grades.map(grade =>{
                    return (
                        <GradeItem key={Math.random()} gradeInfo={grade} />
                    )
                })}
            </div>
        </div>
    )
}

export default SubjectItem;