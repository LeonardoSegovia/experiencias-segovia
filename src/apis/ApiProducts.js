import axios from "axios";

const apiProductsUrl = process.env.REACT_APP_API_PRODUCTS_URL;

const getProducts = () => {
  return axios.get(apiProductsUrl);
};

const getProduct = (id) => {
  return axios.get(`${apiProductsUrl}/${id}`);
};

export const ApiProducts = {
  getProducts,
  getProduct,
};
