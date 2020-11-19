export default {
  setDestinations({ destinations }, newDestinations) {
    destinations.splice(0, destinations.length)
    destinations.push(...newDestinations)
  },
}
