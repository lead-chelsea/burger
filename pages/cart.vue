<template>
  <div>
    <div class="text-center bg-[url('/menu-page.jpg')]">
      <NavMenu class="pl-20" />
      <h1 class="text-white font-oswald uppercase text-6xl py-28">Shopping Cart</h1>
    </div>

    <table class="table-auto w-2/3 mx-auto mt-20 [border-spacing:20px]">
      <thead>
        <tr class="font-bold border-b">
          <td class="w-60 pl-3 pb-3">Name</td>
          <td class="text-right pb-3 pr-5">Price</td>
          <td class="text-center pb-3">Quantity</td>
          <td class="w-28 text-right pb-3">Total</td>
          <td class="text-center pb-3">Remove</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in $store.state.orders"
          :key="order.name"
          class="font-oswald uppercase text-2xl border-b"
        >
          <td class="pl-3 py-10">{{ order.name }}</td>
          <td class="text-right pr-5 py-3">RM {{ order.price.toFixed(2) }}</td>
          <td class="text-center py-3">{{ order.quantity }}</td>
          <td class="text-right py-3">
            RM {{ (order.price * order.quantity).toFixed(2) }}
          </td>
          <td class="text-center py-3"><button @click="removeItem(name)">✖</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-oswald font-bold text-2xl bg-gray-100">
          <td class="uppercase pl-3 py-10" colspan="3">Total</td>
          <td class="text-right">RM {{ totalAmount.toFixed(2) }}</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td colspan="3">
            <button
              class="mt-5 font-oswald uppercase bg-red-500 text-white text-xl py-3 px-2"
            >
              Confirm My Order
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    totalAmount() {
      const values = Object.values(this.$store.state.orders);

      console.log('vvvvv:', values);

      let total = 0;
      values.forEach((element) => {
        total += element.price * element.quantity;
      });

      return total;
    },
  },
  methods: {
    removeItem(item) {
      // console.log(item);
      this.$store.commit('removeItem', item);
    },
  },
};
</script>
