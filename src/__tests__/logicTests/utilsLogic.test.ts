import { calculateGradeAverage } from "@/app/utils/calculateGradeAverage";
import { pickColorAndWeightDependingOnCategory } from "@/app/utils/pickColorAndWeightDependingOnCategory";
import { Subject } from "@/types/Grade";

test("Propely picking color ", () => {
  expect(pickColorAndWeightDependingOnCategory("Short-Test")).toStrictEqual({
    color: "#dc2f02",
    gradeWeight: 4,
  });

  expect(pickColorAndWeightDependingOnCategory("Oral Answer")).toStrictEqual({
    color: "#f77f00",
    gradeWeight: 3,
  });

  expect(pickColorAndWeightDependingOnCategory("Project")).toStrictEqual({
    color: "#2a9d8f",
    gradeWeight: 2,
  });

  expect(pickColorAndWeightDependingOnCategory("Activity")).toStrictEqual({
    color: "#8ecae6",
    gradeWeight: 1,
  });
});

const exampleSubject: Subject = {
  subject: "Math",
  grades: [
    {
      id: 1,
      day: "Monday",
      subject: "Math",
      category: "Short-Test",
      grade: "3",
    },
    {
      id: 1,
      day: "Monday",
      subject: "Math",
      category: "Oral Answer",
      grade: "5",
    },
    {
      id: 1,
      day: "Monday",
      subject: "Math",
      category: "Project",
      grade: "5",
    },
  ],
};

test("Properly calculate weighted grade average", () => {
  expect(calculateGradeAverage(exampleSubject)).toBe(4.111111111111111);
});


