<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}:</strong> {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getComments()
})
</script>

<style scoped>
  div {
    border: 1px dashed #9F7AEA; /* Matching my purple theme */
    display: block; /* Changed from inline-block to allow full width */
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.05); /* Dark background so white text is visible */
    color: #FFFDF6; /* Force white text */
    max-width: 600px; /* Makes it wider than a tiny box */
    border-radius: 10px;
    word-wrap: break-word; /* Fixes the text overflow */
  }

  ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }

  li {
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(159, 122, 234, 0.2);
  }
</style>