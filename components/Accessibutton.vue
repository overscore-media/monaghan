<!---
  The Accessibutton is based on https://github.com/hendrixfan/vue-accessibility-toolbar, and it
  is loaded into every page in the bottom-left.

  Upon clicking the button, a user can choose from the following options:

  - Invert the Colours of the Page
  - Highlight all Hyperlinks in Black and Yellow
  - Turn everything greyscale
  - Increase the font size of many items on the page
  - Make most of the text on the page use the openDyslexic font

-->

<template>
  <div class="a11y-button-toolbar">
    <span class="toolbar-fab" @click="showToolbar = !showToolbar">
      <Icon :i="mdiHuman" color="#272727" title="Accessibility Toolbar Button" />
    </span>
    <transition name="fade">
      <div v-if="showToolbar" class="a11y-toolbar">
        <ul class="a11y-items">
          <li class="a11y-item">
            <a
              class="a11y-menu-item"
              :data-tooltip="invertColorsTooltip"
              :class="{ active: a11yStates.inverted }"
              :aria-label="invertColorsTooltip"
              @click="toggleState('inverted')"
            >
              <Icon :i="mdiInvertColors" class="a11y-menu-item-icon" title="Colour Inversion Button" />
            </a>
          </li>
          <li>
            <a
              class="a11y-menu-item"
              :data-tooltip="highlightLinksTooltip"
              :class="{ active: a11yStates.highlighted }"
              :aria-label="highlightLinksTooltip"
              @click="toggleState('highlighted')"
            >
              <Icon :i="mdiFlashlight" class="a11y-menu-item-icon" title="Highlight Hyperlinks Button" />
            </a>
          </li>
          <li>
            <a
              class="a11y-menu-item"
              :data-tooltip="grayscaleTooltip"
              :class="{ active: a11yStates.greyscaled }"
              :aria-label="grayscaleTooltip"
              @click="toggleState('greyscaled')"
            >
              <Icon :i="mdiWaterOff" class="a11y-menu-item-icon" title="Greyscale Toggle Button" />
            </a>
          </li>
          <li>
            <a
              class="a11y-menu-item"
              :data-tooltip="accessibleFontSizeTooltip"
              :class="{ active: a11yStates.accessibleFontSize }"
              :aria-label="accessibleFontSizeTooltip"
              @click="toggleState('accessibleFontSize')"
            >
              <Icon
                :i="mdiFormatFontSizeIncrease"
                class="a11y-menu-item-icon"
              />
            </a>
          </li>
          <li>
            <a
              class="a11y-menu-item"
              :data-tooltip="dyslexicFontTooltip"
              :class="{ active: a11yStates.dyslexicFont }"
              :aria-label="dyslexicFontTooltip"
              @click="toggleState('dyslexicFont')"
            >
              <Icon :i="mdiEyeOutline" class="a11y-menu-item-icon" title="openDyslexic Font Toggle Button" />
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
// Importing the Material Design Icons and the custom Icon component
import {
  mdiEyeOutline,
  mdiFlashlight,
  mdiFormatFontSizeIncrease,
  mdiHuman,
  mdiInvertColors,
  mdiWaterOff
} from '@mdi/js'

import Icon from '~/components/Icon'

