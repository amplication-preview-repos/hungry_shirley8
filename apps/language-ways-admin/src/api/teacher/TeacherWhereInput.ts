import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TeacherWhereInput = {
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  email?: StringNullableFilter;
  specialization?: StringNullableFilter;
  name?: StringNullableFilter;
};
