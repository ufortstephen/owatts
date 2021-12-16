<template>
  <div>
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <Header />
    </div>

    <div class="faq">
      <div class="container">
        <breadcrumbs class="container mt-3 mb-5" />
        <div class="text-center mt-5">
          <h2 class="text-center">Customers frequently asked questions</h2>
          <p class="small my-4">
            Quickly get the neccessary informations <br />
            you need from a customers point of view in a single place.
          </p>
          <CInputGroup class="input-prepend search__box">
            <CInputGroupText>
              <CIcon icon="cil-magnifying-glass" />
            </CInputGroupText>
            <CFormInput type="text" placeholder="Search here" />
            <!-- <CButton color="info">Search</CButton> -->
          </CInputGroup>
        </div>

        <div class="container my-5">
          <CAccordion class="mt-5">
            <CAccordionItem
              :item-key="1"
              style="background-color: #f8f8f8 !important"
            >
              <CAccordionHeader> What is OWATT</CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="2" class="my-3">
              <CAccordionHeader> How do I order </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="3">
              <CAccordionHeader> How do I order </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="4" class="my-3">
              <CAccordionHeader> How do I order </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="5">
              <CAccordionHeader> How do I order </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="6" class="my-3">
              <CAccordionHeader> How do I order </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem :item-key="7">
              <CAccordionHeader> How do I order </CAccordionHeader>
              <CAccordionBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies mi, in sit malesuada in lacinia mauris. Leo sit
                posuere scelerisque nulla. Massa orci ut nulla eget pretium.
                Aliquam tristique pharetra tempor, condimentum orci. Erat turpis
                nibh sed feugiat sed nisl porttitor.
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </div>
      </div>
      <Footer class="mt-5" />
    </div>
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
input.form-control,
.input-group-text {
  background: #f8f8f8 !important;
  border: none;
  padding: 0.4rem;
  font-size: small;
  border-radius: 10px;
}

input.form-control:focus,
.input-group-text:focus {
  box-shadow: none;
  border: none;
}
@media (min-width: 768px) {
  .search__box {
    width: 50%;
    margin: 0px auto;
  }
}
</style>

<style>
.faq .accordion-item {
  background-color: #f8f8f8;
  color: #303030 !important;
  box-shadow: none;
  border: none;
  border-radius: 100px !important;
}
.faq .accordion-button,
.faq button.collapsed {
  background-color: #f8f8f8 !important;
  color: #303030 !important;
  font-size: 0.9rem;
  font-weight: 600;
}
.faq .accordion-body {
  background-color: #f8f8f8 !important;
  background: #f8f8f8;
  border-top: 0.4px solid #c5c5c5;
  font-size: 0.9rem;
}

.faq .accordion-button:focus,
.faq .accordion-button:active {
  border: none;
  box-shadow: none !important;
}
</style>
