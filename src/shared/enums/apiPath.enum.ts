enum ApiPathEnum {
  AUTH = '/auth',
  PRODUCTS = '/products',
  CART = '/cart',
  REVIEWS = '/reviews',
  STRIPE = '/stripe'
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

const CartApiPath = {
  COMPLETE: '/complete',
  ORDERS: '/orders',
  CREATE_CHECKOUT_SESSION: '/create-checkout-session'
};

export {ApiPathEnum, CartApiPath, ProductsApiPath, UsersApiPath};
