<template>
  <div class="rounded-md border-gray-200 border text-left">
    <img :src="image" alt="" />
    <p class="pl-5 mt-5 font-oswald font-medium uppercase text-2xl">{{ title }}</p>
    <p class="pl-5 mt-2 text-gray-500 font-light font-roboto mr-5">
      {{ description }}
    </p>
    <p class="pl-5 mb-8 mt-5">
      <span
        class="rounded rounded-lg bg-amber-800 px-5 py-2 text-yellow-400 font-oswald font-bold text-xl"
        >RM {{ price }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'description', 'price'],
};
</script>
