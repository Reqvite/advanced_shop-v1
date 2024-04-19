import {Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import {ReactElement, useState} from 'react';
import {useSelector} from 'react-redux';
import {Form, FormOption, FormVariantsEnum} from '@/components/form';
import {useAppDispatch} from '@/shared/lib/hooks';
import {createUserSchema} from '@/shared/lib/yup/createUser.schema';
import {loginUserUserSchema} from '@/shared/lib/yup/loginUser.schema';
import {UserLoginRequestDto, UserRegisterRequestDto} from '@/shared/types/user/user';
import {actions, selectAuthIsLoading, selectAuthShowModal} from '@/slices/user';
import {Modal} from './Modal';

const loginOptions: FormOption<FormVariantsEnum>[] = [
  {id: 'email', variant: FormVariantsEnum.Input, name: 'Email'},
  {id: 'password', variant: FormVariantsEnum.Input, name: 'Password', type: 'password'}
];

const registerOptions: FormOption<FormVariantsEnum>[] = [
  {id: 'firstName', variant: FormVariantsEnum.Input, name: 'First name'},
  {id: 'lastName', variant: FormVariantsEnum.Input, name: 'Last name'},
  ...loginOptions,
  {
    id: 'phoneNumber',
    variant: FormVariantsEnum.Input,
    name: 'Phone number'
  }
];

const defaultValues = registerOptions.reduce(
  (acc, option) => {
    acc[option.id] = '';
    return acc;
  },
  {} as {[key: string]: string}
);

export const AuthModal = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isShowModal = useSelector(selectAuthShowModal);
  const isLoading = useSelector(selectAuthIsLoading);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

  const onCloseModal = (): void => {
    dispatch(actions.closeModal());
  };

  const onChangeAuthMode = (): void => {
    setIsLoginMode((mode) => !mode);
  };

  const onSubmit = (data: {[key: string]: string}): void => {
    const submitAction = isLoginMode
      ? actions.login(data as UserLoginRequestDto)
      : actions.register(data as UserRegisterRequestDto);
    dispatch(submitAction);
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
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          formValidationSchema={isLoginMode ? loginUserUserSchema : createUserSchema}
          isLoading={isLoading}
        />
        <Button fullWidth variant="outlined" onClick={onChangeAuthMode}>
          {isLoginMode ? 'Don`t have an account? Sign up' : ' Already have an account? Sign in'}
        </Button>
      </Stack>
    </Modal>
  );
};
