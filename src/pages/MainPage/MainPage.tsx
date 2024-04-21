import {ReactElement} from 'react';
import {ProductI} from '@/shared/types/product';
import {List, Pagination, ProductCard, ProductCardSkeleton, StickyContentLayout} from '@/shared/ui';

const products: ProductI[] = [
  {
    _id: '1',
    title: 'Product',
    img: [
      'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    ],
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
  },
  {
    _id: '2',
    title: 'Product',
    img: [
      'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    ],
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
  },
  {
    _id: '3',
    title: 'Product',
    img: [
      'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    ],
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
  },
  {
    _id: '4',
    title: 'Product',
    img: [
      'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    ],
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
  },
  {
    _id: '5',
    title: 'Product',
    img: [
      'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    ],
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
  }
];

const MainPage = (): ReactElement => {
  return (
    <>
      <StickyContentLayout
        left={
          <div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
            <div>Filter</div>
          </div>
        }
        content={
          <List<ProductI>
            items={products}
            renderItem={ProductCard}
            isLoading={false}
            skeleton={<ProductCardSkeleton />}
            skeletonLength={5}
          />
        }
        bottom={<Pagination total={products.length} />}
      />
    </>
  );
};

export default MainPage;
