import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SET_USER_DATA,
} from '../Constant/Constants';

const initialState = [];
export const AddCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // const Exititem = state.find(item => item.name === action.data.name);
      // if (Exititem) {
      //   return state;
      // }
      return [...state, action.data];

    case REMOVE_TO_CART:
      const updateData = state.filter(item => {
        return item.name !== action.data;
      });
      return [...updateData];
    case SET_USER_DATA:
      return [action.data];

    default:
      return state;
  }
};
