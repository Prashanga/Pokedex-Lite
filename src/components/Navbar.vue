<template>
  <q-header bordered class="text-white navbar">
    <q-toolbar>
      <router-link
        to="/"
      >
        <q-avatar size="60px" >
          <img src="/favicon.svg" >
        </q-avatar>
      </router-link>

      <q-toolbar-title class="title">
        Pokédex Lite
      </q-toolbar-title>

      <a 
        href="https://github.com/Prashanga" 
        target="_blank" 
      >
        <q-icon name="fab fa-github" class="profileIcons q-mr-md" /> 
      </a>

      <a 
        href="https://www.linkedin.com/in/prashanga-dhakal-0a4677a6/" 
        target="_blank" 
        class="q-mr-md"
      >
        <q-icon name="fab fa-linkedin" class="profileIcons " /> 
      </a>

      <router-link
        to="/about"
        class="q-mr-lg"
      >
        <q-icon name="fas fa-info-circle" class="profileIcons " /> 
      </router-link>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
 .navbar{
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
