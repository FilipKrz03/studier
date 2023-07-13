import { Grade } from '@/types/Grade';
import classes from './GradeItem.module.scss';

type Props = {
    gradeInfo : Grade
}

const GradeItem = ({gradeInfo}:Props) => {
    return(
        <div className={classes.grade}>
            {gradeInfo.grade}
        </div>
    )
}

export default GradeItem;