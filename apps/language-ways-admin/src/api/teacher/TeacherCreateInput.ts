import { LessonCreateNestedManyWithoutTeachersInput } from "./LessonCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  lessons?: LessonCreateNestedManyWithoutTeachersInput;
  email?: string | null;
  specialization?: string | null;
  name?: string | null;
};
