import {ADD_TO_CART, REMOVE_TO_CART, USER_LIST} from '../Constant/Constants';
export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeToCart(item) {
  return {
    type: REMOVE_TO_CART,
    data: item,
  };
}
export function getUserList(item) {
  return {
    type: USER_LIST,
    data: item,
  };
}
