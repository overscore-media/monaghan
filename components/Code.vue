<!---
  This handy component let's you add syntax-highlighted blocks of
  code, anywhere you want.

  Courtesy of Prism.js (https://prismjs.com/)

  Usage Example:

  <Code lang="scss">
    .some-class {
      color: red;
    }
  </Code>

  Props:
  - lang: The language in which the code is written (default: js)

  Caveats:
  - When you're putting HTML code inside a Code Block, you'll have to do something like this:

    <Code lang="markup">
      &lt;h1&gt;Greater-thans and less-thans have to be escaped&lt;/h1&gt;
    </Code>

  > otherwise ESLint will make a fuss, Vue will render the HTML before passing it to the
  > component, and basically, if you don't do it the way above, you're going to have a bad time...

  > Granted, the escaped HTML looks kinda gross, but it WORKS!!!

  > https://www.freeformatter.com/html-escape.html#ad-output can help you

  - Some of Prism's custom styles don't seem to look too good, so some custom SCSS in
  > ~/assets/scss/main.scss fixes them up, changing the background colour to darknite and
  > the font to Fira Code

  - Furthermore, you should keep up the same tabbing/spacing for the code inside the block
  > as for any other code, or yet again ESLint might make a fuss.

  - Oh, yeah; and you'll also need to add the keyword classes you want to use to the
  > purgeCss whitelist array in nuxt.config.js...

-->

<template>
  <div class="prism">
    <pre class="line-numbers" :class="`language-${lang}`">
      <code>
      <slot></slot>
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from '~/plugins/prism.js' // imports all the JS/CSS necessary

export default {
  props: {
    lang: {
      type: String,
      default: 'js'
    }
  },
  mounted() {
    Prism.highlightAll() // This is apparently the only way this works
  }
}
</script>
