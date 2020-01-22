<template>
  <div>
    <Navbar />
    <nuxt />
    <CookieConsenter />
    <Accessibutton />
    <Footer />
  </div>
</template>

<script>
import Accessibutton from '~/components/Accessibutton'
import CookieConsenter from '~/components/CookieConsenter'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
    Footer,
    CookieConsenter,
    Accessibutton
  },
  computed: {
    consented() {
      return this.$store.state.matomo.consented
    },
    noped() {
      return this.$store.state.matomo.noped
    }
  },
  watch: {
    consented(value) {
      if (!this.$store.state.matomo.noped) {
        // this.$matomo.setConsent(value)
      }
    }
  }
}
</script>
