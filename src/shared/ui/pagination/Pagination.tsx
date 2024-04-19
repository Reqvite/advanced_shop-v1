import {Pagination as MuiPagination, PaginationProps, Typography} from '@mui/material';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';

type Props = PaginationProps & {
  total?: number;
};

export const Pagination = ({total, ...otherProps}: Props) => {
  return (
    <Flex sx={{justifyContent: 'space-between', alignItems: 'center', gap: 2}}>
      <MuiPagination color="primary" {...otherProps} />
      <Button>Show more products</Button>
      {total && (
        <Flex gap={1}>
          {total}
          <Typography>Products</Typography>
        </Flex>
      )}
    </Flex>
  );
};
