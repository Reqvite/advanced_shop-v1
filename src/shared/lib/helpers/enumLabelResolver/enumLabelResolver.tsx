import {BrandsEnum} from '@/shared/enums/brands.enum';
import {CategoriesEnum} from '@/shared/enums/categories.enum';
import {SortByEnum} from '@/shared/enums/sortBy.enum';
import {TagsEnum} from '@/shared/enums/tags.enum';

export const enumLabelResolver = {
  sortBy: {
    [SortByEnum.Newest]: 'Newest',
    [SortByEnum.PRICE_LOW_TO_HIGH]: 'Price - Low to High',
    [SortByEnum.PRICE_HIGH_TO_LOW]: 'Price - High to Low',
    [SortByEnum.RATING_LOW_TO_HIGH]: 'Rating - Low to High',
    [SortByEnum.RATING_HIGH_TO_LOW]: 'Rating - High to Low'
  },
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
    [CategoriesEnum.All_Categories]: 'All categories',
    [CategoriesEnum.Dog]: 'Dogs',
    [CategoriesEnum.Cat]: 'Cats'
    // [CategoriesEnum.Bird]: 'Birds',
    // [CategoriesEnum.Small_Pet]: 'Small Pets',
    // [CategoriesEnum.Aquatic]: 'Aquatic'
  },
  brands: {
    [BrandsEnum.Savory]: 'Savory',
    [BrandsEnum.Brit_Care]: 'Brit Care',
    [BrandsEnum.Brit_Premium]: 'Brit Premium',
    [BrandsEnum.Pro_Plan]: 'Pro Plan',
    [BrandsEnum.Hills]: 'Hills',
    [BrandsEnum.Oven_Baked]: 'Oven-Baked',
    [BrandsEnum.Comfy]: 'Comfy',
    [BrandsEnum.Half_and_Half]: 'Half and Half',
    [BrandsEnum.Home_Food]: 'Home Food',
    [BrandsEnum.Trixie]: 'Trixie',
    [BrandsEnum.FURminator]: 'FURminator'
  }
};
