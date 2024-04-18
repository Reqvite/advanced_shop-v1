export const getFixedPrice = (price: number): number => {
  return parseFloat(price.toFixed(2));
};

export const getDiscountPrice = ({discount, price}: {discount: number; price: number}) => {
  return getFixedPrice((price * discount) / 100);
};
