<template>
  <div class="flex">
    <div>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
    <div>
      <img :src="'http://strapi.connaissance.prestashop.net' + image.url">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      image: Object
    }
  }
</script>

<style>
  .flex {
    display: flex;
    align-items: center;
  }
  .flex > div {
    width: 50% ;
  }
  .flex > div:last-child {
    margin-left: 15px;
  }
  .flex img {
    width: 80%;
  }
</style>