<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-purple-9 text-white" height-hint=" ">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="60px" class="no-margin">
            <img src="/favicon.svg" >
          </q-avatar>
          Pokédex
        </q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>