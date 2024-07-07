import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  specialization?: SortOrder;
  name?: SortOrder;
};
