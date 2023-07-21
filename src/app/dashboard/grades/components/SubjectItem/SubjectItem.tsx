import { Grade, Subject } from "@/types/Grade";
import classes from "./SubjectItem.module.scss";
import GradeItem from "../GradeItem/GradeItem";
import { calculateGradeAverage } from "@/app/utils/calculateGradeAverage";

type Props = {
  subjectData: Subject;
};

const SubjectItem = ({ subjectData }: Props) => {
  const weightedAverage = calculateGradeAverage(subjectData);

  return (
    <div className={classes.subject}>
      <h3>{subjectData.subject}</h3>
      <div className={classes.grades}>
        {subjectData.grades.map((grade) => {
          return <GradeItem key={Math.random()} gradeInfo={grade} />;
        })}
      </div>
      <div className={classes.average}>
        Average : {weightedAverage.toFixed(2)}
      </div>
    </div>
  );
};

export default SubjectItem;
