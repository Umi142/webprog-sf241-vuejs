<template>
  <div class="hugas">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Pang Hugas',
      message: 'Tubig, Salabat, Bactidol'
    }
  }
};
</script>

<style>
  .hugas {
    border: dashed rgba(255, 6, 6, 0.844) 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgb(177, 172, 172)  }
</style>