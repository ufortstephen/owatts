<template>
  <div>
    <!-- {{ item }} -->

    <div class="row">
      <div class="col-md-6">
        <h3>{{ item.name }}</h3>
        <p>{{ item.short_description }}</p>
        <!-- <img :src="item.images[0].image" alt="" /> -->
        <img
          :src="'https://uat.owatts.io/storage/catalog/' + item.images[0].image"
          alt="fr"
          class="image"
        />
      </div>
      <div class="col-md-6">
        <div>
          <div class="order__summary rounded">
            <h6 class="mt-4">Select mode of Payment</h6>
            <div class="form-check">
              <label class="check"
                ><small style="font-size: small">Pay Now </small>
                <input
                  type="radio"
                  name="pay"
                  v-model="pay"
                  :value="'payNow'"
                  checked
                />
                <span class="checkmark"></span>
              </label>

              <label class="check"
                ><small style="font-size: small">Pay Later</small>
                <input
                  type="radio"
                  name="pay"
                  v-model="pay"
                  :value="'payLater'"
                />
                <span class="checkmark"></span>
              </label>
            </div>

            <button class="btn-place__order w-100 my-4" @click="checkPayment">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Home Product Details',
  components: {},
  data() {
    return {
      one: true,
      home: true,
      built: false,
      three: false,
      id: this.$route.params.id,
      found: [],
      item: '',
      cartItem: {
        id: '',
        quantity: 0,
      },
      cartModalState: false,
      pay: 'payNow',
    }
  },
  computed: {
    ...mapState(['sidebarUnfoldable', 'options', 'products', 'cart']),
  },

  async created() {
    this.getOptions()
    this.findProduct()
    // this.$store.getters.getProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getOptions', 'getOrders']),
    ...mapMutations(['ADD_ITEM_TO_CART']),
    async findProduct() {
      console.log(this.products)
      this.products.forEach((element) => {
        console.log(element)
        if (element.id == this.id) {
          console.log(element.name)
          this.item = element
          console.log(this.id)
        } else {
          console.log('No')
        }
      })
    },
    checkPayment() {
      if (this.pay == 'payNow') {
        console.log(88)
      } else {
        this.$router.push('/reservations/checkout/specta')
      }
    },
  },
}
</script>

<style scoped>
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
</style>
