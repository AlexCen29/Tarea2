<template>
  <div class="store-container">
    <!-- introduccion -->
     <!-- dónde va el slogan? -->
    <section class="introduction">
      <p>
        Descubre nuestras categorías de productos y encuentra lo que necesitas.
        Ofrecemos una variedad de servicios para satisfacer todas tus
        necesidades.
      </p>
    </section>

    <section class="categories">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="category-card"
      >
        <h2>{{ category.name }}</h2>
        <p>{{ category.description }}</p>
        <img :src="category.image" class="imagen">
        <router-link
          :to="{ name: 'category-products', params: { categoryName: category.name } }"
          class="view-products-link"
        >
          Ver productos
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "StoreView",
  data() {
    return {
      categories: [
        {
          name: "Electrónicos",
          description: "Encuentra los últimos dispositivos y gadgets.",
          image: "/electrodomesticos.jpg",
        },
        {
          name: "Hogar",
          description: "Productos esenciales para tu casa.",
          image: "/electronicos.jpg",
        },
        {
          name: "Deportes",
          description: "Todo para tus actividades deportivas.",
          image: "/deportes.jpg",
        },
        {
          name: "Moda",
          description: "Ropa y accesorios para todos los estilos.",
          image: "/moda.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f9f9f9;
}

.view-products-link {
  margin-top: 10px;
  display: inline-block;
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
}

.view-products-link:hover {
  text-decoration: underline;
}

.imagen{
  width: 100%;
  height: 40%;
}
</style>
