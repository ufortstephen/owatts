<template>
  <div>
    <div class="order__summary rounded">
      <!-- {{ scoreResponse }}
      {{ scoreDetails }} -->
      {{ scoreDetails }}
      <CForm @submit.prevent="requestTicket" v-if="requestForm">
        <div class="mb-4">
          <CFormLabel for="exampleFormControlInput1">Select Bank </CFormLabel>
          <CFormSelect
            aria-label="Default select example"
            id="exampleFormControlInput1"
            required
            v-model="userAccount.BankID"
          >
            <option>Select Bank</option>
            <option :value="bank.ID" v-for="bank in spectaBanks" :key="bank.id">
              {{ bank.Name }}
            </option>
          </CFormSelect>
        </div>

        <div class="mb-4">
          <CFormLabel for="exampleFormControlInput1">Account Number</CFormLabel>
          <CFormInput
            id="monthlyPayment"
            type="number"
            v-model="userAccount.AccountNo"
            required
          />
        </div>
        <div class="mb-4">
          <CFormLabel for="bvn">BVN</CFormLabel>
          <CFormInput
            id="bvn"
            type="number"
            v-model="scoreDetails.Bvn"
            required
          />
        </div>
        <div class="mb-4">
          <CFormLabel for="email">Email Address</CFormLabel>
          <!-- <CFormInput
            id="email"
            type="email"
            :value="isLoggedIn.user.email"
            v-model="userAccount.EmailAddress"
          /> -->
          <CFormSelect
            aria-label="Default select example"
            id="email"
            required
            v-model="userAccount.EmailAddress"
          >
            <!-- <option disabled>1 Month</option> -->
            <option></option>
            <option :value="isLoggedIn.user.email">
              {{ isLoggedIn.user.email }}
            </option>
            <!-- <option>ufortstephen@gmail.com</option> -->
          </CFormSelect>
        </div>
        <div class="mb-4">
          <CFormLabel for="email">Phone Number</CFormLabel>
          <CFormSelect
            aria-label="Default select example"
            id="email"
            required
            v-model="userAccount.PhoneNumber"
          >
            <option></option>

            <option :value="isLoggedIn.user.phone">
              {{ isLoggedIn.user.phone }}
            </option>
            <!-- <option>08067383816</option> -->
          </CFormSelect>
        </div>

        <button class="btn-place__order w-100 my-2" @click="checkPayment">
          CONTINUE
        </button>
      </CForm>
      <CForm v-else @submit.prevent="getScore">
        <p>
          A One Time Password has been sent to {{ userAccount.EmailAddress }}.
          Please input below.
        </p>
        <div class="mb-3">
          <!-- <CFormLabel for="exampleFormControlInput1">OTP</CFormLabel> -->
          <div id="divOuter">
            <div id="divInner">
              <input
                id="partitioned"
                type="text"
                maxlength="5"
                v-model="scoreDetails.otp"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button class="btn-place__order w-100 my-2">SUBMIT</button>
        </div>
      </CForm>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      requestForm: true,
      bankId: '',
      userAccount: {
        AccountNo: '',
        PhoneNumber: '',
        BankID: '',
        EmailAddress: '',
      },
      scoreDetails: {
        TransactionId: this.$store.getters.getTrxId,
        Bvn: '',
        IsExpired: false,
        MonthlyIncome: '',
        otp: '',
      },
    }
  },

  computed: {
    ...mapState(['spectaBanks', 'isLoggedIn', 'scoreResponse', 'score']),
  },
  methods: {
    ...mapActions(['getSpectaBanks', 'requestSpectaTicket', 'getSpectaScore']),
    async requestTicket() {
      try {
        let res = await this.requestSpectaTicket(this.userAccount)
        console.log(res)
        this.$moshaToast(` ${res.data.message}`, {
          hideProgressBar: true,
          type: 'success',
          position: 'top-right',
        })
        this.requestForm = !this.requestForm
      } catch (error) {
        this.$moshaToast(
          ` Error authenticating details. Please make sure your details are correct.`,
          {
            hideProgressBar: true,
            type: 'warning',
            position: 'top-right',
          },
        )
      }
    },
    async getScore() {
      try {
        let res = await this.getSpectaScore(this.scoreDetails)
        console.log(res)
      } catch (error) {
        this.$moshaToast(` ${error.response.data.Message}`, {
          hideProgressBar: true,
          type: 'warning',
          position: 'top-right',
        })
      }
    },
  },
  async created() {
    this.getSpectaBanks()
  },
}
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
#partitioned {
  padding-left: 15px;
  letter-spacing: 42px;
  border: 0;
  background-image: linear-gradient(
    to left,
    black 70%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 100%;
  /* min-width: 220px; */
  padding: 1rem;
}

#divInner {
  left: 0;
  position: sticky;
}

#divOuter {
  width: 250px;
  margin: 0px auto;
  overflow: hidden;
}
@media (min-width: 768px) {
  .order__summary {
    width: 50%;
  }
}
</style>
