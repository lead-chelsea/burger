<template>
  <div id="menu" class="grid grid-cols-2 py-5">
    <div id="menu-left">
      <img src="logo.png" class="w-[150px]" alt="" />
    </div>

    <div id="menu-right">
      <div class="grid grid-cols-5 font-oswald text-white uppercase pt-5 pr-10 gap-4">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/menu">Our Menu</NuxtLink>
        <NuxtLink to="/locations">Locations</NuxtLink>
        <NuxtLink to="/contacts">Contacts</NuxtLink>
        <NuxtLink to="/cart">
          Cart
          <span :class="{ 'text-yellow-500': $store.getters.totalItems > 0 }"
            >({{ $store.getters.totalItems }})</span
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
