import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeacherTitle } from "../teacher/TeacherTitle";

export const LessonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <DateTimeInput label="DateTime" source="dateTime" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="teacher.id" reference="Teacher" label="Teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
