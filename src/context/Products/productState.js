import { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";

import { ENDPOINT } from "../types";

export const ProductState = ({ children }) => {
  //

  // initial Stated
  const initialState = {
    products: [],
    selectedProductById: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const postProduct = async (data) => {
    const res = await axios.post(ENDPOINT, data);
    dispatch({
      type: "POST_PRODUCT",
      payload: res.data,
    });
  };

  const getProduct = async () => {
    const res = await axios.get(ENDPOINT);
    dispatch({
      type: "GET_PRODUCT",
      payload: res.data,
    });
  };

  const getProductById = async (id) => {
    const res = await axios.get(`${ENDPOINT}/${id}`);
    dispatch({
      type: "GET_PRODUCT_BY_ID",
      payload: res.data,
    });
  };

  const deleteProductById = async (id) => {
    const res = await axios.delete(`${ENDPOINT}/${id}`);
    dispatch({
      ...state,
      payload: res.data,
    });
  };

  const putProductById = async (id, data) => {
    console.log(id, data);
    const res = await axios.put(`${ENDPOINT}/${id}`, data);
    dispatch({
      ...state,
      payload: res.data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        selectedProductById: state.selectedProductById,
        getProduct,
        getProductById,
        postProduct,
        deleteProductById,
        putProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
