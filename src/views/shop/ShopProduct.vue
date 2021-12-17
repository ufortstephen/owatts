<template>
  <div class="">
    <!-- <AppHeader /> -->
    <div id="heroCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active hero__bg bg__one">
          <div class="px-2 px-md-5 py-3">
            <AppHeader />
            <CContainer class="my-4">
              <AppBreadcrumb
                class="bread"
                style="font-size: small !important"
              />
            </CContainer>
            <div class="hero__text text-center">
              <div class="align-self-center">
                <h1 class="my-2">{{ getProductCategories.name }}</h1>

                <small class="muted__text small">
                  We are here to help you live an easy, <br />
                  cost efficient and soft life
                </small>
                <!-- <small>{{ getProductCategories }}</small> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShopCategory />
    <AppFooter />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppHeader from '@/components/HomeHeaderComponent.vue'
import AppFooter from '@/components/FooterComponentOne.vue'
import ShopCategory from '@/components/ShopCategories.vue'
export default {
  name: 'Login',
  components: {
    AppBreadcrumb,
    AppHeader,
    ShopCategory,
    AppFooter,
  },
  computed: {
    ...mapState(['sidebarUnfoldable', 'options', 'products']),
    getProductCategories() {
      return this.$store.getters.getProduct(this.$route.params.id)
    },
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['getOptions']),
  },

  async created() {
    this.getOptions()
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');
.shortHero {
  /* max-height: 350px; */
  overflow: hidden;
}

/* @media (min-width: 1640px) {
  .shortHero {
    max-height: 45vh;
  }
} */
</style>

<style scoped>
.hero__bg {
  height: max-content;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.699);
  background-position: center;
  color: #fff !important;
}

h1 {
  font-family: sans-serif !important;
  font-size: 3.4rem;
  font-weight: bolder;
  color: #fff;
}

p.text-muted {
  font-size: 1rem;
}

.bg__one {
  /* background-image: url(@//assets/images/lp1.jpg); */
  background-image: url(@//assets/images/home11.png);
}

.bg__two {
  /* background-image: url(@//assets/images/lp2.jpg); */
  background-image: url(@//assets/images/home22.jpg);
  background-color: rgba(0, 0, 0, 0.699);
}
.bg__three {
  background-image: url(@//assets/images/bg__three.png);
}
.bg__four {
  background-image: url(@//assets/images/bg__four.png);
}

.hero__text {
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.muted__text {
  color: #bcbab7;
  font-size: 1rem;
}

button {
  /* padding: 19.5px 60px; */
  width: 166px;
  height: 45px;
  background: transparent;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer !important;
}

.button__white {
  background-color: #fff;
  border: 1px solid #fff;
  color: #ff7e00;
  font-weight: bold;
}
.btn__border--white {
  border: 1px solid #fff;
  color: #fff;
}
img {
  cursor: pointer;
}
.carousel-item-next.carousel-item-left,
.carousel-item-prev.carousel-item-right {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.carousel-item-next,
.active.carousel-item-right {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.carousel-item-prev,
.active.carousel-item-left {
  -webkit-transform: translate3d(0, 0%, 0);
  transform: translate3d(0, 0, 0);
}
.carousel-indicators li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #efece9;
  opacity: 1;
}
.carousel-indicators {
  top: 40%;
  flex-direction: column;
  left: 4%;
  margin: 0;
  justify-content: revert;
  width: max-content;
}
.carousel-indicators .active {
  opacity: 1;
  width: 13px;
  height: 13px;
  background-color: #ff7e00;
}
.social__links img {
  width: 30px;
}

@media (max-width: 700px) {
  .carousel-indicators {
    top: 65%;
    display: none;
  }
  h1 {
    font-size: 2rem;
  }
  .muted__text {
    /* font-size: 1.2rem; */
  }
}
</style>
