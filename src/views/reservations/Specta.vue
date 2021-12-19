<template>
  <div>
    <div class="order__summary rounded">
      <CForm
        @submit.prevent="
          this.$router.push('/reservations/checkout/specta/bankInfo')
        "
      >
        <div class="mb-4">
          <CFormLabel for="exampleFormControlInput1"
            >Preferred Lease Duration (in months)
          </CFormLabel>
          <CFormSelect
            aria-label="Default select example"
            id="exampleFormControlInput1"
            required
          >
            <!-- <option disabled>1 Month</option> -->
            <option value="1">1</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
            <option value="3">6</option>
            <option value="3">7</option>
            <option value="3">8</option>
            <option value="3">9</option>
            <option value="3">10</option>
            <option value="3">11</option>
            <option value="3">12</option>
          </CFormSelect>
        </div>
        <div class="mb-4">
          <CFormLabel for="exampleFormControlInput1"
            >Monthly Payment</CFormLabel
          >
          <CFormInput
            id="monthlyPayment"
            type="text"
            disabled
            value="NGN 50,000"
          />
        </div>
        <div class="mb-4">
          <CFormLabel for="exampleFormControlInput1"
            >Security Deposit (5%)</CFormLabel
          >
          <CFormInput id="secDeposit" type="text" disabled value="NGN 50,000" />
        </div>
        <button class="btn-place__order w-100 my-4">CONTINUE</button>
      </CForm>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.order__summary {
  background: #f8f8f8;
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 0px auto;
}
.btn-place__order {
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 14px;
}
h6,
p {
  color: #000;
}
html:not([dir='rtl']) .form-check {
  padding-left: 0em !important;
}
.form-check-label input {
  display: block;
  height: 45px;
  border-radius: 6px;
  background: transparent !important;
  font-size: SMALL;
  margin-top: 1rem;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 0px;
}

.view__btn {
  width: max-content;
  background-color: #fff;
  height: 46px;
  font-size: small;
  border: 1px solid #000;
  border-radius: 8px;
}
.shop__btn {
  color: #fff;
  width: max-content;
  background-color: #303030;
  height: 46px;
  font-size: small;
  border: 1px solid #000;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .order__summary {
    width: 50%;
  }
}
</style>
