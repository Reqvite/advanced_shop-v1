import {yellowSliderStyles} from '@/app/theme/styles';
import {maxPrice, maxRating, minPrice, minRating} from '@/shared/const/product.const';
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
  minPriceFromApi = minPrice,
  maxPriceFromApi = maxPrice,
  categoriesQuantity = []
}: {
  minPriceFromApi?: number;
  maxPriceFromApi?: number;
  categoriesQuantity: GetProductsQuantityByCategories[];
}): FormOption<FormVariantsEnum>[] => {
  return [
    {
      id: 'categories',
      variant: FormVariantsEnum.CheckboxGroup,
      name: 'Categories',
      options: getCategoriesOptions({categoriesQuantity}),
      showCheckbox: false,
      withQuantity: true
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
      min: minRating,
      max: maxRating,
      sx: yellowSliderStyles
    },
    {
      id: 'prices',
      variant: FormVariantsEnum.SliderWithInput,
      name: 'Price',
      max: maxPriceFromApi,
      min: minPriceFromApi
    }
  ];
};

export {filterOptions, sortFilterOptions};
