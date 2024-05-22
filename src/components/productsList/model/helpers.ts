import {categoriesOptions} from '@/shared/lib/helpers/enumLabelResolver/options';
import {ProductFilterModel} from '@/shared/models/productFilterModel';
import {LabelOptionsI} from '@/shared/types/options';
import {GetProductsQuantityByCategories} from '@/shared/types/product';

type ProductFilterModelWithoutPageAndSort = Omit<ProductFilterModel, 'sort' | 'page'>;
type DefaultValuesModel = ProductFilterModelWithoutPageAndSort & {
  sort?: number;
  page?: number;
};

export const getCategoriesOptions = ({
  categoriesQuantity = []
}: {
  categoriesQuantity: GetProductsQuantityByCategories[];
}): LabelOptionsI[] => {
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
  defaultValues
}: {
  defaultValues: ProductFilterModel;
}): ProductFilterModelWithoutPageAndSort => {
  const defaultValuesCopy: DefaultValuesModel = {...defaultValues};
  delete defaultValuesCopy['sort'];
  delete defaultValuesCopy['page'];
  return defaultValuesCopy;
};
