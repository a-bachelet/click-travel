export default {
  setDestinations({ destinations }, newDestinations) {
    destinations.splice(0, destinations.length)
    destinations.push(...newDestinations)
  },
  setTickets({ tickets }, newTickets) {
    tickets.splice(0, tickets.length)
    tickets.push(...newTickets)
  },
}
