<template>
  <main class="content-wrapper">
    <Hero hero-text="Contact Us" />
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column is-one-quarter">
        </div>
        <div class="column is-one-half">
          <Heading text="Howdy!" />
          <h2 class="is-size-4">
            Want to contact us? You've come to the right form!
          </h2>
          <br />
          <br />
          <form
            name="contact"
            action="/thank-you"
            netlify-honeypot="bot-field"
            method="POST"
            netlify
          >
            <p class="is-hidden">
              <label>If you're a human, don't fill out this input: <input type="hidden" name="form-name" value="contact" /></label>
            </p>

            <div class="field">
              <label class="form-label label" for="name">Name:
                <input id="name" class="form-field input" type="text" name="name" placeholder="LeBron James" />
              </label>
            </div>

            <div class="field">
              <label class="form-label label" for="email">Email:
                <input id="email" class="form-field input" type="email" name="email" placeholder="cave.johnson@aperture.com" />
              </label>
            </div>
            <br />

            <div class="control has-text-centered">
              <label class="form-label label">The reason for your message:
                <br />
                <div class="select">
                  <select name="reason[]" required>
                    <option value="more-info">Could I get some more info, please?</option>
                    <option value="how-to-join">How do I go about joining your team?</option>
                    <option value="potential-customer">I may have a job for you.</option>
                    <option value="but-can-you-do-this">But can you do X?</option>
                    <option value="just-chat">I just want to chat.</option>
                    <option value="something-else">It's something else, actually.</option>
                  </select>
                </div>
              </label>
            </div>
            <br />

            <div class="field">
              <label class="form-label label" for="textarea">Message:
                <textarea id="message" class="form-field textarea" type="text" name="message" placeholder="This is a story of a man named Stanley..."></textarea>
              </label>
            </div>
            <br />

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" required>
                  I agree to this website's <nuxt-link to="/terms">terms of service</nuxt-link> and <nuxt-link to="/privacy">privacy policy</nuxt-link>
                </label>
              </div>
            </div>
            <br />

            <input class="form-button button is-primary" type="submit" value="Send message" />
          </form>
        </div>
        <div class="column is-one-quarter" />
      </div>
    </div>
    <br />
    <br />
  </main>
</template>

<script>
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'

export default {
  components: {
    Hero,
    Heading
  }
}
</script>
