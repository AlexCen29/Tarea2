<script setup>
import { ref } from "vue";
import HomeView from './views/HomeView.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="layout">
    <header>
      <section class="header-content">
        
        <div class="banner">
          <h1>Electrónica Jimenez</h1>
          <p>Un lugar donde encuentras todo lo que necesitas</p>
        </div>

        <nav class="navigation"> 
          <button class="hamburger" @click="toggleMenu" aria-label="Abrir menú">
            <i class="bi" :class="isMenuOpen ? 'bi-x' : 'bi-list'"></i>
          </button>

          <ul class="nav-links" :class="{ open: isMenuOpen }">
            <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
            <li><router-link to="/store" @click="closeMenu">Categorías</router-link></li>
            <li><a href="#" @click="closeMenu">Servicios</a></li>
            <li><a href="#" @click="closeMenu">Portafolio</a></li>
            <li><a href="#" @click="closeMenu">Precios</a></li>
            <li><router-link to="/about" @click="closeMenu">Nosotros</router-link></li>
            <li><a href="#" @click="closeMenu">Blog</a></li>
            <li><a href="#" @click="closeMenu">Contacto</a></li>
            <li><router-link to="/cart" @click="closeMenu">Mi Carrito <i class="bi bi-cart"></i></router-link></li>
          </ul>

          <form class="search-bar" role="search" aria-label="Buscar en la aplicación">
            <!-- <input type="text" placeholder="Buscar..." aria-label="Campo de búsqueda" /> -->
            <button type="button" @click="openModal">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </nav>
      </section>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2025 Tarea 3 - Todos los derechos reservados</p>
    </footer>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <form class="search-bar" role="search" aria-label="Buscar en la aplicación">
          <input type="text" v-model="searchQuery" placeholder="Buscar..." aria-label="Campo de búsqueda" @input="searchProducts" />
        </form>
        <div v-if="searchResults.length">
          <ul class="search-results">
            <li v-for="product in searchResults" :key="product.name" class="search-result-item">
              <img :src="product.image" :alt="product.name" class="product-image" />
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                <p>{{ product.price }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No se encontraron productos.</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import { ref } from "vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const isMenuOpen = ref(false);
const isModalOpen = ref(false);
const searchQuery = ref('');
const products = ref([
  { name: "XBOX Series X", description: "Consola de última generación", image: "/images/xboxseriesx.jpg", price: 9999 },
  { name: "PlayStation 5", description: "Consola con juegos exclusivos", image: "/images/playstation5.jpg", price: 9999 },
  { name: "Switch 2", description: "La consola portátil definitiva", image: "/images/switch2.jpg", price: 9999 },
  { name: "Aspiradora", description: "Limpia tu hogar fácilmente", image: "/images/aspiradora.jpg", price: 9999 },
  { name: "Refrigerador", description: "Conserva tus alimentos", image: "/images/refrigerador.jpg", price: 9999 },
  { name: "Balón de fútbol", description: "Ideal para entrenamientos", image: "/images/fucho.jpg", price: 9999 },
  { name: "Bicicleta", description: "Perfecta para aventuras", image: "/images/bicla.jpg", price: 9999 },
  { name: "Camisa", description: "Elegancia y comodidad", image: "/images/camisa.jpg", price: 9999 },
  { name: "Zapatos", description: "Ideales para cualquier ocasión", image: "/images/zapatos.jpg", price: 9999 }
]);
const searchResults = ref([]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const searchProducts = () => {
  if (searchQuery.value.trim() === '') {
    searchResults.value = [];
    return;
  }
  const query = searchQuery.value.toLowerCase();
  searchResults.value = products.value.filter(product => 
    product.name.toLowerCase().includes(query)
  );
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.search-results {
  list-style: none;
  padding: 0;
}

.search-result-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.product-info p {
  margin: 0;
  font-size: 0.9em;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  padding: 15px;
  width: 100%;
  height: 150px;
  background-image: url('/back.jpg');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.banner {
  margin-bottom: 20px;
}

.banner h1 {
  font-size: 2rem;
  margin: 0;
}

.banner p {
  font-size: 1.2rem;
  margin: 0;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  transition: max-height 0.3s ease-in-out;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.nav-links li a.router-link-exact-active {
  border-bottom: 2px solid white;
}

.nav-links.open {
  max-height: 500px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  padding: 5px;
  border: none;
  border-radius: 5px;
}

.search-bar button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: #42b983;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #e0e0e0;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

@media (max-width: 1167px) {
  .hamburger {
    display: block;
  }

  .search-bar {
    margin-top: 15px;
    width: 100%;
    justify-content: center;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
}

main {
  flex: 1;
  padding: 10px;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: auto;
}

@media (min-width: 1168px) {
  .nav-links {
    position: static;
    flex-direction: row;
    max-height: none;
    background-color: transparent;
    gap: 20px;
  }
}
</style>