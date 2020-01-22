<!---
  The LinkCard Component is used on the /about page
  Each card is animated to fade into view upwards on scroll (Aos.js)

  Usage Example:

  <LinkCard title="Web Framework" :items="['Nuxt.js', '(It\'s based on Vue.js and inspired by Next.js)']" :links="['https://nuxtjs.org/']" />

  Props:
  - title: The left-top text of the card
  - items: Text array of items that will appear in the card
  - links: Links to correspond with the items (if any)

  Caveats:
  - Admittedly, the code looks... weird
  - You'll need to escape any characters (like quotes) that'll mess with the arrays
  - If any items don't have corresponding links, they should come at the end of the items array

-->
<template>
  <div class="card has-text-centered" data-aos="fade-up">
    <!--- Nowhere near perfect or elegant, but somehow it works! -->
    <header class="card-header">
      <p class="card-header-title">
        {{ title }}:
      </p>
    </header>
    <div class="card-content">
      <p v-for="(item, index) in items" :key="index" class="items subtitle">
        {{ item }}<a
          v-for="link in links"
          :key="link"
          :href="links.indexOf(link) == index && link ? link : ''"
          :class="links.indexOf(link) == index ? 'has-text-primary subtitle' : 'gone'"
          target="_blank"
          rel="noreferrer"
        >{{ links.indexOf(link) == index && link ? ` - ${link}` : "" }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    items: {
      type: Array,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
