import {ReactElement} from 'react';
import {MediumProductCard} from '@/shared/ui';

const product = {
  _id: '1',
  title: 'Product',
  description: 'Some Decription',
  price: 132.32,
  discount: 43,
  rating: 2,
  characteristics: [
    {label: 'Color', value: 'Redda dsadasds'},
    {label: 'Size', value: 'Large'},
    {label: 'Material', value: 'Cotton'},
    {label: 'Weight', value: '1.5 lbs'},
    {label: 'Dimensions', value: '10" x 12"'},
    {label: 'Country of Origin', value: 'USA'},
    {label: 'Waterproof', value: 'Yes'},
    {label: 'Style', value: 'Casual'},
    {label: 'Battery Life', value: '8 hours'},
    {label: 'Warranty', value: '1 year'}
  ]
};

const MainPage = (): ReactElement => {
  return (
    <>
      <MediumProductCard {...product} />
    </>
  );
};

export default MainPage;
