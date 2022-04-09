<template>
  <div class="font-roboto">
    <div class="text-center bg-[url('/about-page.jpg')]">
      <NavMenu />
      <h1 class="text-white font-oswald uppercase text-7xl py-32">About Testo Burgers</h1>
    </div>

    <div class="text-center px-24">
      <h1 class="text-5xl font-oswald font-medium mt-20 mb-10 uppercase">
        Our Philosophy
      </h1>
      <p class="font-light">
        We're out to make the world a happier place with burgers. fries, and milkshakes.
        We're out to create great food, drinks, service, and fun. We're out to give our
        customers what they want and hope that we make them happy. We're out to make good
        things happen. We don't just talk about it, we do it. We think you'll see.
      </p>
    </div>

    <div class="text-center px-24">
      <h1 class="text-5xl font-oswald font-medium mt-20 mb-10 uppercase">Our Team</h1>
      <div class="grid grid-cols-4 gap-12">
        <div>
          <img
            src="https://jthemes.net/themes/html/testo/files/images/team-1.jpg"
            alt=""
          />
          <p class="uppercase font-oswald text-xl font-medium mt-5">Sam Richardson</p>
          <p class="text-yellow-500">Head Chef</p>
        </div>
        <div>
          <img
            src="https://jthemes.net/themes/html/testo/files/images/team-2.jpg"
            alt=""
          />
          <p class="uppercase font-oswald text-xl font-medium mt-5">Jennifer Lee</p>
          <p class="text-yellow-500">Sous Chef</p>
        </div>
        <div>
          <img
            src="https://jthemes.net/themes/html/testo/files/images/team-4.jpg"
            alt=""
          />
          <p class="uppercase font-oswald text-xl font-medium mt-5">Johnny Williams</p>
          <p class="text-yellow-500">Grill Chef</p>
        </div>
        <div>
          <img
            src="https://jthemes.net/themes/html/testo/files/images/team-7.jpg"
            alt=""
          />
          <p class="uppercase font-oswald text-xl font-medium mt-5">Johnny Liau</p>
          <p class="text-yellow-500">Mains Chef</p>
        </div>
      </div>
    </div>

    <div class="px-24 mb-20">
      <h1 class="text-5xl font-oswald font-medium mt-20 mb-10 uppercase text-center">
        FAQS
      </h1>
      <div class="grid grid-cols-2 gap-12">
        <div class="pr-10">
          <div>
            <h3 class="font-medium font-oswald text-xl pt-5 pb-2 uppercase">
              What payment methods do you accept?
            </h3>
            <p class="font-light">
              Cash, Paypal, Credit Cards, Debit Cards,and maybe bitcoins in the future?
            </p>

            <h3 class="font-medium font-oswald text-xl pt-5 pb-2 uppercase">
              How long it takes to deliver my order?
            </h3>
            <p class="font-light">
              All our food are freshly made to order. The time it takes for us to deliver
              your order from the nearest outlets is 30 minutes.
            </p>

            <h3 class="font-medium font-oswald text-xl pt-5 pb-2 uppercase">
              Is there an expiry for my gift cert?
            </h3>
            <p class="font-light">
              All gift certs expire after one year from the issue date.
            </p>
          </div>
        </div>
        <div class="pr-16">
          <h3 class="font-medium font-oswald text-xl pt-5 pb-2 uppercase">
            How can I change something in my order?
          </h3>
          <p class="font-light">
            You can always ring our hotline and our customer service will be happy to
            change your order for you.
          </p>

          <h3 class="font-medium font-oswald text-xl pt-5 pb-2 uppercase">
            Is my personal data secure?
          </h3>
          <p class="font-light">
            Yes! All your data is kept safe and secure on our servers. We will never share
            your data with any third parties.
          </p>

          <h3 class="font-medium font-oswald text-xl pt-5 pb-2 uppercase">
            How can I contact you ?
          </h3>
          <p class="font-light">
            You may ring us on our hotline 03-2284 4783 or chat with us directly on social
            media.
          </p>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>
