<template>
  <div>
    <div class="card">
      <a :href="url" target="">
          <img :src="'http://strapi.connaissance.prestashop.net' + icon.url" alt="Agences" >
          <h3 class="headings h3 grey-darkest card-title">{{title}}</h3>
          <p>{{description}}</p>
          <div>{{buttontext}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: String,
      description: String,
      url: String,
      buttontext: String,
      icon: Object
    }
  }
</script>
<style>
  .card {
    margin: 10px;
    border: 1px solid #d2d2d2;
    position: relative;
    height: 100%;
    background-color: #fff;
    text-decoration: none;
    border-radius: 4px;
    padding: 24px;
    text-align: center;
  }
</style>