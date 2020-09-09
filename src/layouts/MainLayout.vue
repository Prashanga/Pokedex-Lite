<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Navbar />
    
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from 'components/Navbar.vue'

export default {
  name: 'MainLayout',
  components: { Navbar },
  data () {
    return {
      
    }
  }
}
</script>
