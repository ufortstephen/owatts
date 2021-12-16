/* eslint-disable */
<template>
  <div>
    <!-- <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)"> -->
    <AppHeader />
    <!-- </div> -->
    <!-- <CContainer class="my-4">
      <AppBreadcrumb class="bread" style="font-size: small !important" />
    </CContainer> -->
    <div class="login__section">
      <form>
        <h5 class="header__text">Reset password</h5>
        <div class="form-group my-3">
          <label for="" class="mb-3">Email address</label>
          <input
            type="email"
            class="form-control mb-4"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder=""
          />
          <small id="emailHelpId" class="form-text text-muted"></small>
        </div>

        <input type="submit" value="SEND" />

        <p class="mt-3">
          <small style="font-weight: bold" class="pr-4">
            If you don’t have an account,</small
          >
          <router-link to="/auth/register" class="blue">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppHeader from '@/components/HeaderComponentOne.vue'
export default {
  name: 'Login',
  components: {
    // AppBreadcrumb,
    AppHeader,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.header__text {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.login__section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c2926;
}
form {
  background: #f8f8f8;
  padding: 2rem;
  min-width: 35%;
  margin: 3rem auto;
  color: #2c2926;
  border-radius: 12px;
}

input[type='email'],
input[type='password'] {
  height: 45px;
  border-radius: 6px;
  background: transparent !important;
  font-size: small;
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
.blue {
  color: #2050fd;
  cursor: pointer;
}

@media (max-width: 568px) {
  form {
    margin: 0;
    padding-top: 4rem;
  }
  .login__section {
    display: block;
    /* flex-direction: column; */
    /* align-items: center; */
    justify-content: center;
    background: #f8f8f8;
    min-height: 90vh;
  }
}
</style>
