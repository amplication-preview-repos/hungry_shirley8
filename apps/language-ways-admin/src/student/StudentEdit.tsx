import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
      </SimpleForm>
    </Edit>
  );
};
