import { Subject } from "@/types/Grade";

export const calculateGradeAverage = (subject: Subject) => {
  let gradeTimes = 0;
  let gradeSum = 0;
  subject.grades.map((grade) => {
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

  const weightedAverage = (gradeSum / gradeTimes);

  return weightedAverage;
};
