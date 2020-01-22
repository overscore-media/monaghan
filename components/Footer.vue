<!---
  The custom Footer component is on the bottom of every page (loaded into /layouts/default.vue)

  The code is fairly self-explanatory

-->
<template>
  <div class="footer-wrapper">
    <footer class="footer has-background-dark has-text-light">
      <div class="content columns is-vcentered">
        <div class="column has-text-centered">
          <a href="#" target="_blank" rel="noreferrer" aria-label="Like us on Facebook">
            <Icon :i="mdiFacebook" title="Facebook Icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter">
            <Icon :i="mdiTwitter" title="Twitter Icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Find us on Instagram">
            <Icon :i="mdiInstagram" title="Instagram Icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Check out our GitHub">
            <Icon :i="mdiGithubCircle" title="Github Icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Our YouTube Channel">
            <Icon :i="mdiYoutube" title="YouTube Icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Our Dev.to Blog">
            <Icon :i="mdiDevTo" title="Dev.to Icon" />
          </a>
        </div>
        <div class="column has-text-centered">
          <p>
            <nuxt-link to="/privacy" class="footer-link">
              Privacy
            </nuxt-link> / <nuxt-link to="/terms" class="footer-link">
              Terms of Service
            </nuxt-link> / <nuxt-link to="/a11y" class="footer-link">
              Accessibility
            </nuxt-link>
          </p>
        </div>
      </div>
      <hr />
      <p class="has-text-centered">
        <strong>Made using <Link link="https://github.com/overscore-media/monaghan" text="Monaghan" class="footer-link" /> by <Link link="https://overscore.media" text="OverScore Media" class="footer-link" /></strong>
      </p>
      <br />
    </footer>
  </div>
</template>

<script>
import {
  mdiDevTo,
  mdiFacebook,
  mdiGithubCircle,
  mdiInstagram,
  mdiTwitter,
  mdiYoutube
} from '@mdi/js'

import Icon from '~/components/Icon'
import Link from '~/components/Link'

export default {
  components: {
    Icon,
    Link
  },
  data: () => ({
    mdiDevTo,
    mdiFacebook,
    mdiGithubCircle,
    mdiInstagram,
    mdiTwitter,
    mdiYoutube
  })
}
</script>
