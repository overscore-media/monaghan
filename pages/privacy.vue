<template>
  <main class="content-wrapper">
    <div class="container has-text-left">
      <div class="columns">
        <div class="column">
          <br />
          <br />
          <br />
          <Heading text="Privacy Policy" />
          <h2 class="squarefont is-size-4 has-text-centered">
            Last Updated: January 20, 2020
          </h2>
          <hr />
          <br />
          <article class="message is-light">
            <div class="message-body">
              <p class="has-text-centered">
                <strong><em>We are committed to protecting your personal information and your right to privacy.</em></strong>
              </p>
              <br />
              If you have any questions or concerns about our policies or our practices with regards to your personal information, please <nuxt-link to="/contact">
                contact us
              </nuxt-link>.
              <br />
              <br />
              When you visit our website at <nuxt-link to="/">
                #
              </nuxt-link>, and use our services, you are trusting us with your personal information. We take your privacy very seriously. We hope you take the small amount of time it takes to thoroughly read through this privacy
              policy, as it will help you make informed decisions dealing with how to use our site. If there are any terms in this privacy policy with which you do not agree, please discontinue use of our website immediately.
              <br />
              <br />
              This privacy policy applies to all information collected through our website at <nuxt-link to="/">
                #
              </nuxt-link>,
              and/or any related services, sales, marketing or events (referred to in this policy as “our activities”).
              <br />
              <br />
              <hr />
              <BigText>What information do we collect?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>How do we use your information?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>Will your information be shared with anyone?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>With whom will your information be shared?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>Do we use cookies and other tracking technologies?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>How long do we keep your information?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>How do we keep your information safe?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>Do we collect information from minors?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>What are your privacy rights?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>Controls for Do-not-track requests</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>Do California residents have any specific privacy rights?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>Do we make updates to this policy?</BigText>
              <br />
              <br />

              <br />
              <br />
              <BigText>How can you contact us about this policy?</BigText>
              <br />
              <br />

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
import BigText from '~/components/BigText.vue'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    BigText,
    Heading
  }
}
</script>
