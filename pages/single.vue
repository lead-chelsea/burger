<template>
  <div class="font-roboto font-light">
    <div class="text-center bg-[url('/about-page.jpg')]">
      <NavMenu />
      <h1 class="text-white font-oswald uppercase text-6xl py-28">OUR BURGERS</h1>
    </div>

    <div id="content" class="grid grid-cols-2 mt-10 px-10 gap-5">
      <img
        src="https://jthemes.net/themes/html/testo/files/images/menu/burger-06.png"
        alt=""
      />
      <div class="font-light pt-5">
        <h1 class="font-oswald font-bold text-5xl uppercase">Smokey House</h1>
        <div class="my-3 text-lg">4.38 <Star :rating="rating" /></div>
        <p class="font-oswald font-bold text-4xl text-yellow-500">RM 9.60</p>
        <p class="mt-3">
          Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus
          ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium
        </p>

        <table class="table-auto w-full mt-5">
          <tbody>
            <tr class="border-b border-dotted">
              <td class="font-bold pt-2 pb-2">Portion Size</td>
              <td class="text-right pt-2 pb-2 pr-10">390g</td>
            </tr>
            <tr class="border-b border-dotted">
              <td class="font-bold pt-2 pb-2">Calories</td>
              <td class="text-right pr-10 pt-2 pb-2">680kj</td>
            </tr>
            <tr class="border-b border-dotted">
              <td class="font-bold pt-2 pb-2">Allergies:</td>
              <td class="text-right pr-10 pt-2 pb-2">Lactose, Gluten, Mustard</td>
            </tr>
            <tr class="border-b border-dotted">
              <td class="font-bold pt-2 pb-2">Tags:</td>
              <td class="text-right pr-10 pt-2 pb-2">Burgers</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="pl-20">
      <h3 class="font-oswald text-bold text-3xl uppercase mt-10 mb-5">
        Customer Reviews
      </h3>

      <div class="flex">
        <img
          src="https://jthemes.net/themes/html/testo/files/images/review-author-1.jpg"
          class="rounded-full w-12 h-12"
          alt=""
        />
        <div class="ml-5">
          <div>
            <div class="mb-2"><Star :rating="5" /></div>
            <span class="uppercase font-bold">Sean McCarthy</span> December 4, 2020
          </div>
          <p class="mt-2 pr-20">
            Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit
            magna tempus an aliquet porta vitae auctor aliqum mullam blandit tempor sapien
            gravida congue eros magna nihil impedit tempor. Semper lacus cursus porta
            lectus enim ipsum
          </p>
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 2,
    };
  },
};
</script>
