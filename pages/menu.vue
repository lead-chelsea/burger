<template>
  <div>
    <div class="text-center bg-[url('/menu-page.jpg')]">
      <NavMenu class="pl-20" />
      <h1 class="text-white font-oswald uppercase text-6xl pt-20 pb-32">Our Menu</h1>
    </div>

    <div>
      <div data-netlify-identity-menu />
    </div>

    <div class="grid md:grid-cols-3 gap-x-5 gap-y-16 px-20 pt-10 grid-cols-2">
      <MenuItem v-for="b in items" :key="b.name" :item="b" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  head: {
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      },
    ],
  },
  mounted() {
    this.$axios.get('items.json').then((response) => {
      // this.items = response.data;
      this.items = response.data.burgers;
    });
  },
};
</script>
