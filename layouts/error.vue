<template>
  <div class="error-wrapper has-text-centered">
    <Hero v-if="error.statusCode === 404" hero-text="ERROR 404" />
    <Hero v-else :hero-text="`ERROR ${error.statusCode}`" />
    <br />
    <br />
    <h2 class="title is-size-2">
      Oops...
    </h2>
    <br />
    <br />
    <h2 v-if="error.statusCode === 404" class="title is-size-2">
      Apparently, the page you're trying to find doesn't exist.
    </h2>
    <h2 v-else class="subtitle is-size-5">
      An error occurred
    </h2>
    <nuxt-link to="/" class="button monagreen">
      <strong>Go back to the Homepage</strong>
    </nuxt-link>
    <br />
    <br />
    <br />
    </nuxt-link>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  },
  // eslint-disable-next-line
  props: ['error'],
  layout: 'default'
}
</script>
