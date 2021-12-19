<template>
  <div class="shadow">
    <nav
      class="navbar navbar-expand-lg navbar-light container sticky-top"
      id="navbar_top"
    >
      <router-link to="/" class="navbar-brand"
        ><img src="@/assets/images/orange__logo.png" alt=""
      /></router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="">
          <img src="@/assets/images/menu__icon.png" alt=""
        /></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <button
          class="navbar-toggler d-lg-none close_nav--btn"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="text-white">&times;</span>
        </button>

        <ul
          class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0"
          :class="this.$route.name == 'Login' ? 'd-none' : ''"
        >
          <li
            class="nav-item"
            :class="this.$route.name == 'index' ? 'active' : ''"
          >
            <router-link class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/shop">Shop</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accessories</a>
          </li>
        </ul>
        <router-link
          to="/auth/register"
          v-if="this.$route.name == 'Login'"
          :class="this.$route.name == 'Login' ? 'ml-auto' : ''"
          ><button class="btn text-white" style="background: #303030">
            Register
          </button></router-link
        >
        <router-link
          to="/auth"
          v-else
          :class="this.$route.name == 'Register' ? 'ml-auto' : ''"
          ><button class="btn text-white" style="background: #303030">
            Login
          </button></router-link
        >
        <div class="header__icons d-none" style="gap: 2rem">
          <span
            ><CIcon icon="cil-magnifying-glass" style="color: #ff7e00"
          /></span>
          <router-link to="/cart" class="cart"
            ><img src="@/assets/images/cartt.png" alt="" class="mx-4" />
            <i class="cil-energy"></i
          ></router-link>
          <span><img src="@/assets/images/avatar.png" alt="" /></span>
          <span>
            <CDropdown dark>
              <CDropdownToggle></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown></span
          >
        </div>
      </div>
    </nav>
    <!-- END nav -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import hero from "./appHero";
export default {
  components: {
    // hero,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {},
}
</script>

<style scoped>
button:focus {
  outline: none;
  border: none;
}
img {
  /* width: 20.04px; */
  cursor: pointer;
}
.cart {
  position: relative;
}

.cart::after {
  content: '';
  text-align: center;
  font-size: xx-small;
  padding-top: 0.15rem;
  position: absolute;
  right: 9px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #ff7e00;
  top: -5px;
  color: #fff;
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: transparent;
}
.close_nav--btn {
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  font-size: larger;
}
.shadow {
  box-shadow: 0 0.5rem 0.6rem rgb(0 0 21 / 15%) !important;
}
</style>
