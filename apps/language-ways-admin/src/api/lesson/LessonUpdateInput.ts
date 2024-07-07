import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type LessonUpdateInput = {
  title?: string | null;
  dateTime?: Date | null;
  description?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
