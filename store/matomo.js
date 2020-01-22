export const state = () => ({
  consented: false,
  cookies: true,
  noped: false
})

export const mutations = {
  consented(state, noConsent) {
    state.consented = !noConsent
  },
  cookies(state, noCookies) {
    state.cookies = !noCookies
  },
  noped(state, iSaidNo) {
    state.noped = !iSaidNo
  }
}

export const actions = {
  cookieConsenter ({ commit }) {
    commit('consented')
  },
  cookieNoper ({ commit }) {
    commit('noped')
  }
}
/*
From https://github.com/pimlie/nuxt-matomo/blob/master/test/fixtures/basic/store/matomo.js

Uses https://nuxtjs.org/guide/vuex-store/

For cookie consent tracking as per https://github.com/pimlie/nuxt-matomo
*/
