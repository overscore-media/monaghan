<!---
  Nice link component with a bit of security built-in

  props:
  - link: the HTTPS link
  - text: the text of that link

-->
<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">{{ text ? text : link }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  }
}
</script>
