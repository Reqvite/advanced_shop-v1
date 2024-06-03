import {Card} from '@mui/material';
import {ReactElement} from 'react';
import {formateDate} from '@/shared/lib/helpers';
import {LabelOptionsI} from '@/shared/types/options';
import {OrderI} from '@/shared/types/order';
import {Title} from '../base/Title';

type Props = OrderI;

const getBillingInfo = (billingInfo: LabelOptionsI[]): string =>
  billingInfo
    .map((el) => el.value)
    .join(', ')
    .slice(0, -2);

export const OrderCard = ({_id, createdAt, billingInfo}: Props): ReactElement => {
  const deliveryInformation = getBillingInfo(billingInfo);

  return (
    <Card sx={{width: '100%', padding: 3, maxWidth: 1000}}>
      <Title
        titleVariant="h5"
        title={`Order № ${_id}, ${formateDate(createdAt)}`}
        description={`Delivery information: ${deliveryInformation}.`}
      />
    </Card>
  );
};
