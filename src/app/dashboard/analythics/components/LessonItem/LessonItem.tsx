import { Subject } from "@/types/Grade";
import classes from "./LessonItem.module.scss";
import { calculateGradeAverage } from "@/app/utils/calculateGradeAverage";

type Props = {
  subject: Subject;
};

const LessonItem = ({ subject }: Props) => {
  const weightedAverage = calculateGradeAverage(subject);

  let prognosedFinalGrade = 5;

  if (weightedAverage > 5.5) prognosedFinalGrade = 6;
  else if (weightedAverage > 4.5 && weightedAverage < 5.5)
    prognosedFinalGrade = 5;
  else if (weightedAverage > 3.5 && weightedAverage < 4.5)
    prognosedFinalGrade = 4;
  else if (weightedAverage > 2.5 && weightedAverage < 3.5)
    prognosedFinalGrade = 3;
  else if (weightedAverage > 1.5 && weightedAverage < 2.5)
    prognosedFinalGrade = 2;
  else prognosedFinalGrade = 1;

  let testsSum = 0;
  let otherSum = 0;
  let testCount = 0;
  let otherCount = 0;

  subject.grades.map((grade) => {
    if (grade.category === "Test" || grade.category === "Short-Test") {
      testsSum += parseFloat(grade.grade);
      testCount++;
    } else {
      otherSum += parseFloat(grade.grade);
      otherCount++;
    }
  });

  const testsAverage = testsSum / testCount;
  const otherAverage = otherSum / otherCount;

  let advice = "You are doing well";

  if (weightedAverage < 4.5 && testsAverage < otherAverage)
    advice = "You should put greater impact into tests";
  if (weightedAverage < 4.5 && testsAverage > otherAverage)
    advice =
      "Consider too boost your activity , Oral Answer or Project would help you";

  return (
    <div className={classes.item}>
      <h3>{subject.subject}</h3>
      <span>Prognosed Final Grade : {prognosedFinalGrade}</span>
      <span>Advice : {advice}</span>
    </div>
  );
};

export default LessonItem;
