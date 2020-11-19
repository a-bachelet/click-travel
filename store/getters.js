export default {
  getDestinations({ destinations }) {
    return destinations
  },
  getDreamDestinations({ destinations }) {
    return destinations.filter((d) => d.isDreamDestination)
  },
}
