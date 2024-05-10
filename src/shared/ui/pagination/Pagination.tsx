import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Pagination as MuiPagination, PaginationProps, Typography} from '@mui/material';
import {ChangeEvent, ReactElement, useEffect, useRef} from 'react';
import {defaultPage} from '@/shared/const/product.const';
import {scrollToTop} from '@/shared/lib/helpers';
import {useFilter} from '@/shared/lib/hooks';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {Chip} from '../chip/Chip';
import {toggleActiveClass} from './model/toggleActiveClass';

type Props = PaginationProps & {
  total?: number;
  label?: string;
  onShowMore?: boolean;
  onChange?: () => void;
  isLastPage?: boolean;
};

export const Pagination = ({
  total,
  count,
  label = 'Products',
  onChange,
  isLastPage,
  page = defaultPage,
  ...otherProps
}: Props): ReactElement | null => {
  const {onUpdateFilter, onShowMore, showMoreInitialPage, showMore} = useFilter();
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (ref?.current) {
      toggleActiveClass({
        buttons: ref?.current?.querySelectorAll<HTMLButtonElement>('nav > ul > li > button'),
        initialPage: showMoreInitialPage,
        endPage: page,
        showMore
      });
    }
  }, [page, showMore, showMoreInitialPage]);

  if (count === 0) {
    return null;
  }

  const onChangePage = (_: ChangeEvent<unknown>, page: number): void => {
    onUpdateFilter({data: {page}});
    scrollToTop();
    if (onChange) {
      onChange;
    }
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" gap={2} paddingTop="40px">
      <Flex alignItems="center">
        <Typography>Page:</Typography>
        <MuiPagination
          ref={ref}
          onChange={onChangePage}
          count={count}
          page={page}
          {...otherProps}
        />
      </Flex>
      {!isLastPage && (
        <Button variant="contained" onClick={onShowMore} RightAddon={KeyboardArrowDownIcon}>
          Show more
        </Button>
      )}
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
