<template>
  <div>
    <ul>
      <li
        v-for="(ticket, idx) in tickets"
        :key="idx"
        class="card"
        @click="onTicketChoice(ticket)"
      >
        <div v-for="(value, key) in ticket" :key="key">
          {{ key.toUpperCase() }} : {{ value }}
        </div>
      </li>
    </ul>
    <div v-if="choosenTicket">
      <Ticket :ticket="choosenTicket" />
    </div>
    <NuxtLink to="/">Retourner à l'accueil</NuxtLink>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, route }) {
    await store.dispatch('loadTickets', route.query.code)
  },
  data() {
    return {
      choosenTicket: null,
    }
  },
  computed: {
    ...mapGetters({
      tickets: 'getTickets',
    }),
  },
  methods: {
    onTicketChoice(ticket) {
      this.choosenTicket = ticket
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  margin: 15px 0;
  width: 350px;
  cursor: pointer;
}

.card:hover {
  background-color: #000;
  color: #fff;
}
</style>
