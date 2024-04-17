import {Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import {ReactElement, useState} from 'react';
import {useSelector} from 'react-redux';
import {Form, FormInputVariantsEnum, FormOption} from '@/components/form';
import {useAppDispatch} from '@/shared/lib/hooks';
import {createUserSchema} from '@/shared/lib/yup/createUser.schema';
import {loginUserUserSchema} from '@/shared/lib/yup/loginUser.schema';
import {actions, selectAuthShowModal} from '@/slices/user';
import {Modal} from './Modal';

const loginOptions: FormOption<FormInputVariantsEnum>[] = [
  {id: 'email', variant: FormInputVariantsEnum.Input, name: 'Email', type: 'text'},
  {id: 'password', variant: FormInputVariantsEnum.PasswordInput, name: 'Password'}
];

const registerOptions: FormOption<FormInputVariantsEnum>[] = [
  {id: 'firstName', variant: FormInputVariantsEnum.Input, name: 'First name', type: 'text'},
  {id: 'lastName', variant: FormInputVariantsEnum.Input, name: 'Last name', type: 'text'},
  ...loginOptions,
  {
    id: 'phoneNumber',
    variant: FormInputVariantsEnum.Input,
    name: 'Phone number',
    type: 'text',
    isRequired: false
  }
];

export const AuthModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isShowModal = useSelector(selectAuthShowModal);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  const onCloseModal = (): void => {
    dispatch(actions.closeModal());
  };

  const onChangeAuthMode = () => {
    setIsLoginMode((mode) => !mode);
  };

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <Modal
      open={isShowModal}
      title={isLoginMode ? 'Sign in to your account' : 'Sign up your account'}
      onClose={onCloseModal}
    >
      <Stack direction="column" gap={2}>
        <Form
          options={isLoginMode ? loginOptions : registerOptions}
          defaultValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: ''
          }}
          onSubmit={onSubmit}
          formValidationSchema={isLoginMode ? loginUserUserSchema : createUserSchema}
        />
        <Button fullWidth variant="outlined" onClick={onChangeAuthMode}>
          {isLoginMode ? 'Don`t have an account? Sign up' : ' Already have an account? Sign in'}
        </Button>
      </Stack>
    </Modal>
  );
};
