<template>
  <main class="content-wrapper">
    <Hero hero-text="Our Blog" />
    <Blog />
  </main>
</template>

<script>
import Blog from '~/components/Blog'
import Hero from '~/components/Hero'

export default {
  components: {
    Blog,
    Hero
  }
}
</script>
