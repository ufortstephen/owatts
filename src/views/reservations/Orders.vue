<template>
  <div>
    <h4 class="mb-4">Orders</h4>
    {{ myOrders }}
    <CTable striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Product</CTableHeaderCell>
          <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
          <CTableHeaderCell scope="col">Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in orders" :key="item.id">
          <CTableHeaderCell scope="row"> PID {{ item.id }} </CTableHeaderCell>
          <CTableDataCell>
            Home {{ item.products[0].product_id }}
          </CTableDataCell>
          <CTableDataCell> {{ item.products[0].quantity }} </CTableDataCell>
          <CTableDataCell> $ {{ item.total }} </CTableDataCell>
          <CTableDataCell>{{ item.status.name }}</CTableDataCell>
          <CTableDataCell>
            <CDropdown>
              <CDropdownToggle
                ><span class="badge badge-pill ml-2 rounded__pill">
                  <CIcon icon="cil-options" style="color: #000" /></span
              ></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem
                  @click="
                    this.$router.push(
                      `/reservations/${item.products[0].product_id}`,
                    )
                  "
                  >View</CDropdownItem
                >
                <CDropdownItem href="#">Make Payment</CDropdownItem>
                <CDropdownItem href="#">Cancel</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
    <!-- {{ orders }} -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'Reservations',
  data() {
    return {
      orders: '',
      baseUrl: 'https://uat.owatts.io/api/v1/',
    }
  },
  computed: {
    ...mapState(['cart', 'myOrders', 'token']),
  },
  methods: {
    ...mapActions(['']),
    async getOrders() {
      try {
        const res = await axios.get(this.baseUrl + 'orders', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.orders = res.data.data
        console.log(this.orders)
      } catch (error) {
        console.log(error)
      }
    },
  },
  async created() {
    this.getOrders()
  },
}
</script>

<style scoped>
tr {
  font-size: small;
  cursor: pointer;
}
.rounded__pill {
  background: rgb(235, 237, 239);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}
.dropdown-item {
  font-size: small;
}
.dropdown-toggle::after {
  display: none !important;
}
.table th,
.table td {
  vertical-align: baseline;
}
</style>
