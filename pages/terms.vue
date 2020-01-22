<template>
  <main class="content-wrapper">
    <div class="container has-text-left">
      <div class="columns">
        <div class="column">
          <br />
          <br />
          <br />
          <Heading text="Terms of Service" :aos="false" />
          <h2 class="squarefont is-size-4 has-text-centered">
            Last Updated: January 20, 2020
          </h2>
          <hr />
          <br />
          <article class="message is-light">
            <div class="message-body">
              <strong><em>Our website is provided as an information portal and communications gateway. Please read these terms carefully.</em></strong>
              <br />
              <br />
              <strong>Terms:</strong> By accessing our Website via TCP/IP at<nuxt-link to="/">
                #
              </nuxt-link>
              you are agreeing to be bound by these terms of service and all applicable laws and regulations, and you agree that you are responsible for compliance with any
              applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing our Website. The materials contained in our Website are
              protected by applicable copyright and trademark law.
              <br />
              <br />
              <strong>Use License:</strong>
              <br />
              <br />
              <strong>Disclaimer:</strong>
              <br />
              <br />
              <strong>Limitations:</strong>
              <br />
              <br />
              <strong>Indemnification:</strong>
              <br />
              <br />
              <strong>Accuracy of Materials:</strong>
              <br />
              <br />
              <strong>Links:</strong>
              <br />
              <br />
              <strong>Modifications:</strong>
              <br />
              <br />
              <strong>Governing Law:</strong>
              <br />
              <br />
            </div>
          </article>
          <br />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading
  }
}
</script>
