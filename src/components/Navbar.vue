<script setup>
import { ref, watchEffect } from 'vue'
import { Menu } from 'lucide-vue-next'

const drawer = ref(null)
</script>

<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <Menu />
      </v-app-bar-nav-icon>

      <v-app-bar-title
        ><div class="tracking-widest">
          <RouterLink :to="{ name: 'home' }" active-class="text-black"
            >SIT INTERNSHIP</RouterLink
          >
        </div></v-app-bar-title
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary class="pt-4">
      <div class="flex flex-col gap-3">
        <RouterLink :to="{ name: 'home' }">
          <v-list-item link title="Home"></v-list-item
        ></RouterLink>
        <RouterLink :to="{ name: 'hirings' }">
          <v-list-item link title="Intern Hiring"></v-list-item
        ></RouterLink>
        <RouterLink :to="{ name: 'careers' }">
          <v-list-item link title="Career Overview"></v-list-item
        ></RouterLink>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<style scoped></style>
