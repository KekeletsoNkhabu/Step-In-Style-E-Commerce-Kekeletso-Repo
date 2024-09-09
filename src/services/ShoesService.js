import axios from "axios";

// Base URL for your API
axios.defaults.baseURL = "http://localhost:8080"; // Adjust if needed

// Save a new product
export const saveProduct = async (product) => {
  try {
    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("productDescription", product.productDescription);
    formData.append("productColor", product.productColor);
    formData.append("productSize", product.productSize);
    formData.append("productPrice", product.productPrice);
    formData.append("category", product.categoryId);
    formData.append("brand", product.brandId);

    if (product.photo) {
      formData.append("photo", product.photo);
    }

    const response = await axios.post("/products/save", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error saving product:", error);
    throw error;
  }
};

// Get a product by ID
export const getProductById = (id) => {
  return axios
    .get(`/products/read/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching product:", error);
      throw error;
    });
};

// Update an existing product
export const updateProduct = (product) => {
  return axios
    .put("/products/update", product)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating product:", error);
      throw error;
    });
};

// Delete a product by ID
export const deleteProduct = (id) => {
  return axios
    .delete(`/products/delete/${id}`)
    .then((response) => response.status === 200)
    .catch((error) => {
      console.error("Error deleting product:", error);
      throw error;
    });
};

// Get all products
export const getAllProducts = () => {
  return axios
    .get("/products/getAll")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching all products:", error);
      throw error;
    });
};

// Get products by brand name
export const getProductsByBrandName = (brandName) => {
  return axios
    .get("/products/getByBrandName", { params: { brandName } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching products by brand name:", error);
      throw error;
    });
};

// Get products by name
export const getProductsByName = (name) => {
  return axios
    .get("/products/getByName", { params: { name } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching products by name:", error);
      throw error;
    });
};

// Get products by category name
export const getByCategoryName = (categoryName) => {
  return axios
    .get("/products/getByCategoryName", { params: { categoryName } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching products by category name:", error);
      throw error;
    });
};

// Count total products
export const countProducts = () => {
  return axios
    .get("/products/count")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error counting products:", error);
      throw error;
    });
};

// Get products by category ID
export const getProductsByCategoryId = (categoryId) => {
  return axios
    .get("/products/findByCategoryId", { params: { categoryId } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching products by category ID:", error);
      throw error;
    });
};
