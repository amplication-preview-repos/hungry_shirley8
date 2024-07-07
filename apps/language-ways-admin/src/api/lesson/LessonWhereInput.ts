import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type LessonWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  dateTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
};
