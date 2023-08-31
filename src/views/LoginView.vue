<script>

</script>

<template>

<!--Section page-->
<section class="flex flex-col min-h-screen bg-backNetflix " >
  <div class="flex items-center h-20 bg-gray-800 bg-opacity-50">
    <div class="mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end ">
      <!--Navbar para el logo-->
      <div class="absolute left-1/4 lg:left-1 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <img src="../assets/img/logo.png" alt="" width="150" height="70px" class="">
      </div>
      <!--Navbar para el menu-->
      <nav class="flex gap-5 text-white ">
        <p>Logout</p>
      </nav>
    </div>
  </div>  
  
  <!--Section Content-->
  <div class="flex-1 flex items-center">
    <div class="text-center mx-auto">
      <div class="w-full max-w-xs">
        <form class="shadow-md rounded px-9 pt-6 pb-8 mb-60 bg-gray-950 bg-opacity-80">
          <p class="text-white text-start font-bold">Inicia sesion</p>
          <div class="mb-6 py-5">
            <input class="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <input class="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100" id="password" type="password" placeholder="**********">
            <p class="text-red-500 text-xs italic">La contraseña debe tener entre 4 y 60 caracteres.</p>
          </div>
          <div class="mb-6">
            
            <router-link :to="`/perfil`">
              <button class="bg-red-500 hover:bg-red-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Iniciar sesion
              </button>            
            </router-link>
            
          </div>
          <div class="md:flex md:items-start mb-6">
            <div class=""></div>
            <label class="md:w-2/3 block text-gray-500 fonr-bold">
              <input class="mr-2 leading-tight" type="checkbox">
              <span>Recuerdame</span>
            </label> 
            <div class="md:w-2/3 block text-gray-500 fonr-bold">
              <p>Necesitas ayuda</p>
            </div>  
          </div>
          <div class="md:flex md:items-start mb-6">
            <div class="text-gray-500 text-xs">
              <p>¿Primera vez en Netflix? Suscríbete ahora.</p>
            </div>   
          </div>
          <div class="md:flex md:items-start mb-6">
            <div class="text-gray-500 text-xs justify-center items-start">
              <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. Más info.</p>
            </div>   
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


</template>
