<template>
  <router-view />
</template>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>

<style>
@font-face {
  font-family: 'Manrope';
  src: local('Manrope'),
    url(@/fonts/Manrope/Manrope-VariableFont_wght.ttf) format('truetype');
}

* {
  font-family: Manrope !important;
  /* font-weight: 400 !important; */
}
p {
  font-size: 15px !important;
}

input:focus {
  box-shadow: 0px;
}
.header__text {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 3rem;
}
</style>
