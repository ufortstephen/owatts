<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <!-- <CSidebarBrand>
     
      <router-link to="/" class="navbar-brand"
        ><img src="@/assets/images/log.png" alt=""
      /></router-link>
      <CIcon
        custom-class-name="sidebar-brand-narrow"
        :icon="sygnet"
        :height="35"
      />
    </CSidebarBrand> -->
    <AppSidebarNav />
    <!-- <CSidebarToggler
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    /> -->
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from '@/assets/brand/logo-negative'
import { sygnet } from '@/assets/brand/sygnet'
export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
  },
  setup() {
    const store = useStore()
    return {
      logoNegative,
      sygnet,
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>

<style>
.sidebar.sidebar-fixed {
  background: #fff !important;
  top: 5rem;
}
.sidebar-nav .nav-link.active {
  /* background: rgba(0, 0, 0, 0.103) !important; */
  color: #000;
  border-radius: 10px;
  font-weight: 700;
}
.sidebar-nav .nav-link.active:hover {
  /* color: #fff; */
}
.sidebar-nav .nav-link:hover {
  /* background: rgba(0, 0, 0, 0.459); */
  color: #000;
  border-radius: 10px;
}
.sidebar-nav .nav-item {
  margin-top: 1rem !important;
  font-size: medium;
  color: #303030 !important;
}
.sidebar-nav .nav-link {
  color: #303030;
  font-weight: 700;
  font-size: medium;
}
.sidebar-nav .nav-icon {
  color: #000 !important;
}
</style>

<style scoped>
svg {
  color: #000;
}
</style>