export default {
  components: {
    Icon
  },
  props: {
    invertColorsTooltip: {
      type: String,
      default: 'Invert Colors'
    },
    highlightLinksTooltip: {
      type: String,
      default: 'Highlight Links'
    },
    grayscaleTooltip: {
      type: String,
      default: 'Desaturate'
    },
    accessibleFontSizeTooltip: {
      type: String,
      default: 'Increase Tooltip Size'
    },
    dyslexicFontTooltip: {
      type: String,
      default: 'OpenDyslexic Font'
    }
  },
  data: () => ({
    a11yStates: {
      inverted: false,
      highlighted: false,
      accessibleFontSize: false,
      greyscaled: false,
      dyslexicFont: false
    },
    showToolbar: false,
    // Icons
    mdiHuman,
    mdiInvertColors,
    mdiFlashlight,
    mdiWaterOff,
    mdiFormatFontSizeIncrease,
    mdiEyeOutline
  }),
  computed: {
    links() {
      // Gets a list of all the currently-available hyperlinks
      return [...document.querySelectorAll('a')]
    }
  },
  watch: {
    a11yStates: {
      handler() {
        // Watches for changes in the accessibility settings from the browser's localStorage
        localStorage.setItem('a11y-settings', JSON.stringify(this.a11yStates))
      },
      deep: true
    }
  },
  created() {
    // Every 3000 milliseconds, all links are highlighted if highlighting is enabled
    if (process.browser) {
      setInterval(() => {
        for (const state in this.a11yStates) {
          if (state === 'highlighted') {
            // eslint-disable-next-line nuxt/no-globals-in-created
            this.highlightLinks(Array.from(document.querySelectorAll('a')))
          }
        }
      }, 3000)
    }
  },
  mounted() {
    // Gets the accessibility settings from the browser's localStorage
    if (localStorage.getItem('a11y-settings')) {
      this.a11yStates = JSON.parse(localStorage.getItem('a11y-settings'))
      for (const state in this.a11yStates) {
        if (this.a11yStates[state]) {
          this.applyState(state)
        }
      }
    }
  },
  methods: {
    toggleState(state) {
      this.a11yStates[state] = !this.a11yStates[state]
      this.applyState(state)
    },
    applyState(state) {
      if (state === 'inverted') {
        this.a11yStates[state]
          ? document.documentElement.classList.add('a11y-contrast')
          : document.documentElement.classList.remove('a11y-contrast')
      } else if (state === 'greyscaled') {
        this.a11yStates[state]
          ? document.documentElement.classList.add('a11y-greyscale')
          : document.documentElement.classList.remove('a11y-greyscale')
      } else if (state === 'highlighted') {
        this.highlightLinks(this.links)
      } else if (state === 'accessibleFontSize') {
        this.a11yStates[state]
          ? document.body.classList.add('a11y-font')
          : document.body.classList.remove('a11y-font')
      } else if (state === 'dyslexicFont') {
        this.a11yStates[state]
          ? document.body.classList.add('dyslexic-font')
          : document.body.classList.remove('dyslexic-font')
      }
    },
    highlightLinks(linkList) {
      for (const link of linkList) {
        if (!link.classList.contains('a11y-menu-item')) {
          this.a11yStates.highlighted
            ? link.classList.add('a11y-highlight-link')
            : link.classList.remove('a11y-highlight-link')
        }
      }
    },
    invertContrast(percent) {
      document.body.style.setProperty('filter', `invert(${percent})`)
    }
  }
}
</script>

<style lang="scss">
// Styles the component adds to the page

@font-face {
  font-family: "OpenDyslexic";
  src: url("~assets/fonts/OpenDyslexic-Regular.woff2") format("woff2");
  font-style: normal;
  font-weight: normal;
}

.a11y-font {
  font-size: 1.25em;
  font-size: 1.25rem;
}

.a11y-greyscale {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
  min-height: 100vh;
}

.a11y-contrast {
  -webkit-filter: invert(100%);
  -moz-filter: invert(100%);
  filter: invert(100%);
  min-height: 100vh;
}

.a11y-highlight-link {
  background-color: black !important;
  color: yellow !important;
  text-decoration: underline !important;

  svg {
    path {
      fill: yellow;
    }
  }

  &:visited {
    background-color: black !important;
    color: yellow !important;
    text-decoration: underline !important;
  }

  &:active {
    background-color: black !important;
    color: yellow !important;
    text-decoration: underline !important;
  }

  &:hover {
    background-color: black !important;
    color: yellow !important;
    text-decoration: underline !important;
  }
}

.dyslexic-font {
  font-family: "OpenDyslexic" !important;
}
</style>

<style scoped>
/* Styles specific to the Accessibutton */

ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute !important;
  bottom: 105%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute !important;
  bottom: 105%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.a11y-items {
  list-style-type: none;
}

.a11y-toolbar {
  width: 80vw;
  position: absolute !important;
  left: 65px;
  bottom: 50%;
  margin-bottom: 2px;
}

.a11y-menu-item-icon {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.a11y-menu-item {
  border-radius: 100px;
  border: 2px solid #2196f3;
  text-align: center;
  float: left;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
  background: white;
  color: black;
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}

.a11y-menu-item:hover {
  background: #8884ff;
}

.active {
  background-color: #8884ff;
}

.a11y-button-toolbar {
  position: fixed !important;
  width: 56px;
  left: 3vw;
  bottom: 4vh;
  z-index: 999;
}

.toolbar-fab {
  cursor: pointer;
  position: absolute !important;
  bottom: 0;
  display: block;
  width: 56px;
  height: 56px;
  background-color: #8884ff;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.toolbar-fab > svg {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -53%);
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
