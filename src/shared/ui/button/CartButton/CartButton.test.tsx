import {screen} from '@testing-library/react';
import {vi} from 'vitest';
import {useAuth} from '@/shared/lib/hooks';
import {testIdValues} from '@/test/const/testId';
import {emptyUser, mockUser} from '@/test/const/user';
import {renderWithProviders} from '@/test/wrappers/renderWithProviders';
import {CartButton} from './CartButton';

vi.mock('@/shared/lib/hooks', () => ({
  useAppDispatch: vi.fn(),
  useAuth: vi.fn(),
  useAppSelector: vi.fn()
}));
vi.mock('@/slices/modal', async (importOriginal) => {
  return await importOriginal();
});

const countedQuantityValue = '3';

describe('CartButton component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with not authorized user', () => {
    (useAuth as jest.Mock).mockReturnValue(emptyUser);
    renderWithProviders(<CartButton />);

    expect(screen.getByTestId(testIdValues.cartButtonTestId)).toBeInTheDocument();
  });

  it('displays the correct products quantity', () => {
    (useAuth as jest.Mock).mockReturnValue(mockUser);
    renderWithProviders(<CartButton />);

    const badgeSpan = screen.getByText(countedQuantityValue);
    expect(badgeSpan).toHaveClass('MuiBadge-badge');
    expect(badgeSpan).toHaveTextContent(countedQuantityValue);
  });
});
