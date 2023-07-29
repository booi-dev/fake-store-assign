import axios from "axios";
// import

const baseURL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const apiURL = `${baseURL}`;
  const res = await axios.get(apiURL);

  const products = res.data;
  return products;
};

export const getCategories = async () => {
  const apiURL = `${baseURL}/categories`;
  const res = await axios.get(apiURL);

  const categories = res.data;
  return categories;
};

export const getCategoriedProducts = async (category: string) => {
  const apiURL = `${baseURL}/category/${category}`;
  const res = await axios.get(apiURL);

  const products = res.data;
  return products;
};
