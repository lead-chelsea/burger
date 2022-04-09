<template>
  <div class="inline">
    <span v-for="n in rating" :key="n">⭐️</span>
  </div>
</template>

<script>
export default {
  props: ['rating'],
};
</script>
