import {Button, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import {ReactElement, useState} from 'react';
import {useSelector} from 'react-redux';
import {Form} from '@/components/form';
import {useAppDispatch} from '@/shared/lib/hooks';
import {createUserSchema} from '@/shared/lib/yup/createUser.schema';
import {loginUserUserSchema} from '@/shared/lib/yup/loginUser.schema';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {UserLoginRequestDto, UserRegisterRequestDto} from '@/shared/types/user/user';
import {actions, selectAuthIsLoading} from '@/slices/user';

const loginOptions: FormOption<FormVariantsEnum>[] = [
  {id: 'email', variant: FormVariantsEnum.Input, name: 'Email', isRequired: true},
  {
    id: 'password',
    variant: FormVariantsEnum.Input,
    name: 'Password',
    type: 'password',
    isRequired: true
  }
];

const registerOptions: FormOption<FormVariantsEnum>[] = [
  {id: 'firstName', variant: FormVariantsEnum.Input, name: 'First name', isRequired: true},
  {id: 'lastName', variant: FormVariantsEnum.Input, name: 'Last name', isRequired: true},
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

export const AuthForm = (): ReactElement => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(false);

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
    <Stack direction="column" gap={2}>
      <Typography component="h5" variant="h5" textAlign="center">
        {isLoginMode ? 'Sign in to your account' : 'Sign up your account'}
      </Typography>
      <Form
        options={isLoginMode ? loginOptions : registerOptions}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        formValidationSchema={isLoginMode ? loginUserUserSchema : createUserSchema}
        isLoading={isLoading}
      />
      <Button sx={{marginLeft: 'auto'}} variant="text" onClick={onChangeAuthMode}>
        {isLoginMode ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
      </Button>
    </Stack>
  );
};
