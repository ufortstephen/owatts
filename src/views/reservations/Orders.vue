<template>
  <div>
    <h4 class="mb-4">Orders</h4>
    <!-- {{ cart }} -->
    <CTable striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Product</CTableHeaderCell>
          <CTableHeaderCell scope="col">Date</CTableHeaderCell>
          <CTableHeaderCell scope="col">Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="item in cart" :key="item.id">
          <CTableHeaderCell scope="row"> PID {{ item.id }} </CTableHeaderCell>
          <CTableDataCell> {{ item.name }} </CTableDataCell>
          <CTableDataCell> 12-12-2021 </CTableDataCell>
          <CTableDataCell>$10,000</CTableDataCell>
          <CTableDataCell>Approved</CTableDataCell>
          <CTableDataCell>
            <CDropdown>
              <CDropdownToggle
                ><span class="badge badge-pill ml-2 rounded__pill">
                  <CIcon icon="cil-options" style="color: #000" /></span
              ></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem
                  @click="this.$router.push(`/reservations/${item.id}`)"
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Reservations',
  data() {
    return {}
  },
  computed: {
    ...mapState(['cart']),
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
