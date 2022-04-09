<template>
  <div>
    <div class="text-center bg-[url('/menu-page.jpg')]">
      <NavMenu class="pl-20" />
      <h1 class="text-white font-oswald uppercase text-6xl pt-20 pb-32">Our Menu</h1>
    </div>

    <div class="grid grid-cols-3 gap-x-5 gap-y-16 px-20 pt-10">
      <MenuItem v-for="b in items" :key="b.name" :item="b" />
    </div>

    <!-- <MenuItem name="Crispy Chicken" />
    <MenuItem name="Double Beef" />
    <MenuItem name="BaaBaa Blacksheep" />
    <MenuItem name="Messy Messy" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then((response) => {
      // this.items = response.data;
      this.items = response.data.burgers;
    });
  },
};
</script>
