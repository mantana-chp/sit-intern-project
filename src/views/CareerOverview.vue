<script setup>
import { ChevronDown } from 'lucide-vue-next'
import careers from '../../data/careers.json'
</script>

<template>
  <div class="h-screen flex justify-center py-28">
    <div class="flex flex-col w-[1000px]">
      <div class="justify-start flex">
        <h1
          class="tracking-wide bg-gradient-to-r from-[#1C42C9] via-[#DF61A5] to-[#DF61A5] text-transparent bg-clip-text text-2xl font-medium"
        >
          Career Overview
        </h1>
      </div>

      <div class="flex flex-col justify-center pt-6">
        <p class="text-center italic text-lg">
          "Empowering SIT Developers for the Future of Tech"
        </p>

        <div class="list-careers pt-6">
          <v-expansion-panels class="my-4 flex gap-10" variant="inset">
            <v-expansion-panel v-for="career in careers" :key="career.id">
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
                class="flex justify-between items-center"
              >
                {{ career.name }}
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                {{ career.description }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
