import {enumLabelResolver} from './enumLabelResolver';

interface Option {
  label: string;
  value: number;
  _id: string;
}

const tagOptions: Option[] = Object.entries(enumLabelResolver.tag).map(([value, label]) => ({
  label,
  value: Number(value),
  _id: value
}));

const categoriesOptions: Option[] = Object.entries(enumLabelResolver.categories).map(
  ([value, label]) => ({
    label,
    value: Number(value),
    _id: value
  })
);

const brandsOptions: Option[] = Object.entries(enumLabelResolver.brands).map(([value, label]) => ({
  label,
  value: Number(value),
  _id: value
}));

export {brandsOptions, categoriesOptions, tagOptions};
