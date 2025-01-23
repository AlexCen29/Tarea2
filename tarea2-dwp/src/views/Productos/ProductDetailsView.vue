<template>
  <div class="product-details-container">
    <Breadcrumbs :categoryName="categoryName" :productName="productName" />
    <h1>Detalles de {{ productName }}</h1>
    <div class="product-details-card">
      <img :src="product.image" :alt="product.name" />
      <div class="details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p><strong>Precio:</strong> ${{ product.price }}</p>
        <button class="add-to-cart" @click="addToCart">Agregar al carrito</button>
      </div>
    </div>
    <!-- <router-link :to="{ name: 'category-products', params: { categoryName: categoryName } }" class="back-link">
      &larr; Volver a la categoría
    </router-link> -->
  </div>
</template>

<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";

defineProps({
  categoryName: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
});

import { ref } from "vue";


const product = ref(
  window.history.state || {
    name: "Producto no encontrado",
    description: "Descripción no disponible",
    image: "https://via.placeholder.com/150",
    price: 0
  }
);

function addToCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product.value);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.value.name} se agregó al carrito.`);
}
</script>

<style scoped>
.product-details-container {
  padding: 20px;
}

.product-details-card {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.product-details-card img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.details h2 {
  margin: 0;
  font-size: 2rem;
}

.details p {
  margin: 10px 0 0;
  color: #555;
}

.add-to-cart {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #369e6c;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
