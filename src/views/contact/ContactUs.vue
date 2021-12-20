<template>
  <div>
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <Header />
    </div>
    <div class="container my-5">
      <breadcrumbs class="mb-3" />
      <h2 class="text-center mt-5" style="font-weight: normal">
        We are glad to always be of help
      </h2>
      <p class="text-center small muted">
        You can always reach out to us when you have <br />
        anything or information from us.
      </p>

      <div class="row" style="margin-top: 8rem">
        <div class="col-md-4">
          <div class="d-flex" style="gap: 1rem">
            <i class="cil-location-pin"></i>
            <p>
              700 El Camino Real <br />
              Menlo Park CA 84025
            </p>
          </div>
          <div class="d-flex" style="gap: 1rem">
            <i class="cil-audio"></i>
            <div>
              <p class="mb-0">+2347051235489</p>
              <p>+2347051235489</p>
            </div>
          </div>
          <div class="d-flex" style="gap: 1rem">
            <i class="cib-gmail align-self-center"></i>
            <a href="mailto: hello@owatts.io" class="text-dark"
              >hello@owatts.io</a
            >
          </div>
        </div>
        <div class="col-md-6 offset-md-2 px-0">
          <div class="login__section">
            <form>
              <h5 class="header__text mb-1">Send us a message</h5>
              <p class="mb-5 muted">
                You can send us a message and we would respond <br />
                to you as soon as possible, we are always here to help.
              </p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">First name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">Last name</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder=""
                />
                <small id="emailHelpId" class="form-text text-muted"></small>
              </div>

              <div class="form-group">
                <label for="">Title</label>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder=""
                />
                <small id="emailHelpId" class="form-text text-muted"></small>
              </div>

              <div class="form-group">
                <label for="">Message</label> <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  class="w-100"
                ></textarea>
                <small id="emailHelpId" class="form-text text-muted"></small>
              </div>
              <input type="submit" value="SEND" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HomeHeaderComponent.vue'
import Footer from '@/components/FooterComponentOne.vue'
import breadcrumbs from '@/components/AppBreadcrumb.vue'
export default {
  name: 'Contact Us',
  components: {
    breadcrumbs,
    Header,
    Footer,
  },
}
</script>

<style scoped>
.header__text {
  /* font-weight: bold; */
  font-size: 1.2rem;
}
.login__section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c2926;
  margin-bottom: 0.8rem;
}
form {
  background: #f8f8f8;
  padding: 2rem;
  min-width: 35%;
  /* margin: 5rem auto; */
  color: #2c2926;
  border-radius: 12px;
}

input[type='email'],
input[type='password'],
input[type='text'],
select {
  height: 50px;
  border-radius: 6px;
  background: transparent !important;
  font-size: SMALL;
}
input[type='submit'] {
  width: 100%;
  background: #303030;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 0;
  border-radius: 4px;
  font-size: 16px;
}
input[type='submit']:hover {
  opacity: 0.9;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #c5c5c5;
  outline: none;
}

textarea {
  width: 100%;
  border-color: #c5c5c5;
  background: #f8f8f8;
}
.blue {
  color: #2050fd;
  cursor: pointer;
}

.form-group {
  margin-bottom: 1.4rem;
}
@media (max-width: 568px) {
  form {
    margin: 0;
    margin-top: 4rem;
  }
  .login__section {
    display: block;
    background: #f8f8f8;
    min-height: max-content;
  }
}
</style>
