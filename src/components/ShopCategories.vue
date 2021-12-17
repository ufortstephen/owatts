<template>
  <div>
    <div class="section container" id="categories">
      <h4 class="col">Products</h4>
      <!-- {{ getProductCategories[0] }} <br /> -->
      <br />
      <!-- {{ products }} -->
      <div
        class="products__container px-3"
        v-if="getProductCategories.length > 1"
      >
        <div
          class="product__card card"
          v-for="(product, index) in getProductCategories"
          :key="index"
        >
          <img
            :src="
              'https://uat.owatts.io/storage/catalog/' + product.images[0].image
            "
            alt="fr"
            class="image"
          />

          <div class="category__name py-3 pl-2">
            <h6 class="">{{ product.name }}</h6>
            <router-link :to="{ path: `/shop/${found.name}/${product.name}` }">
              <button class="view__products-btn">MAKE RESERVATION</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="text-center" v-else>No Products Yet</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {},
  computed: {
    ...mapState(['products', 'options']),
    getProductCategories() {
      return this.$store.getters.getSingleProduct(this.$route.params.id)
    },
  },
  data() {
    return {
      found: '',
    }
  },
  methods: {
    ...mapActions(['getOptions']),
    findProduct() {
      this.found = this.options.find(
        (product) => product.name == this.$route.params.id,
      )
    },
  },

  async created() {
    this.getOptions()
    this.findProduct()
    // this.$store.getters.getProduct(this.$route.params.id)
  },
}
</script>

<style scoped>
.section {
  margin-top: 0rem;
}
.nav__tabs {
  width: max-content;
  margin: 0px auto;
  padding: 12px 17px 12px 17px;
  background: #f8f8f8;
  border-radius: 8px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #2c2926;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
  color: #2c2926;
  padding: 10px 25px;
  font-size: 14px;
}
.products__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  row-gap: 3rem;
}

.product__card img {
  width: 100%;
  height: 250px;
  padding: 2rem;
  background: #f8f8f881;
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
  background: #efece9;
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
@media (max-width: 528px) {
  /* .card:hover .category__name {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    padding: 1rem !important;
  } */
  img {
    /* height: 250px; */
  }
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
  background: #f8f8f8;
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
  display: none;
}
.card:hover .category__name {
  /* position: absolute;
  bottom: -4rem;
  width: 100%;
  padding: 1rem !important; */
}
/* .card:hover .category__name h5 {
  margin-bottom: 1rem;
} */

/* .card:hover .view__products-btn {
  position: relative;
  
  display: block;
} */

a:hover {
  text-decoration: none;
}
@media (max-width: 528px) {
  .nav-pills .nav-link {
    padding: 6px 8px;
  }
  .nav__tabs {
    padding: 12px 12px 12px 12px;
  }
}
@media (max-width: 528px) {
  .card:hover .category__name {
    /* position: absolute;
    bottom: 0rem;
    width: 100%;
    padding: 1rem !important; */
  }
  img {
    /* height: 250px; */
  }
}
@media (min-width: 700px) {
  .hero__text {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .view__products-btn {
    display: none !important;
  }
  .card:hover .category__name {
    position: absolute;
    bottom: -4rem;
    width: 100%;
    padding: 1rem !important;
  }
  .card:hover .category__name h5 {
    margin-bottom: 1rem;
  }

  .card:hover .view__products-btn {
    position: relative;
    display: block !important;
  }
}
</style>
