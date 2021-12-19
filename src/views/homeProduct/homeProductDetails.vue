<template>
  <div class="">
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <AppHeader />
    </div>
    <!-- <CContainer class="my-4" style="margin-top: 5rem">
      <AppBreadcrumb class="bread" style="font-size: small !important" />
    </CContainer> -->
    <div class="products">
      <div class="product__image px-3 text-center">
        <!-- <img src="@/assets/images/kike-gas.png" alt="" style="width: 80%" /> -->
        <!-- <img src="@/assets/images/solar.png" alt="fr" style="width: 100px" /> -->
        <div class="carousel__container">
          <carousel :items-to-show="3">
            <slide v-for="slide in 10" :key="slide">
              <div class="p-3 mx-3 image__container">
                <img
                  src="@/assets/images/solar.png"
                  alt=""
                  style="width: 50px"
                  width="50px"
                />
              </div>
              <!-- {{ item }} -->
            </slide>

            <template #addons>
              <navigation />
              <!-- <pagination /> -->
            </template>
          </carousel>
        </div>
      </div>
    </div>
    <!-- <div class="products">
      <div
        class="product__image px-3"
        :style="{
          'background-image': 'url(' + item.categories[0].image_url + ')',
        }"
      >
        
      </div>
    </div> -->
    <DetailComponent />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import DetailComponent from './ProductDetailComponent.vue'
// import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppHeader from '@/components/HomeHeaderComponent.vue'
// import AppFooter from '@/components/FooterComponentOne.vue'
// import ShopCategory from '@/components/ShopCategories.vue'
export default {
  name: 'Login',
  components: {
    // AppBreadcrumb,
    DetailComponent,
    AppHeader,
    // ShopCategory,
    // AppFooter,
    Carousel,
    Slide,
    // Pagination,
    Navigation,
  },

  computed: {
    ...mapState(['sidebarUnfoldable', 'options', 'products']),
  },

  data() {
    return {
      id: this.$route.params.name,
      found: [],
      item: 'gugug66',
      images: [],
    }
  },
  methods: {
    ...mapActions(['getOptions']),
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
  },

  async created() {
    this.getOptions()
    this.findProduct()
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
.products {
  display: grid;
  grid-template-columns: 65% 1fr;
  min-height: 93vh;
}
.product__image {
  /* background: #c5c5c5; */
  position: fixed;
  width: 57%;
  height: 100%;
  top: 3.8rem;
  background-image: url(@/assets/images/home11.png);
  background-color: #f8f8f8;
  /* background-attachment: fixed; */
  /* background-size: 100% 120%; */
  /* background-size: contain; */
  background-repeat: no-repeat;
  padding-top: 4rem;
  overflow: hidden;
}
.product__details {
  position: absolute;
  /* left: 55%; */
  margin-right: 10rem;
  top: 4rem;
  width: 48%;
}
.bg__one {
  background-image: url(@/assets/images/solar-panel.png);
  /* background-attachment: fixed; */
  background-size: cover;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
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
.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
  /* top: -1rem; */
}
.carousel__container {
  position: relative;
  bottom: 0;
  width: 60%;
  margin: 0px auto;
  height: 80%;
  display: flex;
  flex-direction: column-reverse;
}
.image__container {
  border-radius: 10px;
  background: #ced4da70;
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
    background-size: cover;
    background-repeat: no-repeat;
    height: max-content;
  }

  .carousel__container {
    margin: 2rem 0;
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
