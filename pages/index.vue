<template>
  <div>
    <div v-for="headline in headlines" :key="headline.id">
      <nuxt-link :to="`headlines/${headline.slug}`">
        <div @click.prevent="submitHeadline(headline)">
          {{ headline.title }}
          {{ `headlines/${headline.slug}` }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
/*async asyncData ({ $axios }) {
    try {
      //const topHeadlines = await $axios.$get('/api/top-headlines?country=jp')
      console.log('headline', topHeadlines.articles)
      return {
        headlines: topHeadlines.articles
      }
    } catch (e) {
      console.log(e.message)
    }
  }*/

export default {
  async fetch({ store }) {
    const apiUrl = "/api/top-headlines?country=jp"
    await store.dispatch("headlines/loadHeadlines", apiUrl)
  },
  computed: {
    headlines() {
      return this.$store.getters['headlines/headlines']
    }
  },
  methods: {
        submitHeadline(headline) {
            this.$store.dispatch('headlines/submitHeadline', headline)
            .then(() => {
                this.$router.push('/headlines/' + headline.slug)
            })
        }
    },
};
</script>
