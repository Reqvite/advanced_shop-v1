import {ReactElement} from 'react';
import {UserAuth} from '@/components/Test';
import {PasswordInput} from '@/shared/ui';

const MainPage = (): ReactElement => {
  return (
    <>
      <PasswordInput />
      <UserAuth />
    </>
  );
};

export default MainPage;
