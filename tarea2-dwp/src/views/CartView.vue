<template>
  <div class="cart-container">
    <h1>Carrito de compras</h1>
    <div v-if="cart.length > 0">
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" :alt="item.name" />
        <div class="item-details">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p><strong>Precio:</strong> ${{ item.price }}</p>
          <button @click="removeFromCart(index)">Eliminar</button>
        </div>
      </div>
      <h2>Total: ${{ totalPrice }}</h2>
    </div>
    <div v-else>
      <p>Tu carrito está vacío.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details h2 {
  margin: 0;
  font-size: 1.5rem;
}

.item-details p {
  margin: 5px 0 0;
  color: #555;
}

.item-details button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.item-details button:hover {
  background-color: #ff1a1a;
}
</style>