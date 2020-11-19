import axios from 'axios'

export default {
  async getDestionations() {
    const destinations = await axios.get(
      'http://travel-api.clicksomeone.com/destinations'
    )

    return destinations.data
  },
}
