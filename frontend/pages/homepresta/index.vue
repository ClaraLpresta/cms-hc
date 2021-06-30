<template>
  <div>
    <p>Appeler par un composant</p>
    <!-- <PrestashopHeader :title='homePresta.header.title' :description='homePresta.header.description' :image='homePresta.header.image' /> -->
    <p>Appeler par les variables</p>
    <div class="flex">
      <div>
        <h1>{{homePresta.header.title}}</h1>
        <p>{{homePresta.header.description}}</p>
      </div>
      <div>
        <img :src="'http://strapi-back.connaissance.prestashop.net' + homePresta.header.image.url">
      </div>
    </div>
  </div>
</template>

<script>
import HomePrestaQuery from '~/apollo/queries/homepresta/homepresta'
import PrestashopHeader from '~/components/PrestashopHeader'

export default {
  data() {
    return {
      // Initialize an empty HomePresta variable
      homePresta: [],
      query: ''
    }
  },
  apollo: {
    homePresta: {
      prefetch: true,
      query: HomePrestaQuery
    }
  },
  components: {
    PrestashopHeader
  }
}
</script>