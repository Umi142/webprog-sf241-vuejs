<script setup>
import '../../home/css/style.css'
</script>

<template>
  <div class="page-container">
    <simplified-profile />

    <food-gallery />

    <hr class="section-divider" />
    
    <instruments-list />

    <hr class="section-divider" />
    
    <comment-form />
    <comment />
  </div>
</template>

<style>
html, body {
  background-color: #0D0F2E !important;
  color: #FFFDF6;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 40px 20px;
}

.section-divider {
  width: 100%;
  border-top: 2px solid #5C558F;
  margin: 40px 0;
}
</style>