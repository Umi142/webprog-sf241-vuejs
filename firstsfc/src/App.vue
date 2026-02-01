<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import '../../home/css/style.css'

const message = ref("Hello Vue!")
const name = ref("Yumilka Gutierrez")
const profile = ref({
  course: "Bachelor of Science in Computer Science With Specialization in Cyber Security & Forensics",
  experience: "Python Fundamentals • Linux • Cisco Packet Tracer • MySQL Workbench",
  hobbies: "Cats",
  goals: "Have more cats"
})

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

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <main class="main-container">
    <p>The message is taken from 'data' inside the Vue instance: {{ message }}</p>
    <div id="app-message">{{ message }}</div>

    <h1>Personal Profile Web page - {{ name }}</h1>
    
    <div class="profile-box">
        <p><span class="label">Course:</span><br> {{ profile.course }}</p>
        <p><span class="label">IT Experience:</span><br> {{ profile.experience }}</p>
        <p><span class="label">Hobbies & Interests:</span><br> {{ profile.hobbies }}</p>
        <p><span class="label">Goals In Life/Dream:</span><br> {{ profile.goals }}</p>
    </div>

    <h1 class="section-title">Food Gallery (v-for)</h1>
    <div class="food-gallery">
        <img v-for="url in manyFoods" :key="url" :src="url" class="food-icon" alt="food item">
    </div>

    <hr class="divider" />
    
    <section class="supabase-section">
      <h2>Instruments from Supabase</h2>
      <ul>
        <li v-for="instrument in instruments" :key="instrument.id">
          {{ instrument.name }}
        </li>
      </ul>
    </section>

    <hr class="divider" />
    
    <comment-form />
    <comment />
  </main>
</template>

<style>
html, body {
  background-color: #0D0F2E !important;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.main-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.divider {
  border: 0;
  border-top: 2px solid #5C558F;
  margin: 40px 0;
}
</style>