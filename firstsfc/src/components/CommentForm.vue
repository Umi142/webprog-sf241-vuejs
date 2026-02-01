<template>
    <div class="form-wrapper">
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required class="form-control" placeholder="Your name...">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment" required class="form-control" placeholder="Write your comment here..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div v-if="submissionStatus" class="status-msg">
          {{ submissionStatus }}
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '../lib/supabaseClient'

  const name = ref('');
  const comment = ref('');
  const submissionStatus = ref(null);
  
  const tableName = 'comments';
  
  async function submitComment() {
    submissionStatus.value = "Submitting...";
    try {
      const { error } = await supabase
        .from(tableName)
        .insert([{ name: name.value, comment: comment.value }]);
  
      if (error) {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting comment. Please try again.";
      } else {
        submissionStatus.value = "Comment submitted successfully!";
        name.value = ''; 
        comment.value = '';
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
  }
  </script>
  
  <style scoped>
  .form-wrapper {
    width: 100%;
    max-width: 800px; /* Matches my profile width */
    margin: 20px auto;
    text-align: left; /* Keeps labels aligned to the left */
  }

  h2 {
    color: #9F7AEA;
    border-bottom: 1px solid #5C558F;
    padding-bottom: 10px;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #FFFDF6;
    font-weight: bold;
  }
  
  .form-control {
    width: 100%; /* Makes it lengthier */
    padding: 12px;
    border: 1px solid #5C558F;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05); /* Dark background */
    color: white; /* Visible text */
    font-size: 16px;
    box-sizing: border-box; 
  }

  /* Specifically making the comment box taller */
  textarea.form-control {
    min-height: 150px; 
    resize: vertical; /* Allows you to still resize if needed */
  }

  .form-control:focus {
    outline: none;
    border-color: #9F7AEA;
    box-shadow: 0 0 5px rgba(159, 122, 234, 0.5);
  }
  
  .btn {
    padding: 10px 25px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .status-msg {
    margin-top: 15px;
    color: #F6B846; /* Gold/Yellow status text */
    font-style: italic;
  }
  </style>