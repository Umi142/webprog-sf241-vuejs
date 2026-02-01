<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => { getInstruments() })
</script>

<template>
  <div class="supabase-box">
    <h2>Instruments from Supabase</h2>
    <ul class="clean-list">
      <li v-for="inst in instruments" :key="inst.id">{{ inst.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.supabase-box {
  width: 100%;
  text-align: center;
}
.clean-list {
  list-style: square;
  display: inline-block;
  text-align: left;
  color: #FFFDF6;
}
</style>