<!---
  The ContentCard Component is used to display our projects
  Each card is animated to fade into view upwards on scroll (Aos.js)

  Usage Example:

  <ContentCard heading="monagrey" card-class="monagrey" description="hsl(229, 19%, 66%)" />

  Props:
  - cardClass: Which class the top of the card should have (useful for custom colour background classes)
  - description: Smaller text describing the colour to the user (such as its colour code)
  - altText: Accessible text describing the image
  - picture: The card's image
  - link: The website link

-->
<template>
  <div class="card" data-aos="fade-up">
    <div class="card-image">
      <figure class="image is-16by9" :class="cardClass">
        <img class="image" :src="picture" :alt="altText" />
      </figure>
    </div>
    <div class="card-content">
      <span v-if="link" class="content is-size-4 inter-font">
        <a :href="link" target="_blank" rel="noopener noreferrer">{{ description }}</a>
      </span>
      <span v-else class="content is-size-4 inter-font">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    altText: {
      type: String,
      required: true
    },
    cardClass: {
      type: String,
      required: false,
      default: 'has-content-primary'
    },
    description: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
