import { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";

export const ProductState = ({ children }) => {
  // initial Stated
  const initialState = {
    products: [],
    selectedProducts: null,
    selectedProductById: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const postProduct = async (data) => {
    const res = await axios.post("http://localhost:4000/api/products/", data);
    dispatch({
      type: "POST_PRODUCT",
      payload: res.data,
    });
  };

  const getProduct = async () => {
    const res = await axios.get("http://localhost:4000/api/products/");
    dispatch({
      type: "GET_PRODUCT",
      payload: res.data,
    });
  };

  const getProductById = async (id) => {
    const res = await axios.get(`http://localhost:4000/api/products/${id}`);
    dispatch({
      type: "GET_PRODUCT_BY_ID",
      payload: res.data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        selectedProducts: state.selectedProducts,
        selectedProductById: state.selectedProductById,
        getProduct,
        getProductById,
        postProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
