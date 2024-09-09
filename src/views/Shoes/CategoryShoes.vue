<template>
    <div>
        <h1>Shoes in Category {{ categoryName }}</h1>
        <div class="products-container">
            <div v-for="product in products" :key="product.id" class="product-card">
                <img :src="product.photo" alt="Product Image" />
                <h2>{{ product.productName }}</h2>
                <p>{{ product.productPrice }}</p>
                <p>{{ product.productColor }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getByCategoryName } from "@/services/ShoesService"; // Import the service

export default {
    name: "CategoryShoesPage",
    props: ["categoryName"], // Using categoryName instead of categoryId
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.fetchProductsByCategory();
    },
    methods: {
        fetchProductsByCategory() {
            getByCategoryName(this.categoryName) // Fetch products using the category name
                .then((products) => {
                    this.products = products;
                })
                .catch((error) => {
                    console.error("Error fetching products by category name:", error);
                });
        },
    },
};
</script>

<style scoped>
.products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.product-card {
    width: 200px;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
}

.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}
</style>
