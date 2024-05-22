import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Pagination as MuiPagination, PaginationProps, Typography} from '@mui/material';
import {ChangeEvent, ReactElement, useEffect, useRef} from 'react';
import {defaultPage} from '@/shared/const/product.const';
import {scrollToTop} from '@/shared/lib/helpers';
import {useFilter, useMediaQuery} from '@/shared/lib/hooks';
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
  const isMobile = useMediaQuery('md');
  const {onUpdateFilter, onShowMore, showMoreInitialPage} = useFilter();

  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (ref?.current) {
      toggleActiveClass({
        buttons: ref?.current?.querySelectorAll<HTMLButtonElement>('nav > ul > li > button'),
        initialPage: showMoreInitialPage,
        endPage: page
      });
    }
  }, [page, showMoreInitialPage]);

  if (!count || !total) {
    return null;
  }

  const onChangePage = (_: ChangeEvent<unknown>, page: number): void => {
    onUpdateFilter({page});
    scrollToTop();
    if (onChange) {
      onChange;
    }
  };

  const paginator = (
    <Flex alignItems="center" justifyContent="center">
      {!isMobile && <Typography>Page:</Typography>}
      <MuiPagination ref={ref} onChange={onChangePage} count={count} page={page} {...otherProps} />
    </Flex>
  );

  return (
    <>
      {isMobile && paginator}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        paddingTop={isMobile ? '10px' : '40px'}
      >
        {!isMobile && paginator}
        {!isLastPage && (
          <Button variant="contained" onClick={onShowMore} RightAddon={KeyboardArrowDownIcon}>
            Show more
          </Button>
        )}
        {Boolean(total) && (
          <Flex gap={1} alignItems="center">
            <Chip label={total} />
            <Typography variant="body2" color="textSecondary">
              {label}
            </Typography>
          </Flex>
        )}
      </Flex>
    </>
  );
};
