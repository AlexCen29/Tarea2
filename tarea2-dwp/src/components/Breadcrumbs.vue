<template>
    <nav class="breadcrumbs">
      <ul>
        <li>
          <router-link :to="{ name: 'store' }">Inicio</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'category-products', params: { categoryName: categoryName } }">
            {{ categoryName }}
          </router-link>
        </li>
        <li>
          {{ productName }}
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Breadcrumbs",
    props: {
      categoryName: {
        type: String,
        required: true,
      },
      productName: {
        type: String,
        required: false,
        default: "",
      },
    },
  };
  </script>
  
  <style scoped>
  .breadcrumbs {
    padding: 10px 0;
    font-size: 14px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
  }
  
  .breadcrumbs ul {
    list-style: none;
    display: flex;
    gap: 5px;
    padding: 0;
    margin: 0;
  }
  
  .breadcrumbs ul li {
    display: inline;
  }
  
  .breadcrumbs ul li::after {
    content: ">";
    margin: 0 5px;
  }
  
  .breadcrumbs ul li:last-child::after {
    content: "";
  }
  </style>
  