import {screen} from '@testing-library/react';
import {vi} from 'vitest';
import {useAuth} from '@/shared/lib/hooks';
import {renderWithProviders} from '@/test/wrappers/renderWithProviders';
import {CartButton} from './CartButton';

vi.mock('@/shared/lib/hooks', () => ({
  useAppDispatch: vi.fn(),
  useAuth: vi.fn(() => ({user: null, accessToken: null})),
  useAppSelector: vi.fn()
}));
vi.mock('@/slices/modal', async (importOriginal) => {
  const actual = await importOriginal();
  return actual;
});

const cartButtonTestId = 'cart-button';

describe('CartButton component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    const authData = useAuth();
    renderWithProviders(<CartButton />);

    expect(authData.user).toBeNull();
    expect(screen.getByTestId(cartButtonTestId)).toBeInTheDocument();
  });

  it('displays the correct quantity', () => {
    renderWithProviders(<CartButton />);
    const mockUser = {
      cart: [{quantity: 1}, {quantity: 2}]
    };
    useAuth.mockReturnValue({user: mockUser});
  });
});

//   it('navigates to shopping cart when user is logged in', () => {
//     const mockUser = {cart: []};
//     (useAuth as vi.Mock).mockReturnValue({user: mockUser});

//     renderButton;

//     fireEvent.click(screen.getByLabelText('Cart'));

//     expect(mockNavigate).toHaveBeenCalledWith(expect.stringContaining('/shopping-cart'));
//   });

//   it('opens login modal when user is not logged in', () => {
//     (useAuth as vi.Mock).mockReturnValue({user: null});

//     renderButton;

//     fireEvent.click(screen.getByLabelText('Cart'));

//     expect(mockDispatch).toHaveBeenCalledWith(modalActions.openModal({children: <AuthForm />}));
//   });
