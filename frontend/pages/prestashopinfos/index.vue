<template>
  <div class="cards">
    <div v-for="info in prestaShopInfos" v-bind:key="info.id">
      <CardList v-bind:title="info.title" v-bind:description="info.description" v-bind:icon="info.icon" v-bind:buttonText="info.buttontext" v-bind:url="info.url" />
    </div>
  </div>
</template>

<script>
// Import the prestashopInfos query
import prestaShopInfosQuery from '~/apollo/queries/prestashopinfos/prestashopinfos'
import CardList from '../../components/CardList'

export default {
  data() {
    return {
      // Initialize an empty prestashopInfos variabkle
      prestaShopInfos: [],
      query: ''
    }
  },
  apollo: {
    prestaShopInfos: {
      prefetch: true,
      query: prestaShopInfosQuery
    }
  },
  components: {
    CardList
  }
}
</script>
<style>
  .cards {
    display: flex;
  }
</style>