<template>
  <CHeader position="sticky" class="mb-4 py-3">
    <CContainer fluid>
      <router-link to="/" class="navbar-brand"
        ><img src="@/assets/images/orange__logo.png" alt=""
      /></router-link>
      <!-- <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler> -->

      <CHeaderNav class="d-none d-md-flex ml-auto mr-auto">
        <CNavItem>
          <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
            <CIcon icon="cil-menu" size="lg" />
          </CHeaderToggler>
        </CNavItem>
        <CNavItem>
          <CNavLink @click="this.$router.push('/shop/Clean%20Power')">
            Clean Power
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink @click="this.$router.push('/shop/Clean%20Gas')"
            >Clean Gas</CNavLink
          >
        </CNavItem>
        <CNavItem>
          <CNavLink @click="this.$router.push('/shop/Clean%20Water')"
            >Clean Water</CNavLink
          >
        </CNavItem>
        <CNavItem>
          <CNavLink @click="this.$router.push('/shop/Digital%20Estate')"
            >Digital Estate</CNavLink
          >
        </CNavItem>
        <CNavItem>
          <CNavLink @click="this.$router.push('/shop/eMobility')"
            >eMobility</CNavLink
          >
        </CNavItem>
      </CHeaderNav>
      <CHeaderNav class="d-none d-md-flex">
        <AppHeaderDropdownAccnt />
      </CHeaderNav>
      <CHeaderNav class="d-flex d-md-none">
        <CNavItem>
          <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
            <CIcon icon="cil-menu" size="lg" />
          </CHeaderToggler>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
    <!-- <CHeaderDivider /> -->
    <!-- <CContainer fluid>
      <AppBreadcrumb />
    </CContainer> -->
  </CHeader>
</template>

<script>
// import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { logo } from '@/assets/brand/logo'
export default {
  name: 'AppHeader',
  components: {
    // AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    return {
      logo,
    }
  },
}
</script>

<style scoped>
.header {
  border-bottom: none !important;
}
.header-nav .nav-link {
  font-weight: 700;
  font-size: medium;
  color: #303030;
  cursor: pointer;
}
</style>
