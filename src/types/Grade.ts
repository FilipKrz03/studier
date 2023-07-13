import { Dayjs } from "dayjs";
export type Grade = {
  day: Dayjs | null;
  subject: string;
  category: string;
  grade: string;
};

export type Subject = {
  subject: string;
  grades: Grade[];
};
