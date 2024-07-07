import { Lesson } from "../lesson/Lesson";

export type Teacher = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lessons?: Array<Lesson>;
  email: string | null;
  specialization: string | null;
  name: string | null;
};
