<template>
  <div class="cart-container">
    <h1>Carrito de Compras</h1>
    <div v-if="cart.length > 0">
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <img :src="item.image" :alt="item.name" />
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <p><strong>Precio:</strong> ${{ item.price }}</p>
          <button @click="removeFromCart(index)">Eliminar</button>
        </li>
      </ul>
      <p><strong>Total:</strong> ${{ totalPrice }}</p>
      <button @click="processPayment">Pagar</button>
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
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
  },
  methods: {
    loadCart() {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    processPayment() {
      // Aquí puedes agregar la lógica para procesar el pago
      // Por ahora, simplemente mostraremos una alerta de confirmación
      alert("Compra realizada con éxito.");

      // Limpiar el carrito
      this.cart = [];
      localStorage.removeItem("cart");

      // Redirigir al usuario a la página de la tienda o inicio
      this.$router.push({ name: "store" });
    },
  },
  mounted() {
    this.loadCart();
  },
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

li img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

button {
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369e6c;
}
</style>
