<!--
  The Icon component is for inserting Material Design Icons into your components.

  This is what you need to use it:

  (In the template:)

  <Icon :i="mdiGithubCircle" title="Github Icon" />
  <Ion :i="mdiTwitter" title="Twitter Icon" />

  (In the script tag:)

    import {
      mdiGithubCircle
      mdiTwitter,
    } from '@mdi/js'

    import Icon from '~/components/Icon'

    export default {
      components: {
        Icon
      },
      data: () => ({
        mdiGithubCircle,
        mdiTwitter
      })
    }

-->

<template>
  <svg
    :viewBox="viewBox"
    class="icon"
    role="img"
  >
    <title v-if="title">{{ title }}</title>
    <path :d="i" :fill="color" />
  </svg>
</template>

<script>
import css from '~/assets/scss/variables/variables.scss'

export default {
  props: {
    i: String,
    color: {
      type: String,
      default: css.darkrey
    },
    title: {
      type: String
    },
    size: {
      type: String,
      default: '24'
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.size} ${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  width: 2rem;
  height: 2rem;
  fill: $darkrey;
}
</style>
