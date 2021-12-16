<template>
  <div class="container py-4 mt-5">
    <div class="row">
      <div class="col-md-4 text-md-left logo">
        <img src="@/assets/images/orange__logo.png" alt="" />
      </div>
      <div class="col-md-4 d-flex justify-content-center my-3 my-md-0">
        <router-link to="/contact_us">Contact us</router-link>
        <router-link to="/terms" class="mx-4"> Terms of service</router-link>
        <router-link to="/faq">FAQ</router-link>
      </div>
      <div class="col-md-4 text-center icons text-md-right">
        <a href="https://www.facebook.com/owattsinc" target="_blank"
          ><img src="@/assets/images/fb__icon.png" target="_blank" alt=""
        /></a>
        <a href=""
          ><img src="@/assets/images/wa__icon.png" target="_blank" alt=""
        /></a>
        <a href="https://twitter.com/owattsinc" target="_blank"
          ><img src="@/assets/images/twitter__icon.png" alt=""
        /></a>
        <a href="https://www.instagram.com/owattsinc/" target="_blank"
          ><img src="@/assets/images/ig__icon.png" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: #000;
  text-decoration: none;
}
.logo {
  text-align: center !important;
}

a:hover {
  color: #ff7e00;
}
.icons img {
  width: 30px;
  margin-right: 0.4rem;
}

@media (min-width: 768px) {
  .logo {
    text-align: left !important;
  }
}
</style>
