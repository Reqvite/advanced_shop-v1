import {Pagination as MuiPagination, PaginationProps, Typography} from '@mui/material';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {Chip} from '../chip/Chip';

type Props = PaginationProps & {
  total?: number;
  label?: string;
};

export const Pagination = ({total, label = 'Products', ...otherProps}: Props) => {
  return (
    <Flex sx={{justifyContent: 'space-between', alignItems: 'center', gap: 2}}>
      <MuiPagination color="primary" {...otherProps} />
      <Button>Show more</Button>
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
