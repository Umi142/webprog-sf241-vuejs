<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import './components/css/personalprofile.css'

// --- Profile Data ---
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

// --- Supabase Logic ---
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
  <div id="app">
    <p>The message is taken from 'data' inside the Vue instance: {{ message }}</p>
    <div id="app-message">{{ message }}</div>

    <h1>Personal Profile Web page - {{ name }}</h1>
    
    <div class="profile-box">
        <p><span class="label">Course:</span><br> {{ profile.course }}</p>
        <p><span class="label">IT Experience:</span><br> {{ profile.experience }}</p>
        <p><span class="label">Hobbies & Interests:</span><br> {{ profile.hobbies }}</p>
        <p><span class="label">Goals In Life/Dream:</span><br> {{ profile.goals }}</p>
    </div>

    <h1 style="border-top: 2px solid #5C558F; padding-top: 20px;">Food Gallery (v-for)</h1>
    <div class="food-gallery">
        <img v-for="url in manyFoods" :key="url" :src="url" class="food-icon" alt="food item">
    </div>

    <hr />
    <h2>Instruments from Supabase</h2>
    <ul>
      <li v-for="instrument in instruments" :key="instrument.id">
        {{ instrument.name }}
      </li>
    </ul>

    <hr />
    <comment-form />
    <comment />
  </div>
</template>

<style>

</style>