enum ApiPathEnum {
  AUTH = '/auth',
  PRODUCTS = '/products'
}

enum UsersApiPath {
  LOG_IN = 'auth/login',
  LOG_OUT = 'auth/logout',
  REGISTER = 'auth/register',
  CURRENT = 'auth/current',
  REFRESH = 'auth/refresh'
}

enum ProductsApiPath {
  BY_ID = '/:id',
  EMPTY = '/',
  PRODUCTS_QUANTITY = '/categories/quantity'
}

export {ApiPathEnum, ProductsApiPath, UsersApiPath};
