<template>
  <div class="font-roboto text-light text-gray-500">
    <!-- 👉 header -->
    <div id="header" class="bg-[url('/hero-bg.jpg')]">
      <!-- 👉 menu -->
      <NavMenu />

      <!-- hero -->
      <div class="grid grid-cols-12 min-h-screen py-20 px-40">
        <div class="col-span-7">
          <img src="hero-burger.png" />
        </div>
        <div class="col-span-5 text-white text-center ml-5 pt-10">
          <h2 class="text-8xl uppercase font-lilita">Classic Burger</h2>
          <h3 class="text-6xl uppercase font-lilita my-5 tracking-wider">With Onion</h3>
          <p class="font-light leading-7 text-xl font-roboto px-5">
            Our signature burger nows come with onion and cheese. You can customize it to
            your likings. Freshly made to order, all in a Brioche style bun.
          </p>
        </div>
      </div>
    </div>

    <div id="section-1" class="bg-cover bg-center pb-60 bg-[url('/about.jpg')]">
      <div class="mx-auto py-20 text-center px-64">
        <h2
          class="font-oswald font-medium leading-snug text-6xl uppercase tracking-wide text-neutral-800"
        >
          The burger tastes better when you eat it with your family
        </h2>
        <p class="font-roboto font-light py-6 px-10 text-gray-500 text-lg center">
          Spend quality time with your family and eat an affordable, nutritious, and
          delicious meal together. Not all burgers are fast foods. All our burgers are
          handmade to orders for you and your family members to enjoy.
        </p>
        <button class="font-oswald uppercase bg-red-500 text-white text-lg py-3 px-8">
          Explore Full Menu
        </button>
      </div>
    </div>

    <div id="section-2">
      <div class="bg-yellow-500 py-10">
        <div class="container mx-auto flex text-center px-20 text-neutral-900">
          <div class="w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20 stroke-1 block mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <p class="font-medium font-oswald text-2xl uppercase my-5">
              Original Recipes
            </p>
            <p class="font-light font-roboto px-5">
              We use our secret recipes with only the best ingredients to make our
              burgers. Starting from patties, sauces, and even buns.
            </p>
          </div>
          <div class="w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20 block mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
            <p class="font-medium font-oswald text-2xl uppercase my-5">Quality Foods</p>
            <p class="font-light font-roboto px-5">
              We purchase our ingredients from the best suppliers daily, to ensure the
              freshest quality of our burgers.
            </p>
          </div>
          <div class="w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-20 w-20 block mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p class="font-medium font-oswald text-2xl uppercase my-5">
              Fastest Delivery
            </p>
            <p class="font-light font-roboto px-5">
              Burgers are best served while it's hot. We deliver to your door with our
              speedy delivery partners from the nearest outlet.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="section-3">
      <div class="text-center py-20 mx-40">
        <h2 class="text-6xl font-oswald text-red-500 font-medium uppercase">
          Our Crazy Burgers
        </h2>
        <p class="font-roboto font-light px-48 mt-10 mb-10 text-xl text-gray-500">
          Whether you are looking for the classics, our specialties, or just wraps,
          salads, and fries. We have it all. We always have something that rewards your
          tastebud.
        </p>

        <!-- burger grid -->
        <div class="grid grid-cols-4 gap-5">
          <!-- burger item card -->
          <BurgerItem
            image="crispy-chicken.jpg"
            title="Crispy Chicken"
            description="Chicken breast, chilli sauce, tomatoes, pickles, coleslaw"
            :price="11.99"
          />
          <BurgerItem
            image="ultimate-bacon.jpg"
            title="Ultimate Bacon"
            description="House beef patty, cheddar cheese, bacon, onion, mustard"
            :price="14.99"
          />
          <BurgerItem
            image="baa-baa.jpg"
            title="Baa-Baa Black Sheep"
            description="American cheese, tomato relish, avocado, lettuce, red onion"
            :price="15.75"
          />
          <BurgerItem
            image="double-burger.jpg"
            title="Double Burger"
            description="2 beef patties, cheddar cheese, mustard, pickles, tomatoes"
            :price="15.35"
          />
        </div>

        <!-- coupon row 1 -->
        <div
          class="grid grid-cols-12 mt-10 font-oswald uppercase text-4xl text-yellow-800 gap-5"
        >
          <div
            class="col-span-5 pl-48 pb-10 bg-cover bg-center bg-[url('/fries-bg-1.jpg')]"
          >
            <h4 class="font-light mt-16">Get your free</h4>
            <h4 class="font-medium">Cheese Fries</h4>
            <button
              class="font-oswald uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5"
            >
              Claim now
            </button>
          </div>
          <div
            class="col-span-7 pr-10 text-right bg-cover bg-center bg-[url('/burger-bg-1.jpg')]"
          >
            <h4 class="font-light mt-16">Crispy Chicken</h4>
            <h4 class="font-medium">Burger is back!</h4>
            <button
              class="font-oswald uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5"
            >
              Claim now
            </button>
          </div>
        </div>

        <!-- offer -->
        <div class="grid grid-cols-3 mt-20 gap-5">
          <div>
            <img src="offer-1.jpg" />
          </div>
          <div>
            <img src="offer-2.jpg" />
          </div>
          <div>
            <img src="offer-3.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div id="section-4" class="grid grid-cols-2 bg-gray-100 py-20">
      <div class="pl-40">
        <img src="about.png" />
      </div>
      <div class="pl-20 pr-40 pt-20">
        <h4
          class="text-5xl font-oswald uppercase font-medium leading-snug text-neutral-900"
        >
          Nothing brings people together like a good burger
        </h4>
        <p class="font-roboto text-lg text-gray-500 mt-10">
          That's the philosophy that we always believe in. We're a family-owned and
          operated business, and we're proud to be a part of the community.We do our best
          to make sure that everyone's happy and having a good time.
        </p>
        <p class="font-roboto text-lg text-gray-500 mt-10">
          Burgers are what brought us together and what keeps us together. It's something
          that you can't put a price tag on. More importantly, we are interested in
          people. It's not just about the food.
        </p>
      </div>
    </div>

    <div id="section-5" class="bg-yellow-500 grid grid-cols-5 text-amber-900">
      <div class="pl-40 pt-20 col-span-3">
        <h4 class="font-oswald text-5xl uppercase pt-10">Download Mobile App and</h4>
        <h4 class="font-oswald text-6xl uppercase font-bold mt-2 mb-5">Save up to 20%</h4>
        <p class="font-roboto font-light my-7 text-lg pr-20">
          Bye bye long queues. Order before and your food will be ready in a flash. Enjoy
          the convenience of ordering food online at any time and from any location.
        </p>
        <button>
          <img src="/appstore.png" class="h-[50px] mr-5" />
        </button>
        <button>
          <img src="/googleplay.png" class="h-[50px]" />
        </button>
      </div>
      <div class="col-span-2">
        <img src="/eshop.png" class="-mt-10" />
      </div>
    </div>

    <div
      id="section-6"
      class="bg-gray-200 py-20 flex flex-wrap gap-10 px-20 justify-center"
    >
      <img src="brand-1.png" class="w-40" />
      <img src="brand-2.png" class="w-40" />
      <img src="brand-3.png" class="w-40" />
      <img src="brand-4.png" class="w-40" />
      <img src="brand-5.png" class="w-40" />
      <img src="brand-6.png" class="w-40" />
    </div>

    <div id="section-7" class="text-center my-20">
      <h2 class="text-6xl font-oswald text-red-500 font-medium uppercase mb-5">
        Wide Selections
      </h2>
      <p class="text-xl text-gray-500 px-96">
        Besides burgers, we also have a large range of items including sandwiches, wraps,
        panini, soups, salads and more.
      </p>

      <div class="grid grid-cols-4 gap-5 mx-36 mt-10">
        <img src="img-01.jpg" />
        <img src="img-02.jpg" />
        <img src="img-03.jpg" />
        <img src="img-04.jpg" />
        <img src="img-05.jpg" />
        <img src="img-06.jpg" />
        <img src="img-07.jpg" />
        <img src="img-08.jpg" />
      </div>
    </div>

    <div
      id="section-8"
      class="text-center text-neutral-700 bg-top bg-cover bg-[url('/banner.jpg')] py-20"
    >
      <h4 class="font-oswald text-4xl uppercase">We guarantee</h4>
      <h4 class="font-oswald text-6xl uppercase font-medium my-5">30 Minutes Delivery</h4>
      <p class="text-lg mx-96">
        Free delivery for all orders above RM 30. We are committed to deliver the freshest
        and warmest food to all our customers. If your order is not delivered within 30
        minutes, your next meal is on us!
      </p>
      <button
        class="font-oswald uppercase bg-red-500 text-white text-2xl font-medium py-3 px-8 mt-5"
      >
        CALL: 03-2282 6400
      </button>
    </div>

    <div
      id="contacts"
      class="grid grid-cols-4 mt-10 px-20 mx-20 text-neutral-900 text-center text-lg"
    >
      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5">Location</h4>
        <p>
          No, 1, Persiaran Bandar Utama, <br />
          47800 Petaling Jaya, <br />
          Selangor, Malaysia.<br />
        </p>
      </div>

      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5">OPENING HOURS</h4>
        <p>
          Mon-Fri: 9:00AM - 10:00PM<br />
          Saturday: 10:00AM - 8:30PM<br />
          Sunday: 12:00PM - 5:00PM
        </p>
      </div>
      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5">ORDER NOW</h4>
        <p>Call our hotline at</p>
        <p>03-2282 6400</p>
      </div>
      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5 text-center">
          FOLLOW US
        </h4>
        <p>For the latest updates!</p>
        <div class="flex justify-center gap-10 mt-5">
          <img src="facebook.png" class="w-10" />
          <img src="instagram.png" class="w-10" />
          <img src="youtube.png" class="w-10" />
        </div>
      </div>
    </div>

    <PageFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>
