import {Option, TabOptionsI} from '@/shared/types/options';
import {enumLabelResolver} from './enumLabelResolver';

const sortOptions: Option[] = Object.entries(enumLabelResolver.sortBy).map(([value, label]) => ({
  label,
  value: Number(value),
  _id: value
}));

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

const timelineOptions: TabOptionsI[] = Object.entries(enumLabelResolver.timeline).map(
  ([value, label]) => ({
    label,
    value,
    _id: value
  })
);

export {brandsOptions, categoriesOptions, sortOptions, tagOptions, timelineOptions};
