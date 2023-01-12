<template>
  <div class="h-full register-bg px-6">
    <div class="flex mx-auto items-center h-full gap-8 flex-col md:flex-row py-4" style="max-width: 1100px">
      <div class="md:basis-1/2 text-center md:text-left">
      <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_FbG1vd.json"  background="transparent"  speed="1" class="w-16 h-16 md:w-24 md:h-24 m-auto md:m-0 "  loop autoplay></lottie-player>
        <h1 class="text-2xl md:text-4xl font-bold">
          The octopus welcomes you
        </h1>
        <p class="md:text-xl mt-3">One platform, everything you need to work with digital marketing</p>
      </div>
      <div class="bg-white p-4 rounded shadow md:grow shrink w-full md:w-auto">
      <form class="p-4">
        <header class="flex flex-col items-center">
        <img width="130" class="mb-4" src="https://office.builderall.com/internacional/public/franchise/logo/logo-30877-7830.png" alt="">

        <h1 class="text-xl md:text-2xl font-bold">Create your account</h1>
        </header>

        <button class="flex items-center py-3 px-4 border-2 border-primary rounded w-full gap-3 mt-4">
          <img src="https://img.freepik.com/icones-gratis/procurar_318-265146.jpg?w=2000" width="20" alt="">
          <span class="flex-1 text-primary font-bold">Continue with Google</span>
        </button>
        <span class="text-center block w-full my-4">or</span>

        <fieldset>
          <input type="text" class="input" placeholder="Name" />
        </fieldset>
        <fieldset>
          <input type="text" class="input" placeholder="E-mail" />
        </fieldset>
        <fieldset>
          <input type="password" class="input" placeholder="Password"/>
        </fieldset>
        <div class="flex flex-col justify-between items-center">
          <router-link class="button block w-full text-center py-3" to="/welcome">Register</router-link>
          <a class="link mt-4 block font-bold">Back to login</a>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
}
.register-bg {
  background-image: linear-gradient(45deg, #fff1eb 0%, #ace0f9 100%);
}

</style>