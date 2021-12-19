<template>
  <router-view />
</template>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
// @import '@/assets/css/main.css';
// @import '@/assets/css/responsive.css';
</style>

<style>
@import '@/assets/css/main.css';
@import '@/assets/css/responsive.css';
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
.breadcrumb {
  background: transparent !important;
}

input:focus {
  box-shadow: 0px;
}
.header__text {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 3rem;
}
#preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0);
}
.loader {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 0.8s linear infinite;
  -webkit-animation: loader 0.8s linear infinite;
}
@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}
@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}
</style>
