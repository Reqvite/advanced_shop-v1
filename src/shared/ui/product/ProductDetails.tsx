import {Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
  getRouteProductDetailsReviewsTab,
  getRouteProductDetailsTab
} from '@/app/providers/AppRouter/routeConfig';
import {tagOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useMediaQuery} from '@/shared/lib/hooks';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {AddToCartButton} from '../button/AddToCartButton';
import {WishlistButton} from '../button/WishlistButton';
import {Chip} from '../chip/Chip';
import {Form} from '../form';
import {ImageGallery} from '../imageGallery/ImageGallery';
import {List} from '../list/List';
import {Tabs} from '../tabs/Tabs';
import {CharacteristicList} from './ui/CharacteristicList';
import {PriceText} from './ui/PriceText';
import {ProductHeading} from './ui/ProductHeading';
import {TabsRouter} from './ui/tabs/ProductTabsRouter';

type Props = ProductI;

const tabOptions = [
  {label: 'Description', value: getRouteProductDetailsTab()},
  {label: 'Reviews', value: getRouteProductDetailsReviewsTab()},
  {label: 'Questions', value: 'questions'}
];

const formOptions: FormOption<FormVariantsEnum>[] = [
  {id: 'quantity', variant: FormVariantsEnum.Quantity_Input}
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
  const isMobile = useMediaQuery('md');
  const currentTab = useLocation().pathname.split('/')[3];
  const resolvedTags = tagOptions.filter(({value}) => tags?.includes(value));
  const navigate = useNavigate();

  const onChangeTab = (route: string): void => {
    navigate(route);
  };

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <Flex gap={4} flexDirection={isMobile ? 'column' : 'row'}>
      <Stack gap={1} width={isMobile ? '100%' : '40%'}>
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
      <Stack gap={4} width={isMobile ? '100%' : '60%'}>
        <ProductHeading variant="medium" title={title} rating={rating} />
        <Typography>{description[0]?.value}</Typography>
        <Flex justifyContent="space-between" flexWrap="wrap" gap={1}>
          <CharacteristicList characteristics={characteristics} maxListItems={4} />
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
            <Form<{quantity: number}>
              sx={{flexDirection: 'row'}}
              options={formOptions}
              defaultValues={{quantity: 1}}
              onSubmit={onSubmit}
              ButtonComponent={AddToCartButton}
            />
          </Flex>
        </Flex>
        <WishlistButton />
        <Tabs options={tabOptions} onChange={onChangeTab} defaultValue={currentTab} />
        <TabsRouter description={description} />
      </Stack>
    </Flex>
  );
};
