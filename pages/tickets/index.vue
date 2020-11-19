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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, route }) {
    await store.dispatch('loadTickets', route.query.code)
  },
  computed: {
    ...mapGetters({
      tickets: 'getTickets',
    }),
  },
  methods: {
    onTicketChoice(ticket) {
      /** @TODO Implement method */
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
