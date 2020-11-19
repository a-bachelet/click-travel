import service from './service'

export default {
  async loadDestinations({ commit }) {
    const destinations = await service.getDestionations()
    commit('setDestinations', destinations)
  },
  async loadTickets({ commit }, code) {
    const tickets = await service.getTickets(code)
    commit('setTickets', tickets)
  },
}
