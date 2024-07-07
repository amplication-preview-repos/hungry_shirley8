import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type LessonCreateInput = {
  title?: string | null;
  dateTime?: Date | null;
  description?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
