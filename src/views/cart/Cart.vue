<template>
  <div>
    <div style="background: rgb(0, 0, 0)" class=""><AppHeader /></div>
    <div class="container">
      <h6 class="text-left text-md-left my-3">Items in Cart</h6>
    </div>
    <div class="items container px-3" v-if="cart.length > 0">
      <div>
        <CartItem class="mb-3" />
      </div>
      <div>
        <div class="order__summary rounded">
          <h5>Order Summary ( {{ cart.length }} )</h5>
          <!-- <div class="d-flex justify-content-between border-bottom">
            <div>
              <p class="text-muted mb-1">Checkout</p>
              <p class="mb-1">Solomon Benjamin</p>
              <p>solomonbenjamin@test.com</p>
            </div>
            <p class="text-info">Edit</p>
          </div> -->
          <!-- <div class="d-flex justify-content-between border-bottom mt-3">
            <div>
              <p class="text-muted mb-1">Billing Adress</p>
              <p class="mb-1">Solomon Benjamin</p>
              <p class="mb-1">3, aminu street, opposite luxury</p>
              <p class="mb-1">Surulere, Lagos</p>
              <p class="mb-1">Nigeria.</p>
            </div>
            <p class="text-info">Edit</p>
          </div> -->

          <div
            class="d-flex justify-content-between border-bottom mt-3"
            style="font-weight: bold"
          >
            <!-- <p>Sutotal</p>
            <p>$18,400</p> -->
          </div>
          <div class="d-flex justify-content-between border-bottom mt-3">
            <!-- <p>Shopping</p>
            <p>$18,400</p> -->
          </div>
          <div class="d-flex justify-content-between mt-3">
            <!-- <p>
              <span style="font-weight: bolder; color: #000">Total</span>
              (Inclusive of tax)
            </p>
            <p style="font-weight: bold">$18,400</p> -->
          </div>

          <h6 class="mt-4">Select mode of Payment</h6>

          <div class="form-check">
            <label class="check"
              ><small style="font-size: small"
                >Enabled Plan (Subscription)
              </small>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>

            <label class="check"
              ><small style="font-size: small">Plus Plan (Buy & Own)</small>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <!-- <label class="check"
              ><small style="font-size: small">Pay by green coin</small>
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label> -->
          </div>

          <button class="btn-place__order w-100 my-4" @click="placeOrder">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
    <div v-else class="container empty text-center">
      <h6>Your cart is empty</h6>
      <div class="d-flex justify-content-center mt-3" style="gap: 1rem">
        <button class="view__btn p-2 mb-4" @click="shop">
          CONTINUE SHOPPING</button
        ><button class="shop__btn p-2" @click="signIn">SIGN IN</button>
      </div>
    </div>
    <!-- {{ order }} -->
    <AppFooter />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CartItem from '@/components/CartItems.vue'
// import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppHeader from '@/components/HomeHeaderComponent.vue'
import AppFooter from '@/components/FooterComponentOne.vue'
import axios from 'axios'

export default {
  name: 'Login',
  components: {
    // AppBreadcrumb,
    AppHeader,
    // ShopCategory,
    CartItem,
    AppFooter,
  },
  computed: {
    ...mapState([
      'sidebarUnfoldable',
      'options',
      'cart',
      'order',
      'isLoggedIn',
      'token',
    ]),
    getProductCategories() {
      return this.$store.getters.getProduct(this.$route.params.id)
    },
  },
  data() {
    return {
      products: [],
      baseUrl: 'https://uat.owatts.io/api/v1/',
    }
  },
  methods: {
    ...mapActions(['getOptions', 'makeOrder']),
    shop() {
      this.$router.push('/shop')
    },
    signIn() {
      this.$router.push('/auth')
    },
    async placeOrder() {
      if (this.isLoggedIn) {
        // this.makeOrder(this.order)
        try {
          const res = await axios.post(this.baseUrl + 'orders', this.order, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
          console.log(res)
          this.$moshaToast(`Successfully made order`, {
            hideProgressBar: false,
            type: 'success',
            position: 'top-right',
          })
        } catch (error) {
          this.$moshaToast(`Error making order`, {
            hideProgressBar: false,
            type: 'danger',
            position: 'top-right',
          })
          console.log(error)
        }
      } else {
        this.$moshaToast('Login in to your account to process your order', {
          hideProgressBar: false,
          type: 'warning',
        })
        this.$router.push('auth')
      }
    },
  },

  async created() {
    this.getOptions()
  },
}
</script>

<style scoped>
.items {
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-gap: 4rem;
}
.order__summary {
  background: #f8f8f8;
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 14px;
}
h6,
p {
  color: #000;
}
html:not([dir='rtl']) .form-check {
  padding-left: 0em !important;
}
.form-check-label input {
  display: block;
  height: 45px;
  border-radius: 6px;
  background: transparent !important;
  font-size: SMALL;
  margin-top: 1rem;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 0px;
}

/* The check */
.check {
  display: block;
  position: relative;
  padding-left: 3.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #c4c5c5;
  border-radius: 10px;
}

/* Hide the browser's default radio button */
.check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.check:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.check input:checked ~ .checkmark {
  background-color: #2c2926;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.check .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.empty {
  height: 57vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.view__btn {
  width: max-content;
  background-color: #fff;
  height: 46px;
  font-size: small;
  border: 1px solid #000;
  border-radius: 8px;
}
.shop__btn {
  color: #fff;
  width: max-content;
  background-color: #303030;
  height: 46px;
  font-size: small;
  border: 1px solid #000;
  border-radius: 8px;
}

@media (max-width: 991px) {
  .items {
    grid-template-columns: 1fr;
  }
}
</style>
