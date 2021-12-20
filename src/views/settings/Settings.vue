<template>
  <div>
    <h2 class="mb-4 text-muted">Profile Settings</h2>

    <div class="row mb-4">
      <div class="col-md-4">
        <p class="fw-bold medium text-muted mb-0">Full Name</p>
        <p class="fw-bold medium text-dark mb-1">
          {{ isLoggedIn.user.firstname }} {{ isLoggedIn.user.lastname }}
        </p>
        <p class="medium underline">Edit</p>
      </div>
      <div class="col-md-4">
        <p class="fw-bold medium text-muted">Address</p>
      </div>
      <div class="col-md-4">
        <p class="fw-bold medium text-muted mb-0">Phone Number</p>
        <p class="fw-bold medium text-dark">{{ isLoggedIn.user.phone }}</p>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4">
        <p class="fw-bold medium text-muted mb-0">Email</p>
        <p class="fw-bold medium text-dark mb-1">{{ isLoggedIn.user.email }}</p>
        <p class="medium underline">Edit</p>
      </div>
      <div class="col-md-4">
        <p class="fw-bold medium text-muted mb-0">Password</p>
        <p class="fw-bold medium text-dark mb-1">* * * * * * * * * * * *</p>
        <p class="medium underline">Change password</p>
      </div>
      <div class="col-md-4">
        <!-- {{ isLoggedIn }} -->
        <!-- <p class="fw-bold medium text-muted">Phone Number</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isLoggedIn']),
  },
}
</script>

<style scoped>
.underline {
  text-decoration: underline;
  cursor: pointer;
  width: max-content;
}
</style>
