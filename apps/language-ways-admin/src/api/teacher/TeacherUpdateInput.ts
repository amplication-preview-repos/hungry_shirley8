import { LessonUpdateManyWithoutTeachersInput } from "./LessonUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  lessons?: LessonUpdateManyWithoutTeachersInput;
  email?: string | null;
  specialization?: string | null;
  name?: string | null;
};
