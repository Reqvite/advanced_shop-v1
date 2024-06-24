import {renderWithProviders} from '@/test/wrappers/renderWithProviders';
import {List} from './List';

describe('List Component', () => {
  it('renders empty state when no items are provided', () => {
    const {getByText} = renderWithProviders(<List items={[]} renderItem={() => null} />);
    expect(getByText('No products found matching your search.')).toBeInTheDocument();
  });

  it('renders items correctly when items are provided', () => {
    const items = [
      {_id: '1', name: 'Item 1'},
      {_id: '2', name: 'Item 2'}
    ];
    const {getByText} = renderWithProviders(
      <List items={items} renderItem={({name}) => <div>{name}</div>} />
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });
});
