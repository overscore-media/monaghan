<!---
  Big Text Component

  It's big and it's bold

  Props:
  - em: Whether/not the text should also be italicized

-->
<template>
  <strong class="big-text">
    <em v-if="em">
      <slot></slot>
    </em>
    <slot v-else></slot>
  </strong>
</template>

<script>
export default {
  props: {
    em: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
