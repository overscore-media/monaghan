<template>
  <div class="columns">
    <div class="column is-one-third">
      <div class="card rounder" data-aos="fade-left" data-aos-duration="1500">
        <div class="card-image">
          <figure class="image">
            <img src="https://placeimg.com/512/512/people" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <p class="title is-4">
                You
              </p>
              <p class="subtitle is-6">
                Quick, say something personal and quirky!
              </p>
            </div>
          </div>

          <div class="content">
            Want to join us? You could be here!
            <Link link="https://yourwebsite.ca" />
            <br />
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" href="https://facebook.com/you" target="_blank" rel="noreferrer"><Icon class="icon is-medium" :i="mdiFacebook" title="Facebook Icon" /></a>
          <a class="card-footer-item" href="https://twitter.com/you" target="_blank" rel="noreferrer"><Icon class="icon is-medium" :i="mdiTwitter" title="Twitter icon" /></a>
          <a class="card-footer-item" href="https://github.com/you" target="_blank" rel="noreferrer"><Icon class="icon is-medium" :i="mdiGithubCircle" title="GitHub Icon" /></a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiFacebook,
  mdiGithubCircle,
  mdiTwitter
} from '@mdi/js'

import Icon from '~/components/Icon.vue'
import Link from '~/components/Link.vue'

export default {
  components: {
    Icon,
    Link
  },
  data: () => ({
    mdiFacebook,
    mdiGithubCircle,
    mdiTwitter
  })
}
</script>
