<template>
  <div class="category-products-container">
    <h1>{{ categoryName }}</h1>
    <section class="products">
      <div v-for="(product, index) in filteredProducts" :key="index" class="product-card-container">
        <div class="product-card">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <img :src="product.image" class="imagen">
        </div>
        <router-link :to="{
          name: 'product-details',
          params: {
            categoryName: categoryName,
            productName: product.name
          },
          state: product
        }" class="details-link">
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
      searchQuery: "",
      productsByCategory: {
        Electrónicos: [
          { name: "XBOX Series X", description: "Consola de última generación", image: "/images/xboxseriesx.jpg", price: 13399 },
          { name: "PlayStation 5", description: "Consola con juegos exclusivos", image: "/images/playstation5.jpg", price: 8990 },
          { name: "Switch 2", description: "La consola portátil definitiva", image: "/images/switch2.jpg", price: 7911 },
        ],
        Hogar: [
          { name: "Aspiradora", description: "Limpia tu hogar fácilmente", image: "/images/aspiradora.jpg", price: 4999 },
          { name: "Refrigerador", description: "Conserva tus alimentos", image: "/images/refrigerador.jpg", price: 10990 },
        ],
        Deportes: [
          { name: "Balón de fútbol", description: "Ideal para entrenamientos", image: "/images/fucho.jpg", price: 299 },
          { name: "Bicicleta", description: "Perfecta para aventuras", image: "/images/bicla.jpg", price: 599 },
        ],
        Moda: [
          { name: "Camisa", description: "Elegancia y comodidad", image: "/images/camisa.jpg", price: 199 },
          { name: "Zapatos", description: "Ideales para cualquier ocasión", image: "/images/zapatos.jpg", price: 149 },
        ],
      },
    };
  },
  computed: {
    filteredProducts() {
      return this.productsByCategory[this.categoryName] || [];
    },
    searchResults() {
      if (!this.searchQuery) return [];
      const results = [];
      for (const [category, products] of Object.entries(this.productsByCategory)) {
        products.forEach((product) => {
          if (product.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
            results.push({ ...product, categoryName: category });
          }
        });
      }
      return results;
    },
  },
  watch: {
    searchQuery(newQuery) {
      this.searchProducts();
    },
    $route(to, from) {
      // Resetea la búsqueda cuando se cambia de ruta
      this.searchQuery = "";
    }
  }
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

.imagen {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.product-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
  width: 100%;
}

.details-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  text-align: center;
}

.details-link:hover {
  text-decoration: underline;
}
</style>