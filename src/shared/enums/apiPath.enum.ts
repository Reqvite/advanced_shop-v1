enum ApiPathEnum {
  AUTH = '/auth',
  PRODUCTS = '/products',
  CART = '/cart'
}

enum UsersApiPath {
  LOG_IN = 'auth/login',
  LOG_OUT = 'auth/logout',
  REGISTER = 'auth/register',
  CURRENT = 'auth/current',
  REFRESH = 'auth/refresh'
}

const ProductsApiPath = {
  BY_ID: '/:id',
  EMPTY: '/',
  PRODUCTS_QUANTITY: '/categories/quantity',
  WISHLIST: '/wishlist'
};

export {ApiPathEnum, ProductsApiPath, UsersApiPath};
