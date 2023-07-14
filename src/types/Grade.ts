
export type Grade = {
  day:string;
  subject: string;
  category: string;
  grade: string;
};

export type Subject = {
  subject: string;
  grades: Grade[];
};
