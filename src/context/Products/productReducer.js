import {
  DELETE_PPRODUCT_BY_ID,
  EDIT_PRODUCT_BY_ID,
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
  POST_PRODUCT,
} from "../types";

const productReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case POST_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        selectedProductById: payload,
      };

    case DELETE_PPRODUCT_BY_ID:
      return {
        ...state,
        selectedProductById: payload,
      };

    case EDIT_PRODUCT_BY_ID:
      return {
        ...state,
        selectedProductById: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
