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
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px; /* wider form */
  margin: 0 auto;
}

input, textarea {
  width: 100%; /* Makes them fill the 600px width */
  padding: 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #5C558F;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 16px;
}

textarea {
  min-height: 120px; /* Gives more room for actual comments */
  resize: vertical;
}

button {
  width: 120px;
  padding: 10px;
  align-self: flex-start; /* Keeps the button on the left of the form */
}
</style>