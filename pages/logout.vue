<template>
  <div>Logging out...</div>
</template>

<script>
export default {
  mounted() {
    this.$fire.auth.signOut();
  },
};
</script>

<style></style>
