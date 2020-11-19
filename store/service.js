import axios from 'axios'

export default {
  async getDestionations() {
    const destinations = await axios.get(
      'http://travel-api.clicksomeone.com/destinations'
    )

    return destinations.data
  },
  async getTickets(code = '') {
    const tickets = await axios.get(
      `http://travel-api.clicksomeone.com/tickets`,
      {
        params: {
          filter: {
            where: {
              to: code,
            },
          },
        },
      }
    )

    return tickets.data
  },
}
