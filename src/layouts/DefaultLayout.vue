<template>
  <div>
    <AppHeader />
    <AppSidebar />
    <div
      class="wrapper d-flex flex-column min-vh-100 bg-white"
      style="overflow: hidden"
    >
      <!-- <AppHeader /> -->
      <div class="body flex-grow-1 px-0 px-md-3 my-4">
        <CContainer lg>
          <router-view />
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import { CContainer } from '@coreui/vue'
import AppFooter from '@/components/FooterComponentOne.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter,
    AppHeader,
    AppSidebar,
    CContainer,
  },
}
</script>
