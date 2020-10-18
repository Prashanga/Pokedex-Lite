<template>
<q-layout view="hHh lpR fFf">
  <Navbar />
  <q-page-container>
    <q-page class="flex flex-center about-page">
      <div class="about-content">
        <h1>
          About Pokédex Lite 
        </h1>
        <p>
          Hello, I've built this application to learn <a href="https://quasar.dev/" target="_blank" class="link__quasar">Quasar</a> framework and to practice implementing real-world external APIs
          All the resources including the Pokemon details and images have been provided by <a href="https://pokeapi.co/"  target="_blank" class="link__pokeapi">PokéApi</a>.
          This application is developed for learning and educational purposes only, abiding by the Fair Use Policy of the API provider.
        </p>
        <p>
          Please visit my LinkedIn and GitHub profiles by clicking on the respective icons in the navbar.
          The source code for this application can be viewed from my GitHub profile.
        </p>
      </div>
    </q-page>
  </q-page-container>
</q-layout>
        
</template>

<script>
import Navbar from 'components/Navbar.vue'

export default {
  name: 'About',
  components: { Navbar }
}
</script>

<style lang="scss" scoped>
  .about-page {
    background-color: $primaryBlue;
    height: 100vh;
    overflow: hidden;
  }
  .about-content {
    width:100%;
    height: 100%;
    margin: 0 3rem;
    padding: 0 6rem 9rem;
    background-color: $cardWhite;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
    color: $mainNav;
  }
  p {
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: justify;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 1.5rem;
    display: inline-block;
    
  }
  .link__quasar {
    color: #135BA2;
    
    &:hover {
      transform: rotate(720deg);
      transition: all 1s ease-in-out;
    }
  }
  .link__pokeapi {
    color: #EF5350;

    &:active {
      transform: scale(1.3);
      transition: all 0s ease-in-out;
    }
  }

</style>