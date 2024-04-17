import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '@/shared/lib/hooks';
import {actions as userActions} from '@/slices/user';

export const UserAuth = () => {
  const dispatch = useAppDispatch();
  const authStatus = useSelector((state) => state.user.status);
  const authError = useSelector((state) => state.user.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    dispatch(userActions.register({email, password}));
  };

  const handleLogin = () => {
    dispatch(userActions.login({email, password}));
  };

  const testCurrentUser = () => {
    dispatch(userActions.currentUser());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister} disabled={authStatus === 'loading'}>
        Register
      </button>
      <button onClick={handleLogin} disabled={authStatus === 'loading'}>
        Login
      </button>
      {authError && <p>Error: {authError}</p>}
      <button onClick={testCurrentUser}>test</button>
    </div>
  );
};
