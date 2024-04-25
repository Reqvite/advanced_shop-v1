import {Pagination as MuiPagination, PaginationProps, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {Chip} from '../chip/Chip';

type Props = PaginationProps & {
  total?: number;
  label?: string;
  onShowMoreClick?: () => void;
};

export const Pagination = ({
  onShowMoreClick,
  total,
  label = 'Products',
  ...otherProps
}: Props): ReactElement => {
  return (
    <Flex sx={{justifyContent: 'space-between', alignItems: 'center', gap: 2}}>
      <MuiPagination {...otherProps} />
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
