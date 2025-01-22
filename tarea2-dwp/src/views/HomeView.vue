<template>
  <div class="home-container">
    <!-- Banners laterales -->
    <aside class="side-banner left-banner">
      <p>Publicidad 1</p>
    </aside>

    <!-- Carrusel principal (Bootstrap) -->
    <section class="carousel-container">
      <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://usbridge.com/wp-content/uploads/2018/06/Image-Akashi_Kaikyo_Bridge.jpg"
              class="carousel-image"
              alt="Slide 1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://stardewvalleywiki.com/mediawiki/images/4/4a/Pierres_shop.png"
              class="carousel-image"
              alt="Slide 2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.shutterstock.com/image-vector/illustration-bridge-pixel-art-style-260nw-2117888624.jpg"
              class="carousel-image"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <!-- Banners laterales -->
    <aside class="side-banner right-banner">
      <p>Publicidad 2</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Contenedor principal */
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

/* Banners laterales */
.side-banner {
  width: 150px;
  height: 300px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 1rem;
  color: #555;
}

.left-banner {
  margin-left: 10px;
}

.right-banner {
  margin-right: 10px;
}

/* Carrusel */
.carousel-container {
  flex: 1;
  max-width: 800px;
  height: 370px; /* Altura fija para el carrusel */
  overflow: hidden; /* Asegura que las imágenes no se desborden */
}

.carousel-inner {
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Escala y recorta las imágenes para ajustarse al contenedor */
}
</style>
