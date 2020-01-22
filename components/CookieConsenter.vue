<template>
  <div v-if="!saidYes && !saidNo">
    <div class="mobile-cookie-banner">
      <br />
      <Icon :i="mdiCookie" class="is-small" title="Cookie Icon" />
      <p class="has-text-white">
        <strong>Even browser cookies need love...</strong>
      </p>
      <br />
      <button class="button bluesh has-text-white" @click="okCookies">
        <strong>Give me Cookies!</strong>
      </button>
      <button class="button monagreen has-text-white more-info-mobile">
        <strong>Tell me more</strong>
      </button>
      <br />
      <br />
      <button class="button darkrey has-text-white" @click="noCookies">
        <strong>No Thanks</strong>
      </button>
    </div>
    <div class="columns cookie-consent-banner">
      <div class="column">
        <br />
        <Icon :i="mdiCookie" title="Cookie Icon" /><p class="subtitle darple-text">
          Even cookies need love, like everything does...
        </p>
        <p class="subtitle monagrey-text">
          By using this site, you're agreeing to our <nuxt-link to="/privacy">
            privacy policy
          </nuxt-link> and
          <nuxt-link to="/terms">
            terms of service
          </nuxt-link>, as well as consenting to our use of tracking cookies
        </p>
        <div class="button bluesh has-text-white" @click="okCookies">
          <strong>Sounds good</strong>
        </div>
        <div class="button monagreen has-text-white more-info">
          <strong>Tell me more</strong>
        </div>
        <div class="button darkrey has-text-white" @click="noCookies">
          <strong>No tracking, please</strong>
        </div>
      </div>
    </div>
    <div class="modal-wrapper is-clipped">
      <div class="desktop-modal modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <article class="message">
            <div class="message-header">
              <p>Privacy/Cookie Notice</p>
              <button class="modal-closer is-large delete" aria-label="close"></button>
            </div>
            <div class="message-body">
              Like almost every site on the web these days, our website uses cookies and usage tracking mechanisms.
              However, unlike <em>some</em> sites, we want to ensure that your visit to our site is one that protects your privacy while
              honouring your right to it.
              <br />
              <br />
              That being said, we want to be open and upfront about what we're doing on the backend side of things.
              <br />
              <br />
              Whenever you visit this site, a browser cookie is stored on your machine. If you don't want cookies to be automatically
              downloaded, consider <Link link="https://www.cookiesandyou.com/disable-cookies" text="disabling them in your browser's settings" />.
              <br />
              <br />
              We use this cookie with <Link link="https://matomo.org" text="Matomo" />, an open-source analytics tool similar to Google Analytics, but quite a bit less Orwellian.
              Matomo helps us see roughly where our site's visitors originate, as well as how long they stayed and what pages they visited.
              Further, certain characteristics of a visitor's device (like operating system, user agent, browser version, etc.) are gathered
              because we can use them to determine how to optimize our site and whatnot.
              <br />
              <br />
              If you choose to opt-out of usage tracking, the cookie will stay on your machine, (unless you disabled cookies, that is)
              but it will not do anything. In fact, until you click the 'Sounds Good' button, we haven't started tracking you anyway.
              <br />
              <br />
              Also, though it probably goes without saying, by using this site you agree to our <nuxt-link to="/privacy">
                privacy policy
              </nuxt-link>
              and <nuxt-link to="/terms">
                terms of service
              </nuxt-link>.
              <br />
              <br />
              Thanks for visiting our site; we hope you enjoy it!
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="mobile-modal modal is-clipped">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Privacy/Cookie Notice
          </p>
          <button class="modal-closer-mobile is-medium delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          Like almost every site on the web these days, our website uses cookies and usage tracking mechanisms.
          However, unlike <em>some</em> sites, we want to ensure that your visit to our site is one that protects your privacy while
          honouring your right to it.
          <br />
          <br />
          That being said, we want to be open and upfront about what we're doing on the backend side of things.
          <br />
          <br />
          Whenever you visit this site, a browser cookie is stored on your machine. If you don't want cookies to be automatically
          downloaded, consider <Link link="https://www.cookiesandyou.com/disable-cookies" text="disabling them in your browser's settings" />.
          <br />
          <br />
          We use this cookie with <Link link="https://matomo.org" text="Matomo" />, an open-source analytics tool similar to Google Analytics, but quite a bit less Orwellian.
          Matomo helps us see roughly where our site's visitors originate, as well as how long they stayed and what pages they visited.
          Further, certain characteristics of a visitor's device (like operating system, user agent, browser version, etc.) are gathered
          because we can use them to determine how to optimize our site and whatnot.
          <br />
          <br />
          If you choose to opt-out of usage tracking, the cookie will stay on your machine, (unless you disabled cookies, that is)
          but it will not do anything. In fact, until you click the 'Give me Cookies!' button, we haven't started tracking you anyway.
          <br />
          <br />
          Also, though it probably goes without saying, by using this site you agree to our <nuxt-link to="/privacy">
            privacy policy
          </nuxt-link>
          and <nuxt-link to="/terms">
            terms of service
          </nuxt-link>.
          <br />
          <br />
          Thanks for visiting our site; we hope you enjoy it!
        </section>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon'
import Link from '~/components/Link'
import { mdiCookie } from '@mdi/js'

if (process.browser && !(process.env.NODE_ENV !== 'production')) { // So it won't try to render changes to the modals if Nuxt is running in dev mode or using SSR
// A consequence of not loading in dev mode is that the modal activator button doesn't work
  window.addEventListener('load', (event) => { // If the desktop modal exists in the DOM
    if (document.querySelector('.desktop-modal')) {
      const desktopModalButton = document.querySelector('.more-info')
      const desktopModal = document.querySelector('.desktop-modal')
      const desktopModalCloser = document.querySelector('.modal-closer')

      desktopModalButton.addEventListener('click', () => {
        desktopModal.classList.toggle('is-active')
      })

      desktopModalCloser.addEventListener('click', () => {
        desktopModal.classList.toggle('is-active')
      })
    }
    if (document.querySelector('.mobile-modal')) { // If the mobile modal exists in the DOM
      const mobileModalButton = document.querySelector('.more-info-mobile')
      const mobileModal = document.querySelector('.mobile-modal')
      const mobileModalCloser = document.querySelector('.modal-closer-mobile')

      mobileModalButton.addEventListener('click', () => {
        mobileModal.classList.toggle('is-active')
      })

      mobileModalCloser.addEventListener('click', () => {
        mobileModal.classList.toggle('is-active')
      })
    }
  })
}

export default {
  components: {
    Icon,
    Link
  },
  data: () => ({
    mdiCookie
  }),
  computed: {
    saidYes() {
      return this.$store.state.matomo.consented
    },
    saidNo() {
      return this.$store.state.matomo.noped
    }
  },
  methods: {
    okCookies() {
      this.$store.dispatch('matomo/cookieConsenter')
    },
    noCookies() {
      this.$store.dispatch('matomo/cookieNoper')
    },
    isDev() {
      return process.env.NODE_ENV !== 'production'
    }
  }
}

</script>
