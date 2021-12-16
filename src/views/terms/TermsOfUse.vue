<template>
  <div>
    <div class="px-3 fixed-top" style="z-index: 9; background: rgb(0, 0, 0)">
      <Header />
    </div>

    <div class="p-4">
      <breadcrumbs class="container mt-3 mb-4" />
      <h2 class="header__text text-center mt-5">Terms of Use</h2>
      <p class="container small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in te mpor
        cursus tellus. Orci, congue ut justo ullamcorper dolor tellus vel
        suspendisse malesuada. Vel varius vitae aliquam nunc, convallis congue
        imperdiet. Fringilla quis id nullam commodo nisi adipiscing ornare enim
        nisi. Auctor augue neque ornare vestibulum pretium, felis purus elit
        nibh. Adipiscing massa, erat eget at. Sed faucibus purus nunc laoreet
        penatibus. Facilisis et enim cursus egestas morbi. Venenatis praesent in
        enim mi, ac nec, sit eu, a. Lobortis feugiat eget nunc, nec amet vel.
        Ornare id eu non nibh ipsum bibendum elit. Mattis morbi nunc et purus
        lacus tellus convallis amet euismod. Rhoncus ut phasellus malesuada
        egestas risus tellus ullamcorper nunc vitae. Luctus eget mattis
        convallis in aenean dui. Purus mattis quis cras sapien, in cras
        consectetur. Sollicitudin curabitur neque, in libero. Augue mattis sed
        convallis nunc cras egestas imperdiet phasellus. Amet, quis magna
        iaculis varius ac. Rhoncus donec faucibus pulvinar maecenas proin massa
        at. Bibendum et justo imperdiet fringilla. Dictum proin eu eget accumsan
        enim blandit amet pellentesque. Tincidunt nunc sed donec viverra nisl,
        sed sapien quis iaculis. Mattis augue praesent odio aliquet blandit
        aliquet. Ullamcorper volutpat eu nunc sollicitudin facilisi. Et tellus
        bibendum integer quam leo maecenas augue. Massa massa tortor, faucibus
        ornare scelerisque cursus velit proin justo. Facilisis donec dignissim
        natoque nulla malesuada id nunc neque, dignissim. Arcu convallis mollis
        rhoncus rutrum nisi leo in odio tempor. Pretium vulputate maecenas nunc,
        sit amet, sed. Dictum praesent egestas volutpat sed turpis maecenas hac
        ipsum tincidunt. In scelerisque ullamcorper donec ornare in. Morbi
        bibendum integer tellus urna, laoreet adipiscing diam ornare adipiscing.
        Tristique malesuada tellus quis adipiscing. Arcu semper purus tincidunt
        blandit diam suspendisse congue in purus. Arcu in vestibulum maecenas
        curabitur lorem quam. Mauris quam congue viverra euismod. Diam tincidunt
        maecenas odio viverra tempus, ut donec. Nulla nibh ornare sodales
        condimentum. Donec vestibulum isque cras ultrices. Mauris eget proin
        orci tempor semper ultrices. Integer eget varius dolor, risus, ut
        egestas dui ut. Est id dignissim quis urna. Nec faucibus ipsum enim,
        nulla tortor sed pulvinar massa. Est, nulla interdum elementum integer
        lorem id suspendisse diam rhoncus. Massa amet fames facilisi sagittis.
        Amet facilisis odio dolor, vel netus maecenas faucibus rhoncus, aliquam.
        Facilisis habitant egestas nibh id fermentum sem ut velit.
      </p>
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

<style>
h2 {
  font-weight: 400 !important;
  font-size: 32px;
}

p {
  /* font-weight: lighter !important; */
}
</style>
