<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>
    <!-- <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)"> -->
    <AppHeader />
    <!-- </div> -->
    <!-- <CContainer class="my-4">
      <AppBreadcrumb class="bread" style="font-size: small !important" />
    </CContainer> -->

    <div class="login__section">
      <form @submit.prevent="registerUser">
        <h5 class="mb-5 header__text">Register</h5>
        <!-- {{ registerErrors }} -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="">First name</label>
              <input
                v-model="userDetails.firstname"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Last name</label>
              <input
                v-model="userDetails.lastname"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Email address</label>
              <input
                v-model="userDetails.email"
                type="email"
                class="form-control"
                name=""
                id=""
                aria-describedby="emailHelpId"
                placeholder=""
                required
              />
              <small class="form-text text-danger" v-if="registerErrors.email">
                {{ registerErrors.email[0] }}
              </small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Phone</label>
              <input
                v-model="userDetails.phone"
                type="number"
                class="form-control"
                name=""
                id=""
                aria-describedby="emailHelpId"
                placeholder=""
                required
              />
              <small class="form-text text-danger" v-if="registerErrors.phone">
                {{ registerErrors.phone[0] }}
              </small>
            </div>
          </div>
        </div>

        <!-- <div class="form-group">
          <label for="">Country</label>
          <CFormSelect aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </div> -->

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Password</label>
              <CFormInput
                v-model="userDetails.password"
                type="password"
                placeholder="Password"
                autocomplete="new-password"
                required
              />
              <small
                class="form-text text-danger"
                v-if="registerErrors.password"
              >
                {{ registerErrors.password[0] }}
              </small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="">Confirm Password</label>
              <CFormInput
                v-model="userDetails.password_confirmation"
                type="password"
                placeholder="Password"
                autocomplete="new-password"
                required
              />
              <small
                class="form-text text-danger"
                v-if="registerErrors.password"
              >
                {{ registerErrors.password[1] || registerErrors.password[0] }}
              </small>
              <!-- <small class="form-text text-danger" v-else>
                {{ registerErrors.password[0] }}
              </small> -->
            </div>
          </div>
        </div>

        <div class="row mt-2 mb-5">
          <div class="col order-2 order-md-2">
            <div class="form-check">
              <label class="container"
                ><small style="font-size: small"
                  >By creating a Owatt account, you understand and agree to the
                  Owatt <span class="blue">Terms of use </span>and
                  <span class="blue">Privacy policy</span>
                </small>
                <input type="radio" name="radio" required />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <input type="submit" value="REGISTER" />

        <p class="mt-3" style="font-weight: bold">
          Have an account already? &nbsp; &nbsp;
          <router-link to="/auth/login" class="blue">Sign in</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import AppBreadcrumb from '@/components/AppBreadcrumb'
import AppHeader from '@/components/HeaderComponentOne.vue'
export default {
  name: 'Login',
  components: {
    // AppBreadcrumb,
    AppHeader,
  },
  data() {
    return {
      loader: false,
      userDetails: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
        accept: 1,
      },
      registerErrors: {},
    }
  },

  methods: {
    ...mapActions(['register']),
    async registerUser() {
      try {
        this.loader = true
        let res = await this.register(this.userDetails)
        console.log(res)
        this.$router.push('/auth')
      } catch (error) {
        this.loader = false
        console.log(error.response.data.errors)
        this.registerErrors = error.response.data.errors
      }
    },
  },
}
</script>

<style scoped>
.bread {
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
  margin-bottom: 0.8rem;
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
input[type='password'],
input[type='text'],
input[type='number'],
select {
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
  font-size: 16px;
}
input[type='submit']:hover {
  opacity: 0.9;
}

input:focus,
select:focus {
  border-color: #c5c5c5;
}
.blue {
  color: #2050fd;
  cursor: pointer;
}

.form-group {
  margin-bottom: 1.4rem;
}
/*  */
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
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

@media (max-width: 568px) {
  form {
    margin: 0;
    padding-top: 4rem;
  }
  .login__section {
    display: block;
    background: #f8f8f8;
    min-height: max-content;
  }
}

@media (min-width: 768px) {
  input[type='submit'] {
    display: block;
    margin: 1rem auto;
    width: 40%;
    background: #303030;
    color: #fff;
    border: none;
    outline: none;
    padding: 0.8rem 0;
    border-radius: 4px;
    font-size: 16px;
  }
}
</style>
