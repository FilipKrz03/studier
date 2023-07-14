import { Subject } from "@/types/Grade";
import classes from "./SubjectItem.module.scss";
import GradeItem from "../GradeItem/GradeItem";

type Props = {
  subjectData: Subject;
  onDelate: (id: number) => void;
};

const SubjectItem = ({ subjectData, onDelate }: Props) => {
  const delateHandler = (id: number) => {
    onDelate(id);
  };

  return (
    <div className={classes.wraper}>
      <div className={classes.subject}>
        <h3>{subjectData.subject}</h3>
        <div className={classes.grades}>
          {subjectData.grades.map((grade) => {
            return (
              <GradeItem
                key={Math.random()}
                gradeInfo={grade}
                onDelate={delateHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectItem;
