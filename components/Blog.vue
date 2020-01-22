<template lang="html">
  <article class="posts-wrapper">
    <div v-if="latestThree" class="columns">
      <div v-for="(post, index) in orderedPosts.reverse().slice(0, 3)" :key="index" class="card column" data-aos="fade-up">
        <div class="card-content monagrey">
          <span class="content is-size-3">
            <strong>
              <nuxt-link :to="post._path" class="darknite-text">
                {{ post.title }}
              </nuxt-link>
            </strong>
          </span>
          <br />
          <hr />
          <br />
          <span class="content is-size-4 darknite-text">
            Posted <strong class="darknite-text">{{ post.date }}</strong> by {{ post.author }}
          </span>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="(post, index) in orderedPosts.reverse()" :key="index" class="card column" data-aos="fade-up" @click="goToPost(post._path)">
        <div class="card-content monagrey">
          <span class="content is-size-3">
            <strong>
              <nuxt-link :to="post._path" class="darknite-text">
                {{ post.title }}
              </nuxt-link>
            </strong>
          </span>
          <br />
          <hr />
          <br />
          <span class="content is-size-4 darknite-text">
            Posted <strong class="darknite-text">{{ post.date }}</strong> by {{ post.author }}
          </span>
        </div>
      </div>
    </div>
    <br />
  </article>
</template>

<script>
import { parse } from 'date-fns' // An awesome date-parsing library

export default {
  props: {
    latestThree: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    orderedPosts() { // This method returns a list of blog posts, sorted by date (ascending)
      const posts = [...this.$store.state.blogPosts]
      const ordered = posts.sort((a, b) => {
        const dateA = parse(a.date, 'do MMM y', new Date())
        const dateB = parse(b.date, 'do MMM y', new Date())
        return dateA - dateB
      })
      /*
      Made with Major help from https://stackoverflow.com/questions/40965727/sort-array-of-objects-with-date-field-by-date
      and https://date-fns.org/v2.0.0/docs/parse
      */
      return ordered
    }
  },
  methods: {
    goToPost(postLink) {
      this.$router.push(postLink)
    }
  }
}
</script>

<style scoped>
.card-content {
  height: 100%;
  text-align: center;
}
</style>
