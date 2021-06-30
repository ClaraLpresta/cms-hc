<template>
  <div>
   <PrestashopHeader :title='homePresta.header.title' :description='homePresta.header.description' :image='homePresta.header.image' />
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