<template>
  <div class="loading">
    <div class="loadingSpin"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingSpin {
  width: 40px;
  height: 40px;
  border: 5px solid transparent;
  border-radius: 50%;
  border-top-color: red;
  animation: spin infinite 1s;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>