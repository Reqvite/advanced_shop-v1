import {Pagination as MuiPagination, PaginationProps, Typography} from '@mui/material';
import {ChangeEvent, ReactElement} from 'react';
import {useFilter} from '@/shared/lib/hooks';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {Chip} from '../chip/Chip';

type Props = PaginationProps & {
  total?: number;
  label?: string;
  onShowMoreClick?: () => void;
  onChange?: () => void;
};

export const Pagination = ({
  onShowMoreClick,
  total,
  count,
  label = 'Products',
  onChange,
  ...otherProps
}: Props): ReactElement | null => {
  const {onUpdateFilter} = useFilter();

  if (count === 0) {
    return null;
  }

  const onChangePage = (_: ChangeEvent<unknown>, page: number): void => {
    onUpdateFilter({data: {page}});
    if (onChange) {
      onChange;
    }
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" gap={2} paddingTop="40px">
      <Flex alignItems="center">
        <Typography>Page:</Typography>
        <MuiPagination onChange={onChangePage} count={count} {...otherProps} />
      </Flex>
      {onShowMoreClick && <Button onClick={onShowMoreClick}>Show more</Button>}
      {total && (
        <Flex gap={1} alignItems="center">
          <Chip label={total} />
          <Typography variant="body2" color="grey.200">
            {label}
          </Typography>
        </Flex>
      )}
    </Flex>
  );
};
