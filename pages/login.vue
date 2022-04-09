<template>
  <div>
    <p v-if="this.$store.state.user">
      You are logged in...{{ this.$store.state.user.displayName }}
    </p>
    <button
      type="button"
      @click="googleLogin"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    googleLogin() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider();
      this.$fire.auth
        .signInWithPopup(provider)
        // .SignInWIthRedirect(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = this.$fireModule.auth.GoogleAuthProvider.credentialFromResult(
          //   result
          // );
          // console.log(credential);
          console.log(result.user);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = this.$fireModule.auth.GoogleAuthProvider.credentialFromError(
            error
          );
          console.log(errorCode, errorMessage, email, credential);
          // ...
        });
    },
  },
  mounted() {
    console.log(this.$store.state.user);
  },
};
</script>
