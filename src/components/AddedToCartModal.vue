<template>
  <div class="modal__fixed" v-if="modal">
    <div class="modal__content">
      <div class="d-flex justify-content-between mb-3 align-items-center">
        <h6>Items added</h6>
        <button class="btn__cancel text-dark" @click="closeModal">
          <span>&times;</span>
        </button>
      </div>
      <div class="row item py-3 pb-5 mb-4 border-bottom">
        <div class="col-lg-4">
          <!-- {{ cart.images }} -->
          <div class="box">
            <img
              :src="
                'https://uat.owatts.io/storage/catalog/' +
                cart[cart.length - 1].images[0].image
              "
              alt="fr"
              class="image"
            />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="d-flex justify-content-between w-100 w-md-75 pt-3">
            <div>
              <h6 style="font-weight: bold">
                {{ cart[cart.length - 1].name }}
              </h6>

              <small class="text-mted small w-100 w-md-50">
                {{ cart[cart.length - 1].short_description }}
              </small>
            </div>
            <div>$7,000</div>
          </div>
        </div>
      </div>

      <div>
        <button class="w-100 view__btn" @click="goToCartPage">
          <span><CIcon icon="cil-cart" style="color: #ff7e00" /></span>VIEW IN
          CART ( {{ cart.length }} )</button
        ><button class="w-100 mt-3 shop__btn" @click="continueShopping">
          CONTUNUE SHOPPING
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      modal: true,
    }
  },

  computed: {
    ...mapState(['cart']),
  },

  methods: {
    closeModal() {
      this.$emit('closeModal', 'bye')
    },
    goToCartPage() {
      this.$router.push('/cart')
    },
    continueShopping() {
      this.$router.push('/shop')
    },
  },
}
</script>

<style scoped>
button {
  border: none;
  outline: none;
  /* background: transparent; */
}
.modal__fixed {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.548);
  overflow: auto;
}
.modal__content {
  position: absolute;
  top: 3.8rem;
  right: 0;
  background: #fff;
  width: 35%;
  height: max-content;
  padding: 1rem;
  border-radius: 10px;
}
.item:hover {
  cursor: pointer;
  box-shadow: 0 0.5rem 0.8rem rgb(0 0 21 / 7%) !important;
}
a:hover {
  cursor: pointer;
}
.box {
  width: 100%;
  height: 100%;
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

.btn__cancel {
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
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
@media (max-width: 720px) {
  .modal__content {
    width: 100%;
  }
  .box {
    width: 100%;
    height: 350px;
  }
  img {
    height: 100%;
    width: 100%;
    margin: 0px auto;
  }
}
</style>
