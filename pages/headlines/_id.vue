<template>
  <div>
    <div>
      <h3>{{ headline.title }}</h3>
      <p>{{ headline.description }}</p>
      <img :src="headline.urlToImage">
    </div>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  computed: {
    headline () {
      return this.$store.getters['headlines/headline']
    }
  }
}
</script>