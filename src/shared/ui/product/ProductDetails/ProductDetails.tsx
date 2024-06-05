import {Stack, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {productDetailsStyles} from '@/app/theme/styles.ts';
import {tagOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {useAuth, useMediaQuery} from '@/shared/lib/hooks';
import {UseCartActionsType} from '@/shared/lib/hooks/useCartActions.hook';
import {useWishlistActionsType} from '@/shared/lib/hooks/useWishlistActions.hook';
import {maxQuantitySchema} from '@/shared/lib/yup/maxQuantity.schema';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../../base/Flex.tsx';
import {AddToCartButton} from '../../button/AddToCartButton.tsx';
import {DeleteFromCartButton} from '../../button/DeleteButton.tsx';
import {WishlistButton} from '../../button/WishlistButton.tsx';
import {Chip} from '../../chip/Chip.tsx';
import {Form} from '../../form/index.ts';
import {ImageGallery} from '../../imageGallery/ImageGallery.tsx';
import {List} from '../../list/List.tsx';
import {Tabs} from '../../tabs/Tabs.tsx';
import {CharacteristicList} from '../base/CharacteristicList.tsx';
import {PriceText} from '../base/PriceText.tsx';
import {ProductHeading} from '../base/ProductHeading.tsx';
import {cartProductCardOptions} from '../CartProductCard/option.ts';
import {getCharacteristicsWithQuantity} from '../model/getCharacteristicsWithQuantity.ts';
import {getTabOptions} from '../model/getTabOptions.ts';
import {TabsRouter} from './tabs/ProductTabsRouter.tsx';

type Props = ProductI & {
  useCartActions: UseCartActionsType;
  useWishlistActions: useWishlistActionsType;
};

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
  reviewCount,
  useCartActions,
  useWishlistActions
}: Props): ReactElement => {
  const auth = useAuth();
  const [product] = auth?.user?.cart?.filter((item) => item._id === _id) || [];
  const {onClickWishlist, updateWishlistIsLoading} = useWishlistActions();
  const {
    invalidateProduct,
    onConfirmDeleteItem,
    onClickAddToCart,
    onUpdateCartQuantity,
    addToCartIsLoading,
    updateCartIsLoading
  } = useCartActions({quantity: product?.quantity, title});
  const navigate = useNavigate();
  const isMobile = useMediaQuery('md');
  const currentTab = useLocation().pathname.split('/')[3];
  const characteristicsWithQuantity = getCharacteristicsWithQuantity(characteristics, quantity);
  const resolvedTags = tagOptions.filter(({value}) => tags?.includes(value));
  const options = cartProductCardOptions({
    maxQuantity: quantity
  });
  const tabOptions = getTabOptions({reviewCount});

  const onChangeTab = (route: string): void => {
    navigate(route);
  };

  const onSubmit = (data: {quantity: number}): void => {
    if (product) {
      onUpdateCartQuantity({_id, ...data})
        .unwrap()
        .catch(() => invalidateProduct());
    } else {
      onClickAddToCart({_id, ...data})
        .unwrap()
        .catch(() => invalidateProduct());
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
          <CharacteristicList characteristics={characteristicsWithQuantity} maxListItems={4} />
          <CharacteristicList
            characteristics={characteristicsWithQuantity.slice(4, 8)}
            maxListItems={4}
          />
        </Flex>
        <Flex sx={productDetailsStyles.formBox}>
          <PriceText price={price} discount={discount} />
          <Flex gap={2} alignItems="flex-start">
            <Form
              sx={{flexDirection: 'row'}}
              options={options}
              values={{
                quantity: product?.quantity || 1
              }}
              formValidationSchema={maxQuantitySchema({max: quantity})}
              initialTrigger
              onSubmit={onSubmit}
              disabled={quantity === 0}
              ButtonComponent={product ? undefined : AddToCartButton}
              buttonLabel={product ? 'Update cart' : undefined}
              isLoading={addToCartIsLoading || updateCartIsLoading}
            />
            {product && <DeleteFromCartButton onClick={() => onConfirmDeleteItem(_id)} />}
          </Flex>
        </Flex>
        <WishlistButton
          isLiked={auth.user?.wishlist.includes(_id)}
          sx={{maxWidth: 166}}
          isLoading={updateWishlistIsLoading}
          onClick={() => onClickWishlist({_id})}
        />
        <Tabs options={tabOptions} onChange={onChangeTab} defaultValue={currentTab} />
        <TabsRouter description={description} id={_id} />
      </Stack>
    </Flex>
  );
};
