<template>
<q-layout view="hHh lpR fFf">
  <Navbar />
  <q-page-container>
    <q-page class="flex flex-center">
        <h1>About page</h1>
    </q-page>
  </q-page-container>
</q-layout>
        
</template>

// FOOTER


<script>
import Navbar from 'components/Navbar.vue'

export default {
  name: 'About',
  components: { Navbar },
}
</script>

<style>

</style>