import {Rating} from '@mui/material';
import {defaultPrice, defaultRating} from '@/shared/const/product.const';
import {brandsOptions, sortOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';
import {GetProductsQuantityByCategories} from '@/shared/types/product';
import {getCategoriesOptions} from './helpers';

const sortFilterOptions: FormOption<FormVariantsEnum>[] = [
  {
    id: 'sort',
    variant: FormVariantsEnum.Select,
    name: 'Sort by ',
    options: sortOptions,
    styleVariant: 'withLabelInside'
  }
];

const filterOptions = ({
  categoriesQuantity = [],
  isMobile
}: {
  categoriesQuantity: GetProductsQuantityByCategories[];
  isMobile: boolean;
}): FormOption<FormVariantsEnum>[] => {
  return [
    ...(!isMobile ? [] : sortFilterOptions),
    {
      id: 'categories',
      variant: FormVariantsEnum.CheckboxGroup,
      name: 'Categories',
      options: getCategoriesOptions({categoriesQuantity}),
      showCheckbox: false
    },
    {
      id: 'brands',
      variant: FormVariantsEnum.CheckboxGroup,
      name: 'Brand',
      options: brandsOptions
    },
    {
      id: 'rating',
      variant: FormVariantsEnum.Slider,
      name: 'Rating',
      min: defaultRating[0],
      max: defaultRating[1],
      component: Rating
    },
    {id: 'prices', variant: FormVariantsEnum.SliderWithInput, name: 'Price', max: defaultPrice[1]}
  ];
};

export {filterOptions, sortFilterOptions};
