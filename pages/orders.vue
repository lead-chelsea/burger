<template>
  <div>
    <div class="text-center bg-[url('/menu-page.jpg')]">
      <NavMenu class="pl-20" />
      <h1 class="text-white font-oswald uppercase text-6xl py-28">Orders</h1>
    </div>

    <div v-for="order in orders" :key="order.id">
      <table class="table-auto w-2/3 mx-auto mt-20 [border-spacing:20px] mb-20">
        <thead>
          <tr>
            <td colspan="5">
              <h1 class="font-oswald uppercase text-2xl pb-10">
                Order ID - {{ order.id }}
              </h1>
            </td>
          </tr>
          <tr class="font-bold border-b">
            <td class="w-60 pl-3 pb-3">Name</td>
            <td class="text-right pb-3 pr-5">Price</td>
            <td class="text-center pb-3">Quantity</td>
            <td class="w-28 text-right pb-3">Total</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in order.data.orders"
            :key="item.name"
            class="font-oswald uppercase text-2xl border-b"
          >
            <td class="pl-3 py-10">{{ item.name }}</td>
            <td class="text-right pr-5 py-3">RM {{ item.price.toFixed(2) }}</td>
            <td class="text-center py-3">{{ item.quantity }}</td>
            <td class="text-right py-3">
              RM {{ (item.price * item.quantity).toFixed(2) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },

  mounted() {
    this.$axios.get('/.netlify/functions/readorders').then((response) => {
      console.log(response.data);
      this.orders = response.data;
    });
  },
};
</script>
