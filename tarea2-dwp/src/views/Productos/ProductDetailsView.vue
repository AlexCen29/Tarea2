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

<script>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
export default {
  components: { Breadcrumbs },
  name: "ProductDetailsView",
  props: ["categoryName", "productName"],
  data() {
    return {
      product: {
        name: this.productName,
        description: "Commodo incididunt labore qui incididunt id proident cillum duis voluptate Lorem tempor sunt. Eiusmod excepteur amet aliquip culpa ea nulla laborum culpa labore do eu aute fugiat. Qui irure laborum incididunt nulla nulla. Consequat enim enim proident mollit duis cillum deserunt pariatur dolor fugiat in cillum incididunt. Consequat pariatur ex quis anim irure proident nostrud proident magna. Labore elit qui eiusmod elit enim aliqua do adipisicing ut cupidatat est et exercitation.",
        price: 150.0, //precio del producto
        image: "https://www.gamespot.com/a/uploads/screen_kubrick/1574/15747411/3756082-xbox-series-x-review-promothumb.jpg",
      },
    };
  },
  methods: {
    addToCart() {
      // Obtener el carrito actual desde el almacenamiento local o inicializarlo
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(this.product); // Agregar el producto al carrito
      localStorage.setItem("cart", JSON.stringify(cart)); // Guardar el carrito actualizado
      alert(`${this.product.name} se agregó al carrito.`);
    },
  },
};
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
