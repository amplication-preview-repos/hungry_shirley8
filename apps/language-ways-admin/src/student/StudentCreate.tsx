import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
      </SimpleForm>
    </Create>
  );
};
