import {yellowSliderStyles} from '@/app/theme/styles';
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
  minPrice,
  maxPrice,
  categoriesQuantity = []
}: {
  minPrice: number;
  maxPrice: number;
  categoriesQuantity: GetProductsQuantityByCategories[];
}): FormOption<FormVariantsEnum>[] => {
  return [
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
      sx: yellowSliderStyles
    },
    {
      id: 'prices',
      variant: FormVariantsEnum.SliderWithInput,
      name: 'Price',
      max: maxPrice || defaultPrice[1],
      min: minPrice || defaultPrice[0]
    }
  ];
};

export {filterOptions, sortFilterOptions};
