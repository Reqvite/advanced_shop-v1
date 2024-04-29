import {CategoriesEnum} from '@/shared/enums/categories.enum';
import {TagsEnum} from '@/shared/enums/tags.enum';

export const enumLabelResolver = {
  tag: {
    [TagsEnum.Dogs]: 'Dogs',
    [TagsEnum.Cats]: 'Cats',
    [TagsEnum.Birds]: 'Birds',
    [TagsEnum.Small_Pets]: 'Small Pets',
    [TagsEnum.Dry_Food]: 'Dry Food',
    [TagsEnum.Wet_Food]: 'Wet Food',
    [TagsEnum.Cages]: 'Cages',
    [TagsEnum.Toys]: 'Toys',
    [TagsEnum.Sweet_treats]: 'Sweet Treats',
    [TagsEnum.Accessories]: 'Accessories',
    [TagsEnum.Aquariums]: 'Aquariums'
  },
  categories: {
    [CategoriesEnum.Dog]: 'Dogs',
    [CategoriesEnum.Cat]: 'Cats',
    [CategoriesEnum.Bird]: 'Birds',
    [CategoriesEnum.Small_Pet]: 'Small Pets',
    [CategoriesEnum.Aquatic]: 'Dry Food'
  }
};
