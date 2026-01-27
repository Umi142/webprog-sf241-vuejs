<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

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
    <h1>Instruments</h1>
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
#app {
  font-family: sans-serif;
  padding: 20px;
}
</style>