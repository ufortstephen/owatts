<template>
  <div>
    <h2 class="mb-4">Orders</h2>
    <!-- {{ orders }} -->
    <div class="products__container px-0">
      <div
        class="product__card card"
        v-for="(product, index) in orders"
        :key="index"
      >
        <!-- <img :src="product.image_url" alt="fr" class="image" /> -->
        <!-- <img
                :src="'@/assets/images/' + product.image"
                alt="fr"
                class="image"
              /> -->
        <!-- <img
          :src="require(`@/assets/images/${product.image}`)"
          alt="fr"
          class="image"
        /> -->

        <div class="category__name py-3 pl-2">
          <div class="category__desc p-2">
            <router-link
              :to="{ path: `/reservations/${product.products[0].product_id}` }"
              class="text-dark text-underline"
            >
              View order
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'Reservations',
  data() {
    return {
      orders: '',
      baseUrl: 'https://uat.owatts.io/api/v1/',
    }
  },
  computed: {
    ...mapState(['cart', 'myOrders', 'token']),
  },
  methods: {
    ...mapActions(['']),
    async getOrders() {
      try {
        const res = await axios.get(this.baseUrl + 'orders', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.orders = res.data.data
        console.log(this.orders)
      } catch (error) {
        console.log(error)
      }
    },
  },
  async created() {
    this.getOrders()
  },
}
</script>

<style scoped>
tr {
  font-size: small;
  cursor: pointer;
}
.rounded__pill {
  background: rgb(235, 237, 239);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}
.dropdown-item {
  font-size: small;
}
.dropdown-toggle::after {
  display: none !important;
}
.table th,
.table td {
  vertical-align: baseline;
}
.products__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  row-gap: 3rem;
}

.product__card {
  width: 100%;
  height: 20px;
  /* padding: 2rem; */
  /* background: #f8f8f881; */
}
.card {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 9px;
  height: max-content;
}
.category__name {
  position: relative;
  background-image: url(@/assets/images/lp2.jpg);
  background-size: contain;
  box-shadow: 0px 0px 2px 1px #c5c5c5;
}
.category__desc {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 50px;
  background-color: #fff;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
}
.product__card {
  border-radius: 6px;
}
h5 {
  font-size: 18px;
}

.view__products-btn {
  position: relative;
  background: #303030;
  font-size: 11px;
  text-align: center;
  color: #fff;
  border: none;
  outline: none;
  width: 80%;
  padding: 14px 20px 14px 20px;
  border-radius: 7px;
  display: block !important;
}

a:hover {
  text-decoration: none;
}

.product__card img {
  width: 100%;
  height: 250px;
}
.card {
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 9px;
  height: max-content;
}
.category__name {
  /* background: #f8f8f8; */
  height: 200px;
  border-radius: 10px;
}
.product__card {
  border-radius: 6px;
}
</style>
