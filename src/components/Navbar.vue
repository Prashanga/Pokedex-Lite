<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="text-white navbar">
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

<style lang="scss" scoped>
 .navbar {
   background-color: $mainNav;
 }
</style>
