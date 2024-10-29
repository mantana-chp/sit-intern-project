<script setup>
import { Filter } from 'lucide-vue-next'
import ArrowDown from '../assets/arrow-down-narrow-wide.svg'
import ArrowUp from '../assets/arrow-up-narrow-wide.svg'
import { ref } from 'vue'

const isSort = ref(false)
console.log(isSort.value)
</script>

<template>
  <div class="h-screen flex justify-center py-28">
    <div class="flex flex-col w-[1000px]">
      <div class="justify-center flex">
        <h1
          class="tracking-wide bg-gradient-to-r from-[#1C42C9] via-[#DF61A5] to-[#DF61A5] text-transparent bg-clip-text text-2xl font-medium"
        >
          Intern Hiring
        </h1>
      </div>

      <div class="flex gap-2">
        <button>
          <Filter />
        </button>
        <button @click="isSort = !isSort">
          <img :src="isSort ? ArrowUp : ArrowDown" alt="sort" />
        </button>
      </div>

      <v-app id="inspire">
        <v-main>
          <v-container>
            <v-row>
              <v-col v-for="n in 24" :key="n" cols="4">
                <v-card height="355" width="320"></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<style scoped></style>
