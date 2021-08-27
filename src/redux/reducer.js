import initialState from "./initialState";
import { FETCH_LIST } from "./action";

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {
        ...state,
        productList: action.payload,
      };

    default:
      return state;
  }
};

export default shoppingReducer;
