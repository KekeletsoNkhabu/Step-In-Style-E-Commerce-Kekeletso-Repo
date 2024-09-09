import axios from "axios";

// Base URL for your API
axios.defaults.baseURL = "http://localhost:8080"; // Adjust if needed

export const saveCategory = (category) => {
  return axios
    .post("/sneakerStash/category/save", category)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error saving category:", error);
      throw error;
    });
};

export const getCategoryById = (id) => {
  return axios
    .get(`/sneakerStash/category/read/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching category:", error);
      throw error;
    });
};

export const updateCategory = (category) => {
  return axios
    .put("/sneakerStash/category/update", category)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating category:", error);
      throw error;
    });
};

export const deleteCategory = (id) => {
  return axios
    .delete(`/sneakerStash/category/delete/${id}`)
    .then((response) => response.status === 200)
    .catch((error) => {
      console.error("Error deleting category:", error);
      throw error;
    });
};

export const getAllCategories = () => {
  return axios
    .get("/sneakerStash/category/getAll")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching all categories:", error);
      throw error;
    });
};
