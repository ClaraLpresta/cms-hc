<template>
  <div>

      <!-- Search input to filters restaurants -->
      <form class="uk-search uk-search-large uk-align-center uk-margin">
          <span uk-search-icon></span>
          <input class="uk-search-input" v-model="query" type="search" placeholder="Search...">
      </form>

      <!-- Restaurant cards -->
      <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" v-for="restaurant in filteredList" v-bind:key="restaurant.id" uk-grid>
          <div class="uk-card-media-left uk-cover-container">
              <img :src="'http://strapi-back.connaissance.prestashop.net' + restaurant.image.url" :alt="restaurant.image.alternativeText" uk-cover>
              <canvas width="600"></canvas>
          </div>
          <div>
              <div class="uk-card-body">
                  <h3 class="uk-card-title">{{ restaurant.name }}</h3>
                  <p>{{ restaurant.description }}</p>
                  <!-- Link to the restaurant using router-link -->
                  <router-link :to="{ name: 'restaurants-id', params: { id: restaurant.id }}" tag="a" class="uk-button uk-button-primary">See dishes
                  </router-link>
              </div>
          </div>
      </div>

      <!-- If no restaurants have been found -->
      <div class="uk-container uk-container-center uk-text-center" v-if="filteredList.length == 0">
       <img src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png" height="800" width="800">
       <p>No restaurants found</p>
     </div>

  </div>

</template>

<script>
// Import the restaurants query
import restaurantsQuery from '~/apollo/queries/restaurant/restaurants'

export default {
  data() {
    return {
      // Initialize an empty restaurants variabkle
      restaurants: [],
      query: ''
    }
  },
  apollo: {
    restaurants: {
      prefetch: true,
      query: restaurantsQuery
    }
  },
  computed: {
    // Search system
    filteredList() {
      return this.restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  }
}
</script>