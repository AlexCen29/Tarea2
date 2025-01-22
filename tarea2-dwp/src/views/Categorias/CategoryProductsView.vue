<template>
  <div class="category-products-container">
    <h1>{{ categoryName }}</h1>
    <section class="products">
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="product-card"
      >
        <!-- <img :src="product.image" :alt="product.name" /> -->
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <router-link
          :to="{ name: 'product-details', params: { categoryName: categoryName, productName: product.name } }"
          class="details-link"
        >
          Ver detalles
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CategoryProductsView",
  props: ["categoryName"],
  data() {
    return {
      // Productos organizados por categoría
      productsByCategory: {
        Electrónicos: [
          { name: "XBOX Series X", description: "Consola de última generación", image: "https://via.placeholder.com/150",},
          { name: "PlayStation 5", description: "Consola con juegos exclusivos", image: "https://via.placeholder.com/150" },
          { name: "Switch 2", description: "La consola portátil definitiva", image: "https://via.placeholder.com/150" },
        ],
        Hogar: [
          { name: "Aspiradora", description: "Limpia tu hogar fácilmente", image: "https://via.placeholder.com/150" },
          { name: "Refrigerador", description: "Conserva tus alimentos", image: "https://via.placeholder.com/150" },
        ],
        Deportes: [
          { name: "Balón de fútbol", description: "Ideal para entrenamientos", image: "https://via.placeholder.com/150" },
          { name: "Bicicleta", description: "Perfecta para aventuras", image: "https://via.placeholder.com/150" },
        ],
        Moda: [
          { name: "Camisa", description: "Elegancia y comodidad", image: "https://via.placeholder.com/150" },
          { name: "Zapatos", description: "Ideales para cualquier ocasión", image: "https://via.placeholder.com/150" },
        ],
      },
    };
  },
  computed: {
    filteredProducts() {
      // Filtrar los productos según la categoría seleccionada
      return this.productsByCategory[this.categoryName] || [];
    },
  },
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}

.details-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

.details-link:hover {
  text-decoration: underline;
}
</style>
