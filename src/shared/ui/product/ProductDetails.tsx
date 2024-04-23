import {Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import {ReactElement} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
  getRouteProductDetailsDetailsTab,
  getRouteProductDetailsReviewsTab
} from '@/app/providers/AppRouter/routeConfig';
import {tagOptions} from '@/shared/lib/helpers/enumLabelResolver/enumLabelResolver';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {AddToCartButton} from '../button/AddToCartButton';
import {Button} from '../button/Button';
import {WishlistButton} from '../button/WishlistButton';
import {Chip} from '../chip/Chip';
import {ImageGallery} from '../image/ImageGallery';
import {List} from '../list/List';
import {Tabs} from '../tabs/Tabs';
import {CharacteristicList} from './ui/CharacteristicList';
import {PriceText} from './ui/PriceText';
import {ProductHeading} from './ui/ProductHeading';
import {TabsRouter} from './ui/tabs/ProductTabsRouter';

type Props = ProductI;

const tabOptions = [
  {label: 'Description', value: getRouteProductDetailsDetailsTab()},
  {label: 'Reviews', value: getRouteProductDetailsReviewsTab()},
  {label: 'Questions', value: 'questions'}
];

export const ProductDetails = ({
  rating = 0,
  title,
  description,
  characteristics,
  price,
  discount,
  image,
  tags
}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const currentTab = useLocation().pathname.split('/')[3];
  const resolvedTags = tagOptions.filter(({value}) => tags?.includes(value));
  const navigate = useNavigate();

  const onChangeTab = (route: string): void => {
    navigate(route);
  };

  return (
    <Flex gap={4} flexDirection={isMobile ? 'column' : 'row'}>
      <Stack gap={1} width={isMobile ? '100%' : '50%'}>
        {tags && (
          <List
            row
            items={resolvedTags}
            renderItem={Chip}
            sx={{display: 'flex', gap: 1}}
            itemStyle={{width: 'auto', p: 0}}
          />
        )}
        <ImageGallery images={image} />
      </Stack>
      <Stack gap={4} width={isMobile ? '100%' : '50%'}>
        <ProductHeading title={title} rating={rating} />
        <Typography>{description[0]?.value}</Typography>
        <Flex justifyContent="space-between">
          <CharacteristicList characteristics={characteristics.slice(0, 4)} maxListItems={4} />
          <CharacteristicList characteristics={characteristics.slice(4, 8)} maxListItems={4} />
        </Flex>
        <Flex
          sx={(theme) => ({
            justifyContent: 'space-between',
            borderRadius: 1,
            border: `2px solid ${theme.palette.grey[100]}`,
            padding: 2
          })}
        >
          <PriceText price={price} discount={discount} />
          <Flex gap={2} alignItems="center">
            <Button>Quantity</Button>
            <AddToCartButton />
          </Flex>
        </Flex>
        <WishlistButton />
        <Tabs options={tabOptions} onChange={onChangeTab} defaultValue={currentTab} />
        <TabsRouter description={description} />
      </Stack>
    </Flex>
  );
};
