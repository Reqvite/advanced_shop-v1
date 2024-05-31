import {Card, Stack} from '@mui/material';
import {ReactElement} from 'react';
import {formateDate} from '@/shared/lib/helpers';
import {OrderI} from '@/shared/types/order';
import {Flex} from '../base/Flex';
import {Title} from '../base/Title';
import {OrderImg} from './OrderImg';

type Props = OrderI & {
  currency?: string;
};

export const OrderCard = ({
  _id,
  createdAt,
  products,
  totalPrice,
  currency = 'USD'
}: Props): ReactElement => {
  // const deliveryInformation = billingInfo
  //   .map((el) => el.value)
  //   .join(', ')
  //   .slice(0, -2);

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
          <Flex gap={1}>
            {products.map((product) => (
              <OrderImg {...product} key={product._id} variant="small" />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
