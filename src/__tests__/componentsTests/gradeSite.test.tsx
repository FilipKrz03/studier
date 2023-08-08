import { render, screen, cleanup } from "@testing-library/react";
import GradeItem from "@/app/dashboard/grades/components/GradeItem/GradeItem";
import { grades } from "@/data/grades";
import { Grade } from "@/types/Grade";

const gradeInfo: Grade = {
  id: 1,
  day: "Monday",
  grade: "3",
  category: "Project",
  subject: "Math",
};

test("Does grade item display correct grade ? ", () => {
  render(<GradeItem gradeInfo={gradeInfo} />);
  const gradeItem = screen.getByTestId('grade-item');
  expect(gradeItem).toHaveTextContent(gradeInfo.grade);
});
