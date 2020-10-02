<template>
  <q-header bordered class="text-white navbar">
    <q-toolbar>
      <q-avatar size="60px" >
        <img src="/favicon.svg" >
      </q-avatar>
      <q-toolbar-title class="title">
        Pokédex
      </q-toolbar-title>
      <a href="https://github.com/Prashanga" target="blank" class="q-mr-sm no-padding">
        <q-icon name="fab fa-github" class="profileIcons q-mr-sm no-padding" /> 
      </a>
      <a href="https://www.linkedin.com/in/prashanga-dhakal-0a4677a6/" target="blank" class="no-margin no-padding">
        <q-icon name="fab fa-linkedin" class="profileIcons q-mr-lg no-padding" /> 
      </a>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
 .navbar {
   background-color: $mainNav;
 }
  .profileIcons{
    color: white;
    cursor: pointer;
    font-size: 1.5rem;  
    vertical-align: baseline !important;
  }
  a{
    text-decoration: none;
  }
  @media only screen 
  and (min-device-width: 300px) 
  and (max-device-width: 599px)
  {
    .q-avatar{
      position: relative;
      left: -15px;
    }
    .title{
      position: relative;
      left: -25px;
    }
  }
</style>
