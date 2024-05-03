import {Rating} from '@mui/material';
import {defaultPrice, defaultRating} from '@/shared/const/product.const';
import {brandsOptions, sortOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {FormOption, FormVariantsEnum} from '@/shared/types/form';

const options: FormOption<FormVariantsEnum>[] = [
  {
    id: 'rating',
    variant: FormVariantsEnum.Slider,
    name: 'Rating',
    min: defaultRating[0],
    max: defaultRating[1],
    component: Rating
  },
  {id: 'price', variant: FormVariantsEnum.SliderWithInput, name: 'Price', max: defaultPrice[1]},
  {
    id: 'brand',
    variant: FormVariantsEnum.CheckboxGroup,
    name: 'Brand',
    options: brandsOptions
  }
];

const sortFilterOptions: FormOption<FormVariantsEnum>[] = [
  {
    id: 'sort',
    variant: FormVariantsEnum.Select,
    name: 'Sort by ',
    options: sortOptions,
    styleVariant: 'withLabelInside'
  }
];

const filterAndSortOptions = [...sortFilterOptions, ...options];

export {filterAndSortOptions, options, sortFilterOptions};
