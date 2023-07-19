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

  let gradeColor = "#006400";

  switch (prognosedFinalGrade) {
    case 5:
      gradeColor = "#38b000";
      break;
    case 4:
      gradeColor = "#ccff33";
      break;
    case 3:
      gradeColor = "#fcbf49";
      break;
    case 2:
      gradeColor = "#dc2f02";
      break;
    case 1:
      gradeColor = "#9d0208";
      break;
  }

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

  const testsAverage = testsSum / testCount || 0;
  const otherAverage = otherSum / otherCount || 0;

  let advice = "You are doing well";

  if (weightedAverage < 4.5 && testsAverage < otherAverage)
    advice = "You should put greater impact into tests";
  if (weightedAverage < 4.5 && testsAverage > otherAverage)
    advice =
      "Consider too boost your activity , Oral Answer or Project would help you";
  if (weightedAverage < 4.5 && testsAverage === otherAverage)
    advice =
      "You have simillar grades from tests and activity. But you could imrpove yourself";
  if (weightedAverage < 1.5)
    advice =
      "You need to improve yourself !! Curently you do not pass this subject";

  return (
    <div className={classes.item}>
      <h3>{subject.subject}</h3>
      <span className={classes["grade-info"]}>
        Prognosed Final Grade :
        <span className={classes.grade} style={{ backgroundColor: gradeColor }}>
          {prognosedFinalGrade}
        </span>
      </span>
      <span className={classes.advice}>Advice : {advice}</span>
    </div>
  );
};

export default LessonItem;
