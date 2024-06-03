import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Box, Card, IconButton, Stack} from '@mui/material';
import {motion} from 'framer-motion';
import {ReactElement, useState} from 'react';
import {formateDate} from '@/shared/lib/helpers';
import {LabelOptionsI} from '@/shared/types/options';
import {OrderI} from '@/shared/types/order';
import {Flex} from '../base/Flex';
import {Title} from '../base/Title';
import {OrderItem} from './OrderItem';

type Props = OrderI & {
  currency?: string;
};

const MotionBox = motion(Box);
const getBillingInfo = (billingInfo: LabelOptionsI[]): string =>
  billingInfo
    .map((el) => el.value)
    .join(', ')
    .slice(0, -2);

export const OrderCard = ({
  _id,
  createdAt,
  products,
  totalPrice,
  billingInfo,
  currency = 'USD'
}: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const deliveryInformation = getBillingInfo(billingInfo);

  const onOpenDetailsClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Card sx={{width: '100%', padding: 3, maxWidth: 1000}}>
      <Flex gap={2} justifyContent="space-between" alignItems="center">
        <Stack>
          <Title
            titleVariant="h5"
            title={`Order № ${_id}, ${formateDate(createdAt)}`}
            description="In delivery"
          />
        </Stack>
        <Flex width="100%" justifyContent="space-between">
          <Stack alignItems="center">
            <Title titleVariant="h5" title="Total" description={`${totalPrice} ${currency}`} />
          </Stack>
        </Flex>
        <IconButton onClick={onOpenDetailsClick}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Flex>
      <MotionBox
        animate={{height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0}}
        transition={{duration: 0.5}}
        style={{overflow: 'hidden'}}
      >
        {isOpen && (
          <Stack spacing={2} mt={2}>
            <Title
              titleVariant="h6"
              title="Delivery information"
              description={deliveryInformation}
            />
            <Title
              titleVariant="h6"
              title="Products list"
              description={`${products.length} items`}
            />
            <Stack spacing={1}>
              {products.map((product) => (
                <OrderItem key={product._id} {...product} />
              ))}
            </Stack>
          </Stack>
        )}
      </MotionBox>
    </Card>
  );
};
