import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  dateTime?: SortOrder;
  description?: SortOrder;
  teacherId?: SortOrder;
};
