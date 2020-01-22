<!---
  A jumbo-size Hero component with fancy colour changing (powered by Anime.js)

  Usage Example:
  <Hero hero-text="Big Hero Seven" />

  Props:
  - hero-text: The subtitle of the Hero, just under the main Hero text

-->
<template>
  <div class="hero-wrapper">
    <section class="hero is-fullwidth is-fullheight-with-navbar">
      <client-only>
        <Particles />
      </client-only>
      <div class="hero-anime">
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column">
              <h1 class="hero-title sixcaps unselectable">
                Monaghan
              </h1>
              <h1 class="inter-font has-text-white is-size-3-mobile is-size-1-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd unselectable">
                {{ heroText }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="height: 10vh;" />
  </div>
</template>

<script>
// Chroma is helpful for colour code utilities
import chroma from 'chroma-js'
import css from '~/assets/scss/variables/variables.scss'
// Imports the colour variables exported in variables.scss
import Particles from '~/components/Particles'

export default {
  components: {
    Particles
  },
  props: {
    heroText: {
      type: String,
      required: false,
      default: 'A website template crafted by OverScore Media'
    }
  },
  mounted() {
    function makeTransparent(colour) {
      const colourRGB = chroma(colour).rgb()
      return `rgba(${colourRGB[0]}, ${colourRGB[1]}, ${colourRGB[2]}, 0.5)`
    }
    if (process.browser) {
      const animeDiv = this.$el.getElementsByClassName('hero-anime')

      this.$anime({
        targets: animeDiv,
        background: [makeTransparent(css.monagreen), makeTransparent(css.bluesh), makeTransparent(css.darple)],
        duration: 11000,
        loop: true,
        direction: 'alternate'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 615px) {
  div[id^='particles-instance-'] {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    background: $darknite;
  }
}

@media only screen and (max-width: 615px) {
  div[id^='particles-instance-'] {
    height: 60vh;
    width: 100vw;
    margin-bottom: 5vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    background: $darknite;
  }
}
</style>
