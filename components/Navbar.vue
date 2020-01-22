<!---
  The custom Navbar component is on the top of every page (loaded into /layouts/default.vue)

  The code should hopefully be fairly self-explanatory; the JS at the bottom toggles the mobile hamburger menu
  and dropdown
-->
<template>
  <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item inter-font navbar-icon" to="/" aria-label="Go Home">
        <p>M</p>
      </nuxt-link>

      <a
        id="nav-trigger"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/about">
          About
        </nuxt-link>

        <!--<Link class="navbar-item" link="https://overscore.media" text="External Link" /> -->

        <nuxt-link to="/our-blog" class="navbar-item">
          Blog
        </nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">
          Contact
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link dropdown-link">Dropdown</a>

          <div class="navbar-dropdown dropdown-content is-hidden">
            <nuxt-link to="/" class="navbar-item">
              Home
            </nuxt-link>
            <nuxt-link to="/about" class="navbar-item">
              About
            </nuxt-link>
            <nuxt-link to="/our-blog" class="navbar-item">
              Blog
            </nuxt-link>
            <nuxt-link to="/contact" class="navbar-item">
              Contact
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link to="/contact" class="button monagreen">
              Contact Us
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import Link from '~/components/Link'

if (process.browser) { // So, this monstrosity is for dealing with the navbar on mobile
  window.addEventListener('DOMContentLoaded', (event) => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('#' + burger.dataset.target)
    const navbarLinks = document.getElementsByClassName('navbar-item')

    const dropdownHeader = document.querySelector('.dropdown-link')

    const dropdownContent = document.querySelector('.dropdown-content')

    dropdownHeader.addEventListener('click', () => {
      dropdownContent.classList.toggle('is-hidden')
    })

    burger.addEventListener('click', () => { // when the burger's clicked, toggle the nav's visibility
      burger.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    })

    Array.from(navbarLinks).forEach((link) => { // if the navbar link isn't a dropdown toggle, toggle the nav's visibility
      if (!(link.classList.contains('has-dropdown'))) {
        link.addEventListener('click', () => {
          nav.classList.toggle('from-navbar')
          if (nav.classList.contains('is-active')) {
            nav.classList.remove('is-active')
          }
          if (burger.classList.contains('is-active')) {
            burger.classList.remove('is-active')
          }
        })
      }
    })
  })
}
export default {
  components: {
    // Link
  },
  watch: {
    '$route' () { // without this block, the burger menu would stay open on route change
      if (process.browser) {
        const burger = document.querySelector('.burger')
        const nav = document.querySelector('#' + burger.dataset.target)

        if (burger.classList.contains('is-active')) {
          burger.classList.remove('is-active')
        }
        if (nav.classList.contains('from-navbar')) { // Make sure the nav doesn't open when a non-navbar link is clicked
          if (burger.classList.contains('is-active')) {
            burger.classList.remove('is-active')
          }
          nav.classList.toggle('from-navbar')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.navbar-icon {
  background-color: lighten($darknite, 20%);
  width: 5rem;
  p {
    margin: 0 auto;
    font-weight: bold;
  }
}
</style>
