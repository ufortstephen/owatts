<template>
  <div class="">
    <nav
      class="navbar navbar-expand-lg navbar-light container sticky-top"
      id="navbar_top"
    >
      <router-link to="/" class="navbar-brand"
        ><img src="@/assets/images/logo.png" alt=""
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
        <img src="@/assets/images/menu__icon.png" alt="" />
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

        <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
          <li
            class="nav-item"
            :class="this.$route.name == 'Home' ? 'active' : ''"
          >
            <router-link class="nav-link" to="/"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>

          <li
            class="nav-item"
            :class="this.$route.name == 'Shop' ? 'active' : ''"
          >
            <router-link class="nav-link" to="/shop">Shop</router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              :class="this.$route.name == 'Products' ? 'active' : ''"
              >Products</a
            >
          </li>
          <li
            class="nav-item"
            :class="this.$route.name == 'Accessories' ? 'active' : ''"
          >
            <a class="nav-link" href="#">Accessories </a>
          </li>
        </ul>
        <div
          class="header__icons align-items-center"
          style="gap: 2rem"
          v-if="isLoggedIn"
        >
          <span
            ><CIcon icon="cil-magnifying-glass" style="color: #ff7e00"
          /></span>
          <router-link to="/cart" class="ca t"
            ><img
              v-if="cart.length > 0"
              src="@/assets/images/c.png"
              alt=""
              class="mx-4"
              style="width: 27px"
            />
            <img
              v-else
              src="@/assets/images/empty.png"
              alt=""
              class="mx-4"
              style="width: 27px"
            />
          </router-link>
          <span><img src="@/assets/images/avatar.png" alt="" /></span>
          <span>
            <CDropdown dark>
              <CDropdownToggle></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem @click="this.$router.push('/dashboard/user')"
                  >Dashboard</CDropdownItem
                >
                <CDropdownItem @click="this.$router.push('/reservations')"
                  >View Orders</CDropdownItem
                >
                <CDropdownItem href="#">Wallets</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Log out</CDropdownItem>
              </CDropdownMenu>
            </CDropdown></span
          >
        </div>
        <div
          class="header__icons d-flex align-items-center"
          style="gap: 1rem"
          v-else
        >
          <span
            ><CIcon icon="cil-magnifying-glass" style="color: #ff7e00"
          /></span>
          <router-link to="/cart" class="ca t"
            ><img
              v-if="cart.length > 0"
              src="@/assets/images/c.png"
              alt=""
              class="mx-4"
              style="width: 27px"
            />
            <img
              v-else
              src="@/assets/images/empty.png"
              alt=""
              class="mx-4"
              style="width: 27px"
            />
          </router-link>
          <div>
            <router-link to="/auth" class="btn text-white">Login</router-link>
          </div>
          <div>
            <router-link to="/auth/register">
              <button class="btn btn-white">Register</button></router-link
            >
          </div>
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
    ...mapState(['isLoggedIn', 'cart']),
  },

  methods: {},
}
</script>

<style>
.dropdown-item {
  cursor: pointer !important;
}
</style>

<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  width: max-content;
}
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
