<script setup>
const name = "Yumilka Gutierrez"
const profile = {
  course: "Bachelor of Science in Computer Science With Specialization in Cyber Security & Forensics",
  experience: "Python Fundamentals • Linux • Cisco Packet Tracer • MySQL Workbench",
  hobbies: "Cats",
  goals: "Have more cats"
}
</script>

<template>
  <div class="profile-wrapper">
    <h1>Personal Profile Web page - {{ name }}</h1>
    <div class="profile-box">
      <p><span class="label">Course:</span><br> {{ profile.course }}</p>
      <p><span class="label">IT Experience:</span><br> {{ profile.experience }}</p>
      <p><span class="label">Hobbies & Interests:</span><br> {{ profile.hobbies }}</p>
      <p><span class="label">Goals In Life/Dream:</span><br> {{ profile.goals }}</p>
    </div>
  </div>
</template>

<style scoped>
.profile-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
}
</style>