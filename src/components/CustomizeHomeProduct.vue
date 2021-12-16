<template>
  <div>
    <div class="product__details p-3">
      <h2>{{ item.name }}</h2>
      <p class="text-mued">
        {{ item.short_description }}
      </p>

      <h5>Current package details</h5>
      <p class="text-mted">
        Based on your selection, your power duration is <br />
        <span class="text-dark" style="font-size: 30px">1 Day</span>
      </p>

      <a
        class="text-info"
        type="button"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        Customize your order
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </a>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content p-3">
            <div class="modal-header border-none">
              <h5 class="modal-title" id="staticBackdropLabel">
                Customize Order
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style="color: #2c2926">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- <img src="@/assets/images/solar.png" alt="" /> -->

              <div class="d-flex">
                <div>
                  <h5>4.25kw solar panel</h5>

                  <p class="text-mted">
                    Based on your $200 utility bill, we recommend 1 Powerwall
                    battery to give you 1 day of whole home backup.
                  </p>
                </div>
                <div>$70,000</div>
              </div>
              <h6 class="my-2">Pawa battery</h6>
              <ul
                class="nav nav-pills mb-3 battery"
                id="pills-tab"
                role="tablist"
                style="gap: 1rem"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >0</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >1</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >2</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >3</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >4</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >5</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >&plus;</a
                  >
                </li>
              </ul>

              <div class="d-flex">
                <div>
                  <h5>1 powerwall battery</h5>

                  <p class="text-mued">
                    Based on your $200 utility bill, we recommend 1 Powerwall
                    battery to give you 1 day of whole home backup.
                  </p>
                </div>
                <div>$70,000</div>
              </div>

              <div class="form-group">
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
                <label for="">Average electric bill</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="$200"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div
                    class="input-group-append"
                    style="background: transparent"
                  >
                    <span
                      class="input-group-text"
                      style="background: transparent"
                      id="basic-addon2"
                      ><small>/ Month</small></span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">Roof area</label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="600"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div
                    class="input-group-append"
                    style="background: transparent"
                  >
                    <span
                      class="input-group-text"
                      style="background: transparent"
                      id="basic-addon2"
                      ><small>sq ft</small></span
                    >
                  </div>
                </div>
              </div>
              <button
                class="btn-place__order w-100"
                style="border-radius: 8px !important"
              >
                <small>SAVE CUSTOME</small>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="product__card border p-3 my-4">
        <div class="row">
          <div class="col-lg-7 pt-4">
            <h6 style="font-weight: bold">OWATTS Recommends</h6>
            <p>
              4.25 kw power wall, this recomme- ndation is based on the
              information you have provided. To increase the capacity of the
              power wall, you can customise order below.
            </p>
            <a
              class="text-info"
              type="button"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              Customize your order
              <i class="fa fa-caret-right" aria-hidden="true"></i>
            </a>
          </div>
          <div class="col-lg-5">
            <img src="@/assets/images/solar.png" alt="" />
          </div>
        </div>
      </div>

      <h5>What’s in the package</h5>

      <div class="d-flex my-4">
        <div class="col-md-4">
          <div class="cat__holder">
            <img src="@/assets/images/Vector.png" alt="" />
            <p class="count">3</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cat__holder">
            <img src="@/assets/images/batt.png" alt="" />
            <p class="count">3</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="cat__holder">
            <img src="@/assets/images/plug.png" alt="" />
            <p class="count">3</p>
          </div>
        </div>
      </div>
      <a
        class="text-info mb-4"
        type="button"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        View product manual here
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </a>

      <div class="order__summary">
        <h5>Order Summary</h5>
        <div class="d-flex justify-content-between">
          <p>Mounting structures</p>
          <p>$5,000</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Inverter</p>
          <p>$400</p>
        </div>
        <div class="d-flex justify-content-between">
          <p>Battery (x2)</p>
          <p>$8,000</p>
        </div>
        <div class="d-flex justify-content-between" style="font-weight: bold">
          <p>Estimated price</p>
          <p>$18,400</p>
        </div>
        <div
          class="d-flex justify-content-between border-top border-bottom mb-0 py-2"
        >
          <p>Tax</p>
          <p>$5,000</p>
        </div>
        <div class="d-flex justify-content-between" style="font-weight: bold">
          <p>Estimated price after tax</p>
          <p>$5,000</p>
        </div>
        <button
          class="btn-place__order w-100 my-3 mb-5"
          style="border-radius: 8px !important"
          @click="click"
        >
          ADD TO CART
        </button>
      </div>
    </div>
    <!-- <CartModal v-if="cartModalState" /> -->
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
// import CustomizeHomeProduct from '@/components/CustomizeHomeProduct.vue'
// import CartModal from '@/components/AddedToCartModal.vue'
export default {
  name: 'Home Product Details',
  components: {
    // CustomizeHomeProduct,
    // CartModal,
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
    click() {
      this.$emit('addToCart', 'bye')
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
.cat__holder {
  text-align: center;
  padding: 1.6rem 0;
  border-radius: 5px;
  background: #c5c5c5;
  position: relative;
  height: 120px;
}
.count {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #929292;
  position: absolute;
  right: 0.3rem;
  bottom: 0;
}
.product__details {
  position: absolute;
  left: 65%;
  margin-right: 10rem;
  top: 4rem;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  font-size: small;
}

label {
  color: #2c2926;
  font-size: medium;
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
  }
  .product__image {
    background: #c5c5c5;
    position: relative;
    width: 100%;
  }

  .product__details {
    position: relative;
    left: 0%;
    top: 4rem;
  }
  .product__details {
    margin-right: 0rem;
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px;
    margin: 1.75rem auto;
  }
}
</style>
