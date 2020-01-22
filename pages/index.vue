<template>
  <main class="content-wrapper">
    <Hero />
    <div class="container has-text-centered">
      <Heading text="More about Us:" />
      <p class="is-size-5">
        Interested in learning more about us?
      </p>
      <p class="is-size-5">
        Perhaps our <nuxt-link to="/about">
          about page
        </nuxt-link> can help...
      </p>
      <hr />
      <Heading text="Get OverScore Media to Work for You:" />
      <p class="is-size-5">
        Need a website, logo, and/or custom artwork?
      </p>
      <p class="is-size-5">
        Got an idea for a software project but don't know where to start?
      </p>
      <p class="is-size-5">
        Looking for a dedicated team with a diverse set of skills?
      </p>
      <br />
      <p class="is-size-5">
        Whatever you need from us, <nuxt-link to="https://overscore.media">
          contact OverScore Media
        </nuxt-link>
        (the developer of this website template) to get the ball rolling!
      </p>
      <br />
      <Heading text="The Latest from our Blog:" />
      <Blog latest-three />
      <hr />
      <Heading text="This template is open-source!" />
      <p class="is-size-5">
        You heard that right. This entire website template is open-source and free for personal or commercial use!
      </p>
      <br />
      <p class="is-size-5">
        For more open-source offerings, check out OverScore Media's
        <a href="https://github.com/overscore-media" target="_blank" rel="noreferrer">GitHub</a>
        for some open-source goodies, including website templates, helpful Vue components, and the
        <a href="https://github.com/overscore-media/overscore-commitment" target="_blank" rel="noreferrer">OverScore Commitment</a>,
        a common-sense, open-source code-of-conduct template for open-source projects.
      </p>
      <hr />
    </div>
    <br />
  </main>
</template>

<script>
import Blog from '~/components/Blog'
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'

export default {
  components: {
    Blog,
    Heading,
    Hero
  }
}
</script>
