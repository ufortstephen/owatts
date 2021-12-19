import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
const baseUrl = 'https://uat.owatts.io/api/v1/'
const spectaUrl = 'https://dfs.sterlingapps.p.azurewebsites.net'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    options: [],
    products: [],
    accessories: [
      {
        id: 1,
        name: 'Kike Gas',
        description: 'Kike Gas Description',
        image: 'kike-gas.png',
      },
      {
        id: 2,
        name: 'Amina',
        description: 'Amina Description',
        image: 'Amina-1.0.png',
      },
      {
        id: 3,
        name: 'Chioma Generator',
        description: 'Chioma Generator Description',
        image: 'Chioma-generator-1.1.png',
      },
      {
        id: 4,
        name: 'Chioma Hybrid EMS',
        description: 'Chioma Hybrid EMS Description',
        image: 'Chioma-Hybrid-EMS-Power-1.0.png',
      },
      {
        id: 5,
        name: 'EV Charger',
        description: 'EV Charger Description',
        image: 'eV-Charger.png',
      },
    ],
    accessory: [],
    cart: [],
    order: {
      products: [],
    },
    isLoggedIn: null,
    token: null,
    spectaBanks: '',
    scoreResponse: '',
    score: '',
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    LOGIN(state, data) {
      state.isLoggedIn = data
    },
    SET_TOKEN(state, data) {
      state.token = data.access_token
    },
    OPTIONS(state, data) {
      state.options = data
    },
    PRODUCTS(state, data) {
      state.products = data
    },
    ADD_ITEM_TO_CART: (state, data) => {
      state.cart.push(data)
      console.log(state.order)
      state.order.products.push({
        product_id: data.id,
        quantity: 1,
        price: '',
      })
    },
    SPECTA_BANKS(state, data) {
      state.spectaBanks = data
    },
    SCORE_RESPONSE(state, data) {
      state.scoreResponse = data
    },
    SPECTA_SCORE(state, data) {
      state.score = data
    },
  },
  actions: {
    async login({ commit }, userDetails) {
      const res = await axios.post(baseUrl + 'auth/login', userDetails)
      commit('LOGIN', res.data)
      commit('SET_TOKEN', res.data)
      console.log('res')
      return res
    },
    async register({ dispatch }, userDetails) {
      const res = await axios.post(baseUrl + 'auth/register', userDetails)
      dispatch('REGISTER', res)
      console.log('res')
      return res
    },
    async getOptions({ commit }) {
      const res = await axios.get(baseUrl + 'options')
      commit('OPTIONS', res.data.data.product_categories)
      commit('PRODUCTS', res.data.data.products)
      console.log(res.data.data.product_categories)
      return res
    },
    async makeOrder({ dispatch }, order) {
      const res = await axios.post(baseUrl + 'orders', {
        Authorization: `Bearer ${this.$store.getters('getToken')}`,
        order,
      })
      dispatch('ORDERR', res.data)
      console.log(res)
      return res
    },
    async getSpectaBanks({ commit }) {
      const res = await axios.get(spectaUrl + '/api/SpectaScore/GetBanks')
      commit('SPECTA_BANKS', res.data)
      console.log(res)
      return res
    },
    async requestSpectaTicket({ dispatch, commit }, userDetails) {
      const res = await axios.post(
        spectaUrl + '/api/SpectaScore/RequestTickets',
        userDetails,
      )
      dispatch('SPECTA', res)
      commit('SCORE_RESPONSE', res.data.result._scoreResponse)
      console.log('res')
      return res
    },
    async getSpectaScore({ dispatch, commit }, userDetails) {
      const res = await axios.post(
        spectaUrl + '/api/SpectaScore/GetSpectaScore',
        userDetails,
      )
      dispatch('SPECTA_SCORE', res)
      commit('SPECTA_SCORE', res)
      console.log(res)
      return res
    },
  },

  getters: {
    getProduct: (state) => (id) => {
      return state.options.find((option) => option.name === id)
    },
    getToken: (state) => {
      return state.token
    },
    getTrxId: (state) => {
      return state.scoreResponse.TransactionId
    },
    getSingleProduct: (state) => (id) => {
      return state.products.filter((option) => option.categories[0].name === id)
    },
    getAccessory: (state) => (id) => {
      state.accessory = state.accessories.find(
        (accessory) => accessory.name === id,
      )
    },
  },
  modules: {},
  plugins: [createPersistedState()],
})
