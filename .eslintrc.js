/* 
  This is the big ESLint config file for the whole repository
  As annoying as it may be sometimes, learning to play nice with ESLint
  will save you time in the long run, and make your code cleaner/more consistent
*/

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    '@nuxtjs',
    'plugin:nuxt/recommended' 
  ],
  plugins: [
    'prettier',
    'import',
    'node',
    'standard',
    'vue'
  ],
  rules: { // Sanity enhancers; not necessary, though
    "vue/html-self-closing": "off",
    "space-before-function-paren": "off",
    "quotes": ["warn", "single"],
    "semi": [2, "never"],
    "no-unused-vars": "off",
    "object-shorthand": ["error", "always"],
    "sort-imports": ["warn", {
      "memberSyntaxSortOrder": ["all", "multiple", "single", "none"],
      "ignoreCase": true
    }],
    "import/order": "off",
    "vue/require-default-prop": 0,
    "vue/no-v-html": 0 // Technically not super safe, but the only place it's used is for the blog page, so...
  },
  "ignorePatterns": ["pages/blog/"], // Because ESLint freaks out at the blog pages
}
