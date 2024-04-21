import {Stack, Typography} from '@mui/material';
import {ProductI} from '@/shared/types/product';
import {Flex} from '../base/Flex';
import {Button} from '../button/Button';
import {ImageGallery} from '../image/ImageGallery';
import {CharacteristicList} from './ui/CharacteristicList';
import {PriceText} from './ui/PriceText';
import {ProductHeading} from './ui/ProductHeading';

type Props = ProductI;

export const ProductDetails = ({
  rating = 0,
  title,
  description,
  characteristics,
  price,
  discount,
  img
}: Props) => {
  return (
    <Flex gap={4}>
      <Stack gap={1} width="50%">
        Tags
        <ImageGallery images={img} />
      </Stack>
      <Stack gap={4} width="50%">
        <ProductHeading title={title} rating={rating} />
        <Typography>{description}</Typography>
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
          <Flex gap={2}>
            <Button>Quantity</Button>
            <Button>Add to cart</Button>
          </Flex>
        </Flex>
        <Button>Add to wishlist</Button>
      </Stack>
    </Flex>
  );
};
