
export type Grade = {
  id:number
  day:string;
  subject: string;
  category: string;
  grade: number;
};

export type Subject = {
  subject: string;
  grades: Grade[];
};
