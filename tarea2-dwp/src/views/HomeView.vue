<template>
  <div class="home-container">    
    <aside class="side-banner left-banner" id="banner1">
      <<p>Publicidad 1</p>>
    </aside>

    <!-- esto se hace con bustrap -->
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

    <aside class="side-banner right-banner" id="banner2">
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
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap; /* Permite que los elementos se reorganicen en pantallas pequeñas */
}

.side-banner {
  width: 150px;
  height: 300px;
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

.carousel-container {
  flex: 1;
  max-width: 800px;
  height: 370px;
  overflow: hidden;
}

.carousel-inner {
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Reglas responsivas */
@media (max-width: 768px) {
  .home-container {
    flex-direction: column; /* Reorganiza los elementos verticalmente */
    align-items: center;
  }

  .side-banner {
    width: 100%;
    height: auto; /* Permite que las banners sean más flexibles */
  }

  .carousel-container {
    max-width: 100%;
    height: auto; /* Ajusta la altura automáticamente */
  }

  .carousel-image {
    height: auto; /* Mantiene proporciones */
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 300px; /* Ajusta la altura para pantallas muy pequeñas */
  }
}

#banner1{
  background-image: url('/public/anuncio1.jpg');
  background-size: cover;
}

#banner2{
  background-image: url('/public/anuncio2.jpg');
  background-size: cover;
}
</style>