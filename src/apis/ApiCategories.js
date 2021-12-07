import axios from "axios";

const apiCategoriesUrl = process.env.REACT_APP_API_CATEGORIES_URL;


const getCategories = () => {
    return axios.get(apiCategoriesUrl);
};

export const ApiCategories = {
  getCategories,
}
