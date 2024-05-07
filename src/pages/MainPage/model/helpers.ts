import {categoriesOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
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
