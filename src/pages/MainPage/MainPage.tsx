import {ReactElement} from 'react';
import {Form, FormInputVariantsEnum, FormOption} from '@/components/form';
import {createUserSchema} from '@/shared/lib/yup/createUser.schema';

const options: FormOption<FormInputVariantsEnum>[] = [
  {id: 'firstName', variant: FormInputVariantsEnum.Input, name: 'First name', type: 'text'},
  {id: 'lastName', variant: FormInputVariantsEnum.Input, name: 'Last name', type: 'text'},
  {id: 'email', variant: FormInputVariantsEnum.Input, name: 'Email', type: 'text'},
  {id: 'password', variant: FormInputVariantsEnum.Input, name: 'Password', type: 'password'},
  {
    id: 'phoneNumber',
    variant: FormInputVariantsEnum.Input,
    name: 'Phone number',
    type: 'text',
    isRequired: false
  }
];

const MainPage = (): ReactElement => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Form
        options={options}
        defaultValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phoneNumber: ''
        }}
        onSubmit={onSubmit}
        formValidationSchema={createUserSchema}
      />
    </>
  );
};

export default MainPage;
