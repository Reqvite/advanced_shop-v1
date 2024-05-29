import CloseIcon from '@mui/icons-material/Close';
import {Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
  getRouteProductDetailsReviewsTab,
  getRouteProductDetailsTab
} from '@/app/providers/AppRouter/routeConfig';
import {grey} from '@/app/theme/theme';
import {tagOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {UseCartAndWishlistActionsType} from '@/shared/lib/hooks/useCartAndWishlistActions.hook';
import {maxQuantitySchema} from '@/shared/lib/yup/maxQuantity.schema';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {Button} from '../button';
import {AddToCartButton} from '../button/AddToCartButton';
import {WishlistButton} from '../button/WishlistButton';
import {Chip} from '../chip/Chip';
import {Form} from '../form';
import {ImageGallery} from '../imageGallery/ImageGallery';
import {List} from '../list/List';
import {Tabs} from '../tabs/Tabs';
import {cartProductCardOptions} from './CartProductCard/option';
import {CharacteristicList} from './ui/CharacteristicList';
import {PriceText} from './ui/PriceText';
import {ProductHeading} from './ui/ProductHeading';
import {TabsRouter} from './ui/tabs/ProductTabsRouter';

type Props = ProductI & {
  useActions: UseCartAndWishlistActionsType;
};

const tabOptions = [
  {label: 'Description', value: getRouteProductDetailsTab()},
  {label: 'Reviews', value: getRouteProductDetailsReviewsTab()},
  {label: 'Questions', value: 'questions'}
];

export const ProductDetails = ({
  _id,
  rating = 0,
  title,
  description,
  characteristics,
  price,
  discount,
  images,
  tags,
  quantity,
  useActions
}: Props): ReactElement => {
  const auth = useAuth();
  const [product] = auth?.user?.cart?.filter((item) => item._id === _id) || [];
  const {
    onConfirmDeleteItem,
    onClickWishlist,
    onClickAddToCart,
    onUpdateCartQuantity,
    updateWishlistIsLoading,
    addToCartIsLoading,
    updateCartIsLoading,
    deleteIsLoading
  } = useActions({quantity: product?.quantity, title});
  const navigate = useNavigate();
  const isMobile = useMediaQuery('md');
  const currentTab = useLocation().pathname.split('/')[3];

  const resolvedTags = tagOptions.filter(({value}) => tags?.includes(value));

  const options = cartProductCardOptions({
    maxQuantity: quantity
  });

  const onChangeTab = (route: string): void => {
    navigate(route);
  };

  const onSubmit = (data: {quantity: number}): void => {
    if (product) {
      onUpdateCartQuantity({_id, ...data});
    } else {
      onClickAddToCart({_id, ...data});
    }
  };

  return (
    <Flex gap={4} flexDirection={isMobile ? 'column' : 'row'}>
      <Stack gap={1} width={isMobile ? '100%' : '40%'}>
        {tags && (
          <List
            row
            items={resolvedTags}
            renderItem={Chip}
            sx={{display: 'flex', justifyContent: 'flex-start', gap: 1}}
            itemStyle={{width: 'auto', p: 0}}
          />
        )}
        <ImageGallery images={images} />
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
            border: `1px solid ${theme.palette.grey[100]}`,
            padding: 2
          })}
        >
          <PriceText price={price} discount={discount} />
          <Flex gap={2} alignItems="flex-start">
            {product && (
              <Button
                variant="text"
                LeftAddon={CloseIcon}
                iconSize="small"
                iconColor="black"
                sx={{color: grey[200]}}
                onClick={() => onConfirmDeleteItem(_id)}
                isLoading={deleteIsLoading}
              >
                Remove from cart
              </Button>
            )}
            <Form
              sx={{flexDirection: 'row'}}
              options={options}
              values={{
                quantity: product?.quantity || 1
              }}
              formValidationSchema={maxQuantitySchema({max: quantity})}
              initialTrigger
              onSubmit={onSubmit}
              ButtonComponent={product ? undefined : AddToCartButton}
              buttonLabel={product ? 'Update cart' : undefined}
              isLoading={addToCartIsLoading || updateCartIsLoading}
            />
          </Flex>
        </Flex>
        <WishlistButton
          isLiked={auth.user?.wishlist.includes(_id)}
          sx={{maxWidth: 166}}
          isLoading={updateWishlistIsLoading}
          onClick={() => onClickWishlist({_id})}
        />
        <Tabs options={tabOptions} onChange={onChangeTab} defaultValue={currentTab} />
        <TabsRouter description={description} />
      </Stack>
    </Flex>
  );
};
