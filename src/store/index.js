import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    dogs: []
  },
  mutations: {
    setDogs(state, payload) {
      state.dogs = payload
    }
  },
  actions: {
    async fetchDogs({ commit }) {
      try {
        let response1 = await axios.get("https://dog.ceo/api/breeds/image/random/50")
        let response2 = await axios.get("https://dog.ceo/api/breeds/image/random/50")
        const data = response1.data.message.concat(response2.data.message)
        commit('setDogs', data)
      } catch (error) {
        console.log(error)
      }
    },
    async searchDogs(context, payload) {
      try {
        let response = await axios.get(`https://dog.ceo/api/breed/${payload}/images/random/50`)
        context.commit('setDogs', response.data.message)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getDogs: (state) => state.dogs
  }
})
