import {enumLabelResolver} from './enumLabelResolver';

const tagOptions = Object.entries(enumLabelResolver.tag).map(([value, label]) => ({
  label,
  value: Number(value),
  _id: value
}));

const categoriesOptions = Object.entries(enumLabelResolver.categories).map(([value, label]) => ({
  label,
  value: Number(value),
  _id: value
}));

const brandsOptions = Object.entries(enumLabelResolver.brands).map(([value, label]) => ({
  label,
  value: Number(value),
  _id: value
}));

export {brandsOptions, categoriesOptions, tagOptions};
