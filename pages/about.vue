<template>
  <main class="content-wrapper">
    <Hero hero-text="About Us" />
    <section class="section">
      <div class="container has-text-centered has-content-centered">
        <div class="columns">
          <div class="column">
            <Heading text="Who are We?" />
            <p class="is-size-4">
              Monaghan by OverScore Media is an open-source template built using Nuxt.js and Bulma.
            </p>
            <hr />
            <Heading text="Meet the Team:" />
            <TeamCard />
            <hr />
            <Heading id="how-did" text="How did We Make our Website?" />
            <p class="is-size-4">
              Well, if you really want to know...
            </p>
            <LinkCard
              title="Web Framework"
              :items="['Nuxt.js', '(It\'s based on Vue.js and inspired by Next.js)']"
              :links="['https://nuxtjs.org/']"
            />
            <LinkCard
              title="Styling"
              :items="['Bulma', 'Custom SCSS', '@nuxtjs/style-resources', 'Prism.js']"
              :links="['https://bulma.io', 'https://sass-lang.com/', 'https://www.npmjs.com/package/@nuxtjs/style-resources', 'https://prismjs.com/']"
            />
            <LinkCard
              title="Code Editors"
              :items="['VS Code', 'Notepad++', 'Brackets', 'Micro']"
              :links="['https://code.visualstudio.com/', 'https://notepad-plus-plus.org/', 'http://brackets.io/', 'https://micro-editor.github.io/']"
            />
            <LinkCard
              title="Fonts"
              :items="['Fontawesome 5', 'Inter', 'Fira Code', 'SixCaps', 'openDyslexic']"
              :links="['https://fontawesome.com/start', 'https://rsms.me/inter/', 'https://github.com/tonsky/FiraCode', 'https://fonts.google.com/specimen/Six+Caps'
                       , 'https://gumroad.com/l/OpenDyslexic']"
            />
            <LinkCard
              title="Animations"
              :items="['Anime.js', 'AoS.js']"
              :links="['https://animejs.com/', 'https://michalsnik.github.io/aos/']"
            />
            <LinkCard title="Other Libraries" :items="['Lodash']" :links="['https://lodash.com/']" />
            <LinkCard
              title="Development Tools"
              :items="['Ava.js', 'ESLint', 'Prettify']"
              :links="['https://github.com/avajs/ava', 'https://eslint.org/', 'https://github.com/google/code-prettify']"
            />
            <LinkCard
              title="Code/Website Hosting"
              :items="['GitLab', 'Netlify']"
              :links="['https://gitlab.com/', 'https://netlify.com']"
            />
            <hr />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Heading from '~/components/Heading'
import Hero from '~/components/Hero'
import LinkCard from '~/components/LinkCard'
import TeamCard from '~/components/TeamCard'

export default {
  components: {
    Hero,
    Heading,
    LinkCard,
    TeamCard
  }
}
</script>
