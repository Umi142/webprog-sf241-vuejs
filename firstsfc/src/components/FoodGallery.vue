<script setup>
import { ref } from 'vue'

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
</script>

<template>
  <div class="gallery-container">
    <div id="app-message">{{ message }}</div>
    <h1>Food Gallery (v-for)</h1>
    <div class="food-gallery">
      <img v-for="url in manyFoods" :key="url" :src="url" class="food-icon">
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  width: 100%;
  text-align: center;
}
</style>