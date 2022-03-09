<template>
  <div class="font-roboto">
    <div class="text-center bg-[url('/about-page.jpg')]">
      <NavMenu />
      <h1 class="text-white font-oswald uppercase text-7xl py-28">Contact Us</h1>
    </div>

    <div
      id="contacts"
      class="grid grid-cols-3 mt-10 px-20 mx-20 text-neutral-900 text-center text-lg"
    >
      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5">Location</h4>
        <p class="font-light">
          No, 1, Persiaran Bandar Utama, <br />
          47800 Petaling Jaya, <br />
          Selangor, Malaysia.<br />
        </p>
      </div>

      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5">OPENING HOURS</h4>
        <p class="font-light">
          Mon-Fri: 9:00AM - 10:00PM<br />
          Saturday: 10:00AM - 8:30PM<br />
          Sunday: 12:00PM - 5:00PM
        </p>
      </div>
      <div>
        <h4 class="uppercase font-medium font-oswald text-2xl my-5">ORDER NOW</h4>
        <p class="font-light">Call our hotline at</p>
        <p class="font-light">03-2282 6400</p>
      </div>
    </div>

    <div class="text-center px-52">
      <h1 class="text-5xl font-oswald font-medium mt-20 mb-10 uppercase">Get In Touch</h1>
      <p class="text-lg font-light mb-10">
        Your feedback is very important to us. We welcome all feedback that helps us to
        improve and serve you better.
      </p>
      <form>
        <div class="grid grid-cols-2 gap-8">
          <div class="mb-6">
            <input
              id="email"
              type="email"
              class="bg-gray-50 border text-lg font-light rounded-lg w-full p-2.5"
              placeholder="Your name please"
            />
          </div>
          <div class="mb-6">
            <input
              id="email"
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-light rounded-lg block w-full p-2.5"
              placeholder="Your email"
              required
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Topic of your feedback"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-light rounded-lg block w-full p-2.5 mb-6"
        />
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-lg font-light text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Details and comments..."
        />
        <button
          class="font-oswald uppercase bg-red-500 text-white text-lg py-3 px-8 mt-10"
        >
          Submit
        </button>
      </form>
    </div>

    <PageFooter />
  </div>
</template>
