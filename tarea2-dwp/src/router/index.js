import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import StoreView from '../views/StoreView.vue';
import CategoryProductsView from '../views/Categorias/CategoryProductsView.vue';
import ProductDetailsView from '../views/Productos/ProductDetailsView.vue';
import CartView from '../views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about', 
      name: 'about',
      component: AboutView,
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: "/store/:categoryName",
      name: "category-products",
      component: CategoryProductsView,
      props: true, // Pasa parámetros como propiedades al componente
    },
    {
      path: "/store/:categoryName/:productName",
      name: "product-details",
      component: ProductDetailsView,
      props: true,
    },
  ],
});

export default router;
