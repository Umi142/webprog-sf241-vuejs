<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import '../../home/css/style.css'

const message = ref("Hello Vue!")
const manyFoods = ref([
  'https://www.w3schools.com/vue/img_burrito.svg',
  'https://www.w3schools.com/vue/img_salad.svg',
  'https://www.w3schools.com/vue/img_cake.svg',
  'https://www.w3schools.com/vue/img_soup.svg',
  'https://www.w3schools.com/vue/img_fish.svg',
  'https://www.w3schools.com/vue/img_pizza.svg',
  'https://www.w3schools.com/vue/img_rice.svg'
])

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => { getInstruments() })
</script>

<template>
  <div class="main-wrapper">
    <div id="app-message">{{ message }}</div>

    <simplified-profile />

    <h1>Food Gallery (v-for)</h1>
    <div class="food-gallery">
      <img v-for="url in manyFoods" :key="url" :src="url" class="food-icon">
    </div>

    <hr class="section-divider" />
    
    <h2>Instruments from Supabase</h2>
    <ul class="supabase-list">
      <li v-for="inst in instruments" :key="inst.id">{{ inst.name }}</li>
    </ul>

    <hr class="section-divider" />
    
    <comment-form />
    <comment />
  </div>
</template>

<style>
.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

html, body {
  background-color: #0D0F2E !important;
  color: #FFFDF6;
  margin: 0;
  min-height: 100vh;
}

.section-divider {
  width: 100%;
  border: 0;
  border-top: 2px solid #5C558F;
  margin: 40px 0;
}

.supabase-list {
  text-align: left;
  list-style-type: square;
}
</style>