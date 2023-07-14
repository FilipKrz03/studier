import { Grade, Subject } from "@/types/Grade";
import classes from "./SubjectItem.module.scss";
import GradeItem from "../GradeItem/GradeItem";

type Props = {
  subjectData: Subject ,
  onDelate: (id: number) => void , 
  onEdit:(grade:Grade) => void , 
};

const SubjectItem = ({ subjectData, onDelate , onEdit }: Props) => {
  const delateHandler = (id: number) => {
    onDelate(id);
  };

  const editHandler = (grade:Grade) => {
    onEdit(grade);
  }

  let gradeTimes = 0;
  let gradeSum = 0;
  subjectData.grades.map((grade) => {
    let gradeWeight = 5;
    switch (grade.category) {
      case "Short-Test":
        gradeWeight = 4;
        break;
      case "Oral Answer":
        gradeWeight = 3;
        break;
      case "Project":
        gradeWeight = 2;
        break;
      case "Activity":
        gradeWeight = 1;
        break;
    }
    gradeSum += parseFloat(grade.grade) * gradeWeight;
    gradeTimes += gradeWeight;
  });


  const weightedAverage = (gradeSum / gradeTimes).toFixed(2);

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
      <div className={classes.average}>Average : {weightedAverage}</div>
    </div>
  );
};

export default SubjectItem;
