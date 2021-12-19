<template>
  <div>
    <div class="product__details p-3" v-if="one">
      <h2>{{ item.name }}</h2>
      <p>
        {{ item.description }}
      </p>
      <!-- {{ cart }} -->

      <img src="" alt="" />
      <div v-if="home">
        <div class="form-group mt-2">
          <label for=""> <h3>Home address</h3> </label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="31, Sanusi Street, Idumota Lagos"
          />
        </div>
        <div class="form-group">
          <label for=""> <h3>Average electric bill</h3> </label>
          <div class="input-group mb-5">
            <input
              type="text"
              class="form-control"
              placeholder="$200"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append" style="background: transparent">
              <span
                class="input-group-text"
                style="background: transparent"
                id="basic-addon2"
                ><small>/ Month</small></span
              >
            </div>
          </div>
        </div>
        <div
          class="mb-4"
          style="cursor: pointer; color: #2050fd"
          @click="toggleHome"
        >
          My home is new or being built
        </div>
      </div>

      <div v-if="built">
        <div class="form-check">
          <label class="check">
            <h6 style="font-weight: bold">My home is new</h6>
            <small style="font-size: small; position: relative; top: -1rem"
              >The structure is complete</small
            >
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>

          <label class="check">
            <h6 style="font-weight: bold">My home is being built</h6>
            <small style="font-size: small; position: relative; top: -1rem"
              >Construction is underway , or will start in the nexy year.</small
            >
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="check">
            <h6 style="font-weight: bold">
              I am planning on building a new home
            </h6>
            <small style="font-size: small; position: relative; top: -1rem"
              >Construction won't start for at least a year.</small
            >
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div class="form-group mt-5">
          <label for="">Home address</label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="31, Sanusi Street, Idumota Lagos"
          />
        </div>
        <div class="form-group">
          <label for="">Home square footage</label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="600"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append" style="background: transparent">
              <span
                class="input-group-text"
                style="background: transparent"
                id="basic-addon2"
                ><small>/ sq &nbsp; ft</small></span
              >
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Number of stories</label>
          <div class="input-group mb-5">
            <input
              type="text"
              class="form-control"
              placeholder="One storey"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append" style="background: transparent">
              <span
                class="input-group-text"
                style="background: transparent"
                id="basic-addon2"
                ><small> &nbsp; </small></span
              >
            </div>
          </div>
        </div>

        <div
          class="text-info mb-4"
          @click="toggleHome"
          style="cursor: pointer; color: #2050fd"
        >
          I've lived in my house for over a year.
        </div>
      </div>

      <button
        class="btn-place__order w-100"
        style="border-radius: 8px !important"
        @click="threeShow"
      >
        <small>NEXT</small>
      </button>
      <button
        class="btn-speak w-100 mt-4"
        style="border-radius: 8px !important"
      >
        <small>SPEAK TO AN AGENT</small>
      </button>
    </div>

    <CustomizeHomeProduct v-if="three" v-on:addToCart="addItem" />
    <CartModal v-if="cartModalState" v-on:closeModal="closeModal" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CustomizeHomeProduct from '@/components/CustomizeHomeProduct.vue'
import CartModal from '@/components/AddedToCartModal.vue'
export default {
  name: 'Home Product Details',
  components: {
    CustomizeHomeProduct,
    CartModal,
  },
  data() {
    return {
      one: true,
      home: true,
      built: false,
      three: false,
      id: this.$route.params.name,
      found: [],
      item: '',
      cartItem: {
        id: '',
        quantity: 0,
      },
      cartModalState: false,
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
    ...mapActions(['getOptions']),
    ...mapMutations(['ADD_ITEM_TO_CART']),
    async findProduct() {
      console.log(this.products)
      this.products.forEach((element) => {
        console.log(element)
        if (element.name == this.id) {
          console.log(element.name)
          this.item = element
          console.log(this.id)
        } else {
          console.log('No')
        }
      })
    },
    closeModal() {
      this.cartModalState = false
    },
    addItem() {
      console.log(this.cartItem)
      this.cartItem.id = this.item.id
      this.cartItem.quantity = 1
      this.ADD_ITEM_TO_CART(this.item)
      this.cartModalState = true
    },
    toggleHome() {
      this.home = !this.home
      this.built = !this.built
    },
    threeShow() {
      this.one = false
      this.home = false
      this.built = false
      this.three = true
    },
  },
}
</script>

<style scoped>
.product__details {
  position: absolute;
  left: 60%;
  margin-right: 10rem;
  top: 4rem;
  width: 34%;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
}
.btn-speak {
  background: #fff;
  color: #202020;
  border: 1px solid #202020;
  outline: none;
  padding: 0.8rem 0;
}

label h3 {
  color: #000;
  font-size: medium;
  /* font-weight: 400; */
}

.input-group input {
  border-right: none;
}
.nav-link {
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: small;
  color: #000;
  border: 1px solid #000;
  margin: 0px;
}
.battery .nav-link {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: small;
  color: #000;
  border: 1px solid #000;
  margin: 0px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #303030;
}
input:focus {
  box-shadow: none;
  border-color: #ced4da;
}
input[type='text'],
input[type='password'] {
  height: 50px;
  border-radius: 6px;
  background: transparent !important;
  font-size: SMALL;
}
input[type='submit'] {
  width: 100%;
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  border-color: #c5c5c5;
}

@media (max-width: 1520px) {
  .product__details {
    margin-right: 2rem;
  }
}
@media (max-width: 570px) {
  .products {
    grid-template-columns: 1fr;
    min-height: max-content !important;
  }
  .product__image {
    /* background: #c5c5c5; */
    position: relative;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    height: 300px;
  }

  .product__details {
    position: relative;
    left: 0%;
    top: 4rem;
  }
  .product__details {
    margin-right: 0rem;
    width: 100%;
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px;
    margin: 1.75rem auto;
  }
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
  font-size: 19px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* border: 1px solid #c4c5c5; */
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
</style>
