<template>
  <section class="categories-section">
    <h2 class="section-title">Shop by category</h2>
    <div class="category-container">
      <div class="category-item" v-for="category in categories" :key="category.categoryId">
        <div class="category-image"></div>
        <h3 class="category-title">{{ category.categoryName }}</h3>
        <!-- Navigate to a new route when the button is clicked -->
        <button class="shop-now-btn" @click="goToCategoryPage(category.categoryId)">
          Shop Now
        </button>
      </div>
    </div>
  </section>
</template>


<script>
import { getAllCategories } from "@/services/categoryService";

export default {
  name: "CategoriesSection",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      getAllCategories()
        .then((data) => {
          this.categories = data; // Assuming data is an array of categories
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    goToCategoryPage(categoryId) {
      // Navigate to the shoes page based on the selected category id
      this.$router.push({ name: "CategoryShoes", params: { categoryId } });
    },
  },
};
</script>

<style scoped>
.categories-section {
  text-align: center;
  margin: 40px 0;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.category-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.category-item {
  position: relative;
  width: 45%;
  margin-bottom: 20px;
}

.category-image {
  width: 100%;
  height: 200px;
  background-image: url('@/assets/images/chelsea boot.jfif');
  background-size: cover;
  background-position: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.category-title {
  font-size: 1.5rem;
  margin: 10px 0;
}

.shop-now-btn {
  background-color: white;
  border: 2px solid black;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.shop-now-btn:hover {
  background-color: black;
  color: white;
}

@media (max-width: 768px) {
  .category-item {
    width: 100%;
  }
}
</style>
