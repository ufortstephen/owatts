<template>
  <div>
    <Header />
    <!-- <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <AppHeader />
    </div> -->
    <!-- <CContainer class="my-4">
      <AppBreadcrumb class="bread" style="font-size: small !important" />
    </CContainer> -->
    <div class="login__section">
      <form @submit.prevent="loginUser">
        <h4 class="header__text">Sign in</h4>
        <h6 class="text-danger" v-if="loginError">{{ loginError }}</h6>
        <div class="form-group my-4">
          <label for="" class="mb-2">Email address</label>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder=""
            v-model="userDetails.email"
            required
          />
          <small id="emailHelpId" class="form-text text-muted"></small>
        </div>

        <div class="form-group">
          <label for="" class="mb-2">Password</label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            placeholder=""
            v-model="userDetails.password"
            required
          />
        </div>

        <div class="row mt-2 mb-2 align-items-center">
          <div class="col-6 order-2 order-md-2">
            <!-- {{ sidebarUnfoldable }} {{ options }} -->
          </div>
          <div class="col-6 text-right blue order-0 order-md-3 text--right">
            <router-link to="/auth/reset_password" class="blue text--right"
              >Forgot password</router-link
            >
          </div>
        </div>
        <input type="submit" value="SIGN IN" :disabled="disabled" />

        <p class="mt-3">
          <small style="font-weight: bold" class="pr-4">
            If you don’t have an account,</small
          >
          <router-link to="/auth/register" class="blue pl-2">
            Register</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import AppBreadcrumb from '@/components/AppBreadcrumb'
import Header from '@/components/HeaderComponentOne.vue'
export default {
  name: 'Login',
  components: {
    // AppBreadcrumb,
    Header,
  },
  data() {
    return {
      userDetails: {
        email: '',
        password: '',
      },
      loginError: '',
      disabled: false,
    }
  },

  computed: {
    ...mapState(['sidebarUnfoldable', 'options', 'isLoggedIn', 'token']),
  },

  methods: {
    ...mapActions(['login']),
    async loginUser() {
      try {
        this.disabled = true
        let res = await this.login(this.userDetails)
        console.log(res)
        this.$moshaToast(`Welcome ${res.data.user.lastname}`, {
          hideProgressBar: false,
          type: 'success',
          position: 'top-center',
        })
        this.$router.push('/cart')
      } catch (error) {
        this.disabled = false
        console.log(error.response.data.message)
        this.loginError = error.response.data.message
      }
    },
  },

  async created() {
    // this.getOptions()
  },
}
</script>

<style scoped>
small,
.small {
  font-size: 80% !important;
}

.header__text {
  font-weight: bold;
  font-size: 1.4rem;
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
  margin: 5rem auto;
  color: #2c2926;
  border-radius: 12px;
}

input[type='email'],
input[type='password'] {
  height: 45px;
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
.blue {
  color: #2050fd;
  cursor: pointer;
  font-size: 0.9rem;
}

/*  */
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0.5rem;
  left: -1rem;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ff7e00;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

html:not([dir='rtl']) .form-check {
  padding-left: 0em;
}

@media (max-width: 568px) {
  form {
    margin: 0;
    padding-top: 4rem;
  }
  .login__section {
    display: block;
    background: #f8f8f8;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .text--right {
    text-align: right;
  }
}
</style>
