<template>
  <div class="">
    <!-- <AppHeader /> -->
    <div
      id="heroCarousel"
      class="carousel slide"
      data-ride="carousel"
      :class="{ shortHero: this.$route.name !== 'index' }"
    >
      <ol class="carousel-indicators">
        <li data-target="#heroCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#heroCarousel" data-slide-to="1"></li>
        <!-- <li data-target="#heroCarousel" data-slide-to="2"></li>
        <li data-target="#heroCarousel" data-slide-to="3"></li> -->
      </ol>
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
                <h1 class="my-2">Power - Safety - Security</h1>
                <small class="muted__text small">
                  We are here to help you live an easy, <br />
                  cost efficient and soft life
                </small>
                <p class="mt-5">
                  <router-link to="/shop"
                    ><button class="button__white mr-2 mt-3 mt-md-0">
                      SHOP NOW
                    </button></router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item hero__bg bg__two">
          <div class="px-2 px-md-5 py-4">
            <AppHeader />
            <CContainer class="my-4">
              <AppBreadcrumb
                class="bread"
                style="font-size: small !important"
              />
            </CContainer>
            <div class="hero__text text-center">
              <div class="align-self-center">
                <h1 class="my-2">Safety - Security - Satisfaction</h1>
                <small class="muted__text small">
                  We are here to help you live an easy, <br />
                  cost efficient and soft life
                </small>
                <p class="mt-5">
                  <router-link to="/shop"
                    ><button class="button__white mr-2 mt-3 mt-md-0">
                      JOIN TODAY
                    </button></router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <AppFooter
          class="container"
          style="position: absolute; width: 100%; bottom: 0"
        /> -->
      </div>
      <!-- <div
        class="row px-2 px-md-5 py-3"
        style="position: absolute; width: 100%; bottom: 0"
      >
        <div class="col-md-6 text-center text-md-left">
          <NuxtLink to="/" class="text-white">Terms of use</NuxtLink>
          <NuxtLink to="/" class="text-white mx-3">Contact us</NuxtLink>
          <NuxtLink to="/" class="text-white">FAQ</NuxtLink>
        </div>
        <div
          class="col-md-6 text-center mt-2 mt-md-0 text-md-right social__links pr-0"
        >
          <img src="@/assets/images/fb__icon.png" alt="" />
          <img src="@/assets/images/wa__icon.png" alt="" />
          <img src="@/assets/images/twitter__icon.png" alt="" />
          <img src="@/assets/images/ig__icon.png" alt="" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppHeader from '@/components/HomeHeaderComponent.vue'
// import AppFooter from '@/components/FooterComponentOne.vue'
export default {
  name: 'Login',
  components: {
    AppBreadcrumb,
    AppHeader,
    // AppFooter,
  },
  data() {
    return {}
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
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.527);
  background-position: center;
  color: #fff !important;
}

h1 {
  font-family: sans-serif !important;
  font-size: 3.6rem;
  font-weight: 700;
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
  background-color: rgba(0, 0, 0, 0.616);
}
.bg__three {
  background-image: url(@//assets/images/bg__three.png);
}
.bg__four {
  background-image: url(@//assets/images/bg__four.png);
}

.hero__text {
  height: 60vh;
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
}
</style>
