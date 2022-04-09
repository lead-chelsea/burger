<template>
  <div class="text-center">
    <div class="border border-gray p-5">
      <img :src="'/' + item.image" alt="" />
    </div>
    <div class="font-oswald uppercase text-2xl mt-5">{{ item.name }}</div>
    <p class="my-2 font-light text-gray-500">{{ item.description }}</p>
    <p class="mb-8 mt-5">
      <span
        class="rounded rounded-lg bg-amber-800 px-5 py-2 text-yellow-400 font-oswald font-bold text-xl"
        >RM {{ item.price.toFixed(2) }}</span
      >
    </p>

    <button class="button font-oswald uppercase border py-2 px-3" @click="addItem">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  props: ['name', 'item'],
  methods: {
    addItem(e) {
      this.$store.commit('addItem', this.item);
    },
  },
};
</script>
