<!--
  A big-looking H3 heading, with fancy options

  Uses the inter-font Angled font

  Powered by AoS.js

  Usage Example:
  <Heading text="The Cake is a Lie!" aos="true" />

  Props:
  - text: The actual text of the header
  - aos: Whether or not the heading should have an animation on scroll
  - anim: Which type of AoS.js animation to use
-->

<template>
  <div class="header-wrapper has-text-centered">
    <br />
    <h3 v-if="aos" class="sixcaps title" :data-aos="anim">
      {{ text }}
    </h3>
    <h3 v-else class="inter-font title">
      {{ text }}
    </h3>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    aos: {
      type: Boolean,
      default: false
    },
    anim: {
      type: String,
      default: 'fade-up'
    }
  }
}
</script>
