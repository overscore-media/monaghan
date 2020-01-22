<template>
  <main class="content-wrapper">
    <Hero hero-text="Accessibility" />
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column">
          <Heading text="We Care" />
          <p class="is-size-5">
            We care about making web experiences that are accessible and
            available to everybody.
          </p>
          <br />
          <br />
          <p class="is-size-5">
            Below are some examples of the code we've used to ensure the content
            on our site is easily navigable by everybody, regardless of the technologies
            they may be using to access it.
          </p>
          <br />
          <Heading text="Images:" />
          <br />
          <p class="is-size-5">
            Whenever we include an image on our site, we make sure to include an "alt" text for our
            visitors who can't see/load the image.
          </p>
          <Code lang="markup">
            &lt;img src=&quot;https://i.kym-cdn.com/photos/images/original/001/475/420/c62.gif&quot; alt=&quot;Ewan McGregor as Obi-Wan Kenobi&quot; /&gt;
          </Code>
          <br />
          <Heading text="ARIA Attributes:" />
          <br />
          <p class="is-size-5">
            The Web Accessibility Initiative's <Link link="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" text="Accessible Rich Internet Applications" />
            (or ARIA) attributes baked into HTML help developers provide accessible alternatives for content that would otherwise
            be hard to understand without being able to see it. At OverScore Media, we make use of these attributes whenever necessary, including
            in the social icons on our website's footer:
          </p>
          <Code lang="markup">
            &lt;a href=&quot;https://facebook.com/you&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot; aria-label=&quot;Like us on Facebook&quot;&gt;
            &lt;Icon :i=&quot;mdiFacebook&quot; :title=&quot;Facebook Icon&quot; /&gt;
            &lt;/a&gt;
          </Code>
          <br />
          <Heading text="Semantic Markup:" />
          <br />
          <p class="is-size-5">
            While ARIA attributes are nice, HTML5 includes a bunch of helpful elements with <Link link="https://guide.freecodecamp.org/html/html5-semantic-elements/" text="semantic meaning" />.
            These elements help to divide a webpage's content into distinct, logical chunks, and accessibility software like screen readers are able to make sense of them.
            Again, whenever possible, we try to use the best HTML elements for the job, in order to make our content's layout easy to understand and navigate.
          </p>
          <Code lang="markup">
            &lt;nav class=&quot;navbar is-fixed-top is-dark&quot; role=&quot;navigation&quot; aria-label=&quot;main navigation&quot;&gt;
            &lt;/nav&gt;

            &lt;main class=&quot;content-wrapper&quot;&gt;
            &lt;/main&gt;

            &lt;footer class=&quot;footer has-background-dark has-text-light&quot;&gt;
            &lt;/footer&gt;
          </Code>
          <br />
          <br />
          <hr />
          <p class="is-size-5">
            We also try to ensure that the <Link link="https://web.dev/color-contrast/" text="colour ratio between the background and foreground" /> of any HTML elements is at least 3.00:1, the minimum as per the WCAG AA guidelines.
          </p>
          <br />
          <hr />
          <p class="is-size-5">
            Last but not least, you may have noticed the Accessibutton in the bottom-left of your screen. Clicking it brings up a few
            options for making the site more readable, including colour inversion, hyperlink highlighting, and changing text to the wonderful <Link link="https://gumroad.com/l/OpenDyslexic" text="OpenDyslexic font" />.
            It's based on <Link link="https://github.com/hendrixfan/vue-accessibility-toolbar" />
          </p>
          <br />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Code from '~/components/Code'
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import Link from '~/components/Link'
import Prism from '~/plugins/prism' // This is necessary because there's some HTML blocks

export default {
  components: {
    Hero,
    Heading,
    Link,
    Code
  }
}
</script>
