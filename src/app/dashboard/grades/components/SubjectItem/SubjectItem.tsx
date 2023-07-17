import { Grade, Subject } from "@/types/Grade";
import classes from "./SubjectItem.module.scss";
import GradeItem from "../GradeItem/GradeItem";
import { calculateGradeAverage } from "@/app/utils/calculateGradeAverage";

type Props = {
  subjectData: Subject;
  onDelate: (id: number) => void;
  onEdit: (grade: Grade) => void;
};

const SubjectItem = ({ subjectData, onDelate, onEdit }: Props) => {
  const delateHandler = (id: number) => {
    onDelate(id);
  };

  const editHandler = (grade: Grade) => {
    onEdit(grade);
  };

  const weightedAverage = calculateGradeAverage(subjectData);

  return (
    <div className={classes.subject}>
      <h3>{subjectData.subject}</h3>
      <div className={classes.grades}>
        {subjectData.grades.map((grade) => {
          return (
            <GradeItem
              onEdit={editHandler}
              key={Math.random()}
              gradeInfo={grade}
              onDelate={delateHandler}
            />
          );
        })}
      </div>
      <div className={classes.average}>Average : {weightedAverage.toFixed(2)}</div>
    </div>
  );
};

export default SubjectItem;
