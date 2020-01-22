export const state = () => ({
  allPages: [],
  blogPosts: [],
  siteInfo: []
})

export const mutations = {
  SET_INFO(state, data) {
    state.siteInfo = data
  },
  SET_PAGES(state, data) {
    state.allPages = data
  },
  SET_POSTS(state, data) {
    state.blogPosts = data
  }
}

// More blogpage functionality; thanks https://github.com/tylermercer/nuxt-netlifycms-boilerplate
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo')
    await dispatch('getBlogPosts')
    await dispatch('getPages')
  },
  async getBlogPosts({ state, commit }) {
    const context = await require.context('~/content/blog/', false, /\.json$/)

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('SET_POSTS', searchposts.reverse())
  },
  async getPages({ state, commit }) {
    const context = await require.context('~/content/pages/', false, /\.json$/)

    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/page/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('SET_PAGES', pages)
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json')
    commit('SET_INFO', info)
  }
}
