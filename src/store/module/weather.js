import axios from 'axios'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/'

const state = {
  weather: {},
  locations: []
}

const getters = {
  weather: state => JSON.parse(JSON.stringify(state.weather)),
  locations: state => state.locations
}

const actions = {

  async fetchLocation ({ commit }, query) {
    const response = await axios.get(`/api/location/search/?query=${query}`)
    const parsed = JSON.stringify(response.data)

    localStorage.setItem('dataLocation', parsed)
    commit('setLocation', response.data)
  },

  async fetchRefresh ({ commit }, id) {
    const response = await axios.get(`api/location/${id}/`)
    const parsed = JSON.stringify(response.data)

    localStorage.setItem('dataWeather', parsed)
    commit('setWeather', response.data)
  },

  async fetchWeather ({ commit }, id) {
    if (localStorage.getItem('dataWeather')) {
      const data = JSON.parse(localStorage.getItem('dataWeather'))

      commit('setWeather', data)
    } else {
      const response = await axios.get(`api/location/${id}/`)
      const parsed = JSON.stringify(response.data)

      localStorage.setItem('dataWeather', parsed)
      commit('setWeather', response.data)
    }
  }
}

const mutations = {
  setWeather (state, payload) {
    state.weather = payload
  },

  setLocation (state, payload) {
    state.locations = payload
  }
}

export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}
