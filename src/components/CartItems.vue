<template>
  <div class="row item py-3 mb-4" v-for="cartItem in cart" :key="cartItem.id">
    <div class="col-md-3">
      <!-- {{ cartItem.images }} -->
      <div class="box">
        <img
          :src="
            'https://uat.owatts.io/storage/catalog/' + cartItem.images[0].image
          "
          alt="fr"
          class="image"
        />
      </div>
    </div>
    <div class="col-md-9">
      <div class="d-flex justify-content-between w-100 w-md-75 pt-3">
        <div>
          <h6 style="font-weight: bold">{{ cartItem.name }}</h6>

          <p class="text-mted small w-100 w-md-50">
            {{ cartItem.short_description }}
          </p>
        </div>
        <div></div>
      </div>
      <div class="d-flex justify-content-between w-100 w-md-75">
        <p class="add__btn">
          <button @click="decQty">&minus;</button>
          <span> {{ quantity }} </span>
          <button @click="incQty">&plus;</button>
        </p>
        <a style="color: #2050fd">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      quantity: 1,
    }
  },

  methods: {
    decQty() {
      this.quantity--
      if (this.quantity < 1) {
        this.quantity = 1
      }
    },
    incQty() {
      this.quantity++
      // if (this.quantity < 0) {
      //   this.quantity = 0
      // }
    },
  },

  computed: {
    ...mapState(['cart']),
  },
}
</script>

<style scoped>
.item:hover {
  cursor: pointer;
  box-shadow: 0 0.5rem 0.8rem rgb(0 0 21 / 7%) !important;
}
a:hover {
  cursor: pointer;
}
.box {
  width: 100%;
  height: 90%;
  background: #e6e6e6;
  border-radius: 15px;
  padding: 1rem;
  text-align: center;
}
img {
  height: 100%;
  width: 100%;
  margin: 0px auto;
}
.add__btn {
  width: max-content;
  background-color: #e5e5e5;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  border-radius: 8px;
}
.add__btn button {
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0.4rem;
}
.add__btn button:hover {
  box-shadow: 0 0.5rem 0.8rem rgb(0 0 21 / 7%) !important;
}

.add__btn span {
  background-color: #fff;
  font-weight: bold;
  padding: 0.7rem;
}

@media (max-width: 991px) {
  .item {
    margin: 0.5px 0.3rem;
    box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 15%) !important;
    padding: 1rem 0;
    border-radius: 5px;
  }
}
</style>
