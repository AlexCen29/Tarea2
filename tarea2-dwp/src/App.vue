<script setup>
import HomeView from './views/HomeView.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<template>
  <div class="layout">
    <!-- Encabezado principal -->
    <header>
      <section class="header-content">
        <!-- Banner -->
        <div class="banner">
          <h1>Mi Aplicación Vue</h1>
          <p>Un lugar donde encuentras todo lo que necesitas</p>
        </div>

        <!-- Navegación principal -->
        <nav class="navigation">
          <!-- Opciones de rutas -->
          <ul class="nav-links">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/store">Categorías</router-link></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Precios</a></li>
            <li><router-link to="/about">Nosotros</router-link></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
            <li><router-link to="/cart">Mi Carrito
              <i class="bi bi-cart"></i>
            </router-link></li>
          </ul>

          <!-- Buscador -->
          <form class="search-bar" role="search" aria-label="Buscar en la aplicación">
            <input type="text" placeholder="Buscar..." aria-label="Campo de búsqueda" />
            <button type="submit">Buscar</button>
          </form>
        </nav>
      </section>
    </header>

    <!-- Contenido principal dinámico -->
    <main>
      <router-view />
    </main>

    <!-- Pie de página -->
    <footer>
      <p>© 2025 Tarea 3 - Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<style scoped>
/* Layout general para sticky footer */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  padding: 15px;
  width: 100%;
  height: 150px; /* Altura del header */
  background-image: url('https://images.unsplash.com/photo-1583583729052-7800f1392773?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: 100% 100%; /* Asegura que la imagen se deforme para cubrir el espacio */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

/*
header {
  width: 100%;
  height: 300px;
  background-image: url('https://usbridge.com/wp-content/uploads/2018/06/Image-Akashi_Kaikyo_Bridge.jpg');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat; 
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 */

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

/* Navegación */
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links li a.router-link-exact-active {
  border-bottom: 2px solid white;
}

/* Buscador */
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

/* Main */
main {
  flex: 1; /* Hace que el contenido del main ocupe el espacio restante */
  padding: 10px;
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: auto;
}
</style>
