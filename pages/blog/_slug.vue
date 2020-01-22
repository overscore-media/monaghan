<!--eslint-disable -->
<template lang="html">
  <div class="post-wrapper">
    <Hero hero-text="Blog" />
    <div class="container">
      <div class="columns">
        <div class="column">
          <Heading :text="title" />
          <h4 class="date is-size-4 has-text-centered">
            Posted by {{ author }} on {{ date }}
          </h4>
          <hr />
          <br />
          <div class="body" v-html="$md.render(body)" />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Hero,
    Heading
  },
  async asyncData({ params, app, payload, route, store }) {
    /*
      Comment from https://github.com/tylermercer/nuxt-netlifycms-boilerplate:

      Interestingly, if you just return the raw post object as it is imported,
      Nuxt fails to build, but if you create your own object with the data you
      need, it works. The issue is discussed here, but apparently it wasn't
      completely fixed. https://github.com/nuxt-community/apollo-module/issues/163
      However, I like the code more this way anyway--it's more explicit what
      you're bringing in from the JSON.

    */
    const post = await import(`~/content/blog/${params.slug}.json`)
    return {
      date: post.date,
      body: post.body,
      title: post.title,
      author: post.author
    }
  }
}
</script>
