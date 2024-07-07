import { Teacher } from "../teacher/Teacher";

export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  dateTime: Date | null;
  description: string | null;
  teacher?: Teacher | null;
};
