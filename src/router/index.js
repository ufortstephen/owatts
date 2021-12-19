import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout,
    // redirect: '/dashboard',
    async beforeEnter(to, from, next) {
      try {
        var hasPermission = await store.getters.getToken
        if (hasPermission) {
          next()
        } else {
          next({
            name: 'Auth', // back to safety route //
            query: { redirectFrom: to.fullPath },
          })
        }
      } catch (e) {
        next({
          name: 'Auth', // back to safety route //
          query: { redirectFrom: to.fullPath },
        })
      }
    },
    children: [
      {
        path: '/dashboard/user',
        name: 'Dashboard - User',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        // component: {
        //   render() {
        //     return h(resolveComponent('router-view'))
        //   },
        // },
        component: () => import('@/views/products/Products.vue'),
        // redirect: '/products',
        // children: [
        //   {
        //     path: '/products',
        //     name: 'Products',
        //     component: () => import('@/views/products/Products.vue'),
        //   },
        // ],
      },
      {
        path: '/reservations',
        name: 'Reservations',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/reservations',
        children: [
          {
            path: '/reservations',
            name: 'Reservations',
            component: () => import('@/views/reservations/Orders.vue'),
          },
          {
            path: '/reservations/:id',
            name: 'Order Details',
            component: () => import('@/views/reservations/OrderDetails.vue'),
          },
          {
            path: '/reservations/checkout/specta',
            name: 'Specta',
            component: () => import('@/views/reservations/Specta.vue'),
          },
          {
            path: '/reservations/checkout/specta/bankInfo',
            name: 'Specta Banks',
            component: () => import('@/views/reservations/SpectaBank.vue'),
          },
        ],
      },
      {
        path: '/settings',
        name: 'Settings',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/settings',
        children: [
          {
            path: '/settings',
            name: 'Settings',
            component: () => import('@/views/settings/Settings.vue'),
          },
        ],
      },
      {
        path: '/logout',
        name: 'Log Out',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/logout',
        children: [
          {
            path: '/logout',
            name: 'Log Out',
            component: () => import('@/views/pages/Logout.vue'),
          },
        ],
      },
      {
        path: '/settings',
        name: 'Settings',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/settings',
        children: [
          {
            path: '/settings',
            name: 'Settings',
            component: () => import('@/views/settings/Settings.vue'),
          },
        ],
      },
      {
        path: '/theme/typography',
        name: 'Typography',
        component: () => import('@/views/theme/Typography.vue'),
      },
      {
        path: '/wallets',
        name: 'Wallets',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/wallets/wallet',
        children: [
          {
            path: '/wallets/wallet',
            name: 'Wallet',
            component: () => import('@/views/wallet/Wallets.vue'),
          },
          {
            path: '/wallets/breadcrumbs',
            name: 'n',
            component: () => import('@/views/base/Breadcrumbs.vue'),
          },
          {
            path: '/base/cards',
            name: 'Cards',
            component: () => import('@/views/base/Cards.vue'),
          },
        ],
      },
      {
        path: '/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/base/breadcrumbs',
        children: [
          {
            path: '/base/accordion',
            name: 'Accordion',
            component: () => import('@/views/base/Accordion.vue'),
          },
          {
            path: '/base/breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('@/views/base/Breadcrumbs.vue'),
          },
          {
            path: '/base/cards',
            name: 'Cards',
            component: () => import('@/views/base/Cards.vue'),
          },
          {
            path: '/base/carousels',
            name: 'Carousels',
            component: () => import('@/views/base/Carousels.vue'),
          },
          {
            path: '/base/collapses',
            name: 'Collapses',
            component: () => import('@/views/base/Collapses.vue'),
          },
          {
            path: '/base/list-groups',
            name: 'List Groups',
            component: () => import('@/views/base/ListGroups.vue'),
          },
          {
            path: '/base/navs',
            name: 'Navs',
            component: () => import('@/views/base/Navs.vue'),
          },
          {
            path: '/base/paginations',
            name: 'Paginations',
            component: () => import('@/views/base/Paginations.vue'),
          },
          {
            path: '/base/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/base/Placeholders.vue'),
          },
          {
            path: '/base/popovers',
            name: 'Popovers',
            component: () => import('@/views/base/Popovers.vue'),
          },
          {
            path: '/base/progress',
            name: 'Progress',
            component: () => import('@/views/base/Progress.vue'),
          },
          {
            path: '/base/spinners',
            name: 'Spinners',
            component: () => import('@/views/base/Spinners.vue'),
          },
          {
            path: '/base/tables',
            name: 'Tables',
            component: () => import('@/views/base/Tables.vue'),
          },
          {
            path: '/base/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/base/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Buttons',
            component: () => import('@/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/notifications/Modals.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/shop/accessories/:id',
    name: 'Accessories - Product',
    component: () => import('@/views/accessories/Accessory.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart.vue'),
  },
  {
    path: '/shop/:id/:name',
    name: 'Home - Product',
    component: () => import('@/views/homeProduct/homeProductDetails.vue'),
  },
  {
    path: '/shop/:id/:name',
    name: 'Home - Product',
    component: () => import('@/views/homeProduct/homeProductDetails.vue'),
  },
  {
    path: '/shop/:id',
    name: 'Shop - Product',
    component: () => import('@/views/shop/ShopProduct.vue'),
  },
  {
    path: '/shop',
    // redirect: '/shop',
    name: 'Shop',
    component: () => import('@/views/shop/ShopPage.vue'),
    children: [
      {
        path: '/shop/:id',
        name: 'Shop Product',
        component: () => import('@/views/shop/ShopProduct.vue'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'reset_password',
        name: 'Reset Password',
        component: () => import('@/views/pages/ResetPassword'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/pages/HomePage.vue'),
  },
  {
    path: '/contact_us',
    name: 'Contact',
    component: () => import('@/views/contact/ContactUs.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('@/views/faq/faq'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/terms/TermsOfUse'),
  },

  {
    path: '/auth',
    redirect: '/auth/login',
    name: 'Auth',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'reset_password',
        name: 'Reset Password',
        component: () => import('@/views/pages/ResetPassword'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/pages/HomePage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
