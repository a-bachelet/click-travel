<template>
  <div class="container">
    <div class="ticket left">
      <div class="line top">
        <div class="bp">
          <div>Boarding Pass</div>
          &nbsp;&nbsp;
          <img height="25px" width="25px" src="/airplane.svg" />
        </div>
        <div class="fc">{{ ticket.class }}</div>
      </div>
      <div class="line">
        <!-- PASSENGER -->
        <div class="passenger">
          <div class="title">PASSENGER</div>
          <div>{{ ticket.passenger.toUpperCase() }}</div>
        </div>
      </div>
      <div class="line">
        <!-- FLIGHT -->
        <div class="flight">
          <div class="title">FLIGHT</div>
          <div>{{ ticket.flight.toUpperCase() }}</div>
        </div>
        <!-- FROM -->
        <div class="from">
          <div class="title">FROM</div>
          <div>{{ ticket.from.toUpperCase() }}</div>
        </div>
        <!-- TO -->
        <div class="to">
          <div class="title">TO</div>
          <div>{{ ticket.to.toUpperCase() }}</div>
        </div>
        <!-- CLASS -->
        <div class="class">
          <div class="title">CLASS</div>
          <div>{{ ticket.class.toUpperCase() }}</div>
        </div>
      </div>
      <div class="line third">
        <!-- GATE -->
        <div class="gate">
          <div class="title">GATE</div>
          <div class="val">{{ ticket.gate.toUpperCase() }}</div>
        </div>
        <!-- TIME -->
        <div class="time">
          <div class="title">TIME</div>
          <div class="val">{{ ticket.time.toUpperCase().split(' ')[1] }}</div>
        </div>
        <!-- SEAT -->
        <div class="time">
          <div class="title">SEAT</div>
          <div class="val">{{ ticket.seat.toUpperCase() }}</div>
        </div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <div class="separator"></div>
        <!-- BARCODE -->
        <div class="barcode">
          <img
            style="height: 50px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57cfsKn1MWWQ5acSqOhOLDQDAHnaac4xinw&usqp=CAU"
            alt="barcode"
          />
        </div>
      </div>
      <div class="line bottom"></div>
    </div>
    <div class="ticket right">
      <div class="line top">
        <div class="bp">
          <div>Boarding Pass</div>
          &nbsp;&nbsp;
          <img height="25px" width="25px" src="/airplane.svg" />
        </div>
        <div class="fc">{{ ticket.class }}</div>
      </div>
      <div class="line">
        <!-- PASSENGER -->
        <div class="passenger">
          <div class="title">PASSENGER</div>
          <div>{{ ticket.passenger.toUpperCase() }}</div>
        </div>
      </div>
      <div class="line third">
        <!-- GATE -->
        <div class="gate">
          <div class="title">GATE</div>
          <div class="val">{{ ticket.gate.toUpperCase() }}</div>
        </div>
        <!-- TIME -->
        <div class="time">
          <div class="title">TIME</div>
          <div class="val">{{ ticket.time.toUpperCase().split(' ')[1] }}</div>
        </div>
        <!-- SEAT -->
        <div class="time">
          <div class="title">SEAT</div>
          <div class="val">{{ ticket.seat.toUpperCase() }}</div>
        </div>
      </div>
      <div class="line barcode">
        <img
          style="height: 50px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57cfsKn1MWWQ5acSqOhOLDQDAHnaac4xinw&usqp=CAU"
          alt="barcode"
        />
      </div>
      <div class="line bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
.ticket {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ecf0f1;
  background-color: #fcfcfc;
  border-radius: 25px;
  width: 650px;

  &.left {
    border-radius: 25px 0 0 25px;
    border-right: 2px dashed #dfe4ea;
  }

  &.right {
    width: 250px;
    border-radius: 0 25px 25px 0;
    border-left: 2px dashed #dfe4ea;

    .line.barcode {
      justify-content: right;
    }
  }
}
.line {
  height: 80px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.line.third {
  width: auto;
}
.line.top {
  color: white;
  flex-direction: column;
  background-color: #37a7dd;
  height: 75px;
}
.line.bottom {
  background-color: #37a7dd;
  height: 45px;
}
.left {
  .line.top {
    border-radius: 25px 0 0 0;
  }
  .line.bottom {
    border-radius: 0 0 0 25px;
  }
}
.right {
  .line.top {
    border-radius: 0 25px 0 0;
  }
  .line.bottom {
    border-radius: 0 0 25px 0;
  }
}
.title {
  color: #bdc3c7;
}
.bp {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px;
}
.fc {
  font-size: 15px;
}
.val {
  background-color: white;
  border: 1px solid #dfe4ea;
  padding: 3px;
}
</style>
