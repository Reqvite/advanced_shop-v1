import {categoriesOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {ProductFilterModel} from '@/shared/models/productFilterModel';
import {GetProductsQuantityByCategories} from '@/shared/types/product';

export const getCategoriesOptions = ({
  categoriesQuantity = []
}: {
  categoriesQuantity: GetProductsQuantityByCategories[];
}) => {
  const categoryOptions = categoriesOptions?.map((category) => {
    const matchedQuantity = categoriesQuantity?.find((item) => item._id === Number(category._id));

    return {
      ...category,
      quantity: matchedQuantity?.quantity
    };
  });
  return categoryOptions;
};

export const getFilterDefaultValues = ({
  defaultValues,
  isMobile
}: {
  defaultValues: ProductFilterModel;
  isMobile: boolean;
}) => {
  if (isMobile) {
    return defaultValues;
  } else {
    return Object.fromEntries(Object.entries(defaultValues).filter(([key]) => key !== 'sort'));
  }
};
