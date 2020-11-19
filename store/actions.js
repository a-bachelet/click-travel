import service from './service'

export default {
  async loadDestinations({ commit }) {
    const destinations = await service.getDestionations()
    commit('setDestinations', destinations)
  },
}
