import axios from "axios";

// Base URL for your API
axios.defaults.baseURL = "http://localhost:8080"; // Adjust if needed

// Save a new user
export function saveUser(user) {
  return axios
    .post("/sneakerStash/users/save", user)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error saving user:", error);
      throw error;
    });
}

// Read a user by ID
export function readUser(id) {
  return axios
    .get(`/sneakerStash/users/read/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error reading user with ID ${id}:`, error);
      throw error;
    });
}

// Update an existing user
export function updateUser(user) {
  return axios
    .put("/sneakerStash/users/update", user)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating user:", error);
      throw error;
    });
}

// Delete a user by ID
export function deleteUser(id) {
  return axios
    .delete(`/sneakerStash/users/delete/${id}`)
    .then((response) => response.status === 200)
    .catch((error) => {
      console.error(`Error deleting user with ID ${id}:`, error);
      throw error;
    });
}

// Get all users
export function getAllUsers() {
  return axios
    .get("/sneakerStash/users/getAll")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching all users:", error);
      throw error;
    });
}

// Get all customers
export function getCustomers() {
  return axios
    .get("/sneakerStash/users/getCustomers")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching customers:", error);
      throw error;
    });
}

// Get the count of users
export function countUsers() {
  return axios
    .get("/sneakerStash/users/count")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching user count:", error);
      throw error;
    });
}

// Get the count of customers
export function countCustomers() {
  return axios
    .get("/sneakerStash/users/count-customers")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching customer count:", error);
      throw error;
    });
}

// Find a user by email
export function getUserByEmail(email) {
  return axios
    .get(`/sneakerStash/users/findByEmail?email=${encodeURIComponent(email)}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching user by email ${email}:`, error);
      throw error;
    });
}

// Sign in a user
export function signIn(user) {
  const requestBody = {
    email: user.email,
    password: user.password,
  };
  console.log("Request Body:", requestBody);
  return axios
    .post("/sneakerStash/users/signin", JSON.stringify(requestBody), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error signing in user:", error);
      throw error;
    });
}
