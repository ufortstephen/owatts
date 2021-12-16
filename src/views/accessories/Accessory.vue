<template>
  <div class="">
    <div class="fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <AppHeader />
    </div>
    <!-- <CContainer class="my-4" style="margin-top: 5rem">
      <AppBreadcrumb class="bread" style="font-size: small !important" />
    </CContainer> -->

    <div class="products">
      <div class="product__image px-3 text-center">
        <!-- <img src="@/assets/images/kike-gas.png" alt="" style="width: 80%" /> -->
        <img
          :src="require(`@/assets/images/${accessory.image}`)"
          alt="fr"
          style="width: 50%"
        />
      </div>
    </div>
    <div class="product__details p-3">
      <h2>{{ accessory.name }}</h2>
      <h6>Price: NGN 250,000</h6>
      <h6 class="mt-3">Quantity :</h6>
      <p class="add__btn my-4">
        <button @click="this.orderDetails.quantity--">
          <img src="@/assets/images/sub.png" alt="" />
        </button>
        <span> {{ orderDetails.quantity }} </span>
        <button @click="this.orderDetails.quantity++">
          <img src="@/assets/images/add.png" alt="" />
        </button>
      </p>
      <h6 class="mt-3 fw-bold">Description</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius tempor,
        sed purus vehicula eu. Viverra tortor a in morbi nulla aliquam. Netus
        cum eleifend vitae, eget. In elit vestibulum cursus nisl felis, aliquam
        facilisis. Pellentesque dignissim arcu dolor adipiscing. Posuere sed
        congue leo placerat feugiat volutpat sit leo. Arcu, neque, habitant mi,
        sagittis quis eu sit. Mauris vel nisi rhoncus bibendum.
      </p>
      <div class="mb-4">
        <h6 class="text-info pointer" @click="visibleA = !visibleA">
          View product manual here
          <span class="pl-2"><CIcon icon="cil-chevron-bottom" /></span>
        </h6>
        <CRow>
          <CCol :xs="12">
            <CCollapse :visible="visibleA">
              <div class="mt-3">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </p>
              </div>
            </CCollapse>
          </CCol>
        </CRow>

        <button class="btn-place__order">ADD TO CART</button>
        {{ orderDetails }} <br />
        jh
        {{ accessory }}
        <!-- </DocsExample> -->
        <!-- </CCardBody> -->
      </div>
    </div>
    <!-- <DetailComponent /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '@/components/HomeHeaderComponent.vue'
import { ref } from 'vue'

export default {
  name: 'Login',
  components: {
    // AppBreadcrumb,
    // DetailComponent,
    AppHeader,
    // ShopCategory,
    // AppFooter,
  },
  computed: {
    ...mapState(['sidebarUnfoldable', 'options', 'accessories', 'accessory']),
    getItem() {
      return this.$store.getters.getAccessory(this.$route.params.id)
    },
  },
  data() {
    const visible = ref(false)
    const visibleA = ref(false)
    const visibleB = ref(false)
    const visibleHorizontal = ref(false)
    return {
      visible,
      visibleA,
      visibleB,
      visibleHorizontal,
      product: [],
      orderDetails: {
        productId: this.accessory,
        quantity: 1,
      },
    }
  },
  methods: {
    ...mapActions(['getOptions', 'getAccessory']),
  },

  async created() {
    // this.getOptions()
    this.getAccessory(this.$route.params.id)
    this.product = this.getItem
  },
}
</script>

<style>
p,
a {
  font-size: small;
  color: #000;
}
</style>

<style scoped>
.pointer {
  cursor: pointer;
}
.products {
  display: grid;
  grid-template-columns: 65% 1fr;
  min-height: 93vh;
}
.product__image {
  /* background: #c5c5c5; */
  position: fixed;
  width: 65%;
  height: 100%;
  top: 3.8rem;
  /* background-image: url(@/assets/images/home11.png); */
  background-color: #f8f8f8;
  background-attachment: fixed;
  /* background-size: 100% 120%; */
  background-size: contain;
  /* background-repeat: no-repeat; */
  padding-top: 4rem;
}
.product__details {
  position: absolute;
  /* left: 55%; */
  margin-right: 10rem;
  top: 4rem;
}
.bg__one {
  background-image: url(@/assets/images/solar-panel.png);
  background-attachment: fixed;
  background-size: cover;
}
.btn-place__order {
  width: 100%;
  margin: 2rem 0;
  background: #000;
  font-size: small;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 8px;
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
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px;
    margin: 1.75rem auto;
  }
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
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px;
    margin: 1.75rem auto;
  }
}

.add__btn {
  width: max-content;
  background-color: #e5e5e5;
  /* padding-left: 0.6rem; */
  /* padding-right: 0.6rem; */
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
</style>
