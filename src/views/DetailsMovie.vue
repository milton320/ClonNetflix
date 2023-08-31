<template>
  <section><!--bg-trasparent-->
    <div class="md:bg-black bg-black md:fixed shadow-md md:w-full md:z-50 ">
      <nav class="relative justify-between flex w-full py-1 mx-auto text-white lg:px-2 lg:shadow-none">
        <!-- <button class="px-5 z-10 w-10 sm:w-12 md:w-15 lg:hidden opacity-90 focus:online-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path class="" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button> -->
        

        <div class="flex items-center lg:px-10 font-Netflixfont tracking-wide lg:space-x-5 text-sm font-bold cursor-pointer">
          <div class="lg:px-8 z-10 flex items-start justify-start lg:justify-start lg:space-x-2 focus:outline-none ">
            <img src="../assets/img/logo.png" alt="" width="100" height="50px" class="">
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            Inicio
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            Series
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            Peliculas
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            Novedades populares
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            Mi lista
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            Explorar por idiomas
          </div>
        </div>

        <div class="flex items-center  space-x-4"> 
          <div class="text-white transition duration-200 hover:text-gray-400 lg:block ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div class="hidden text-white transition duration-200 hover:text-gray-400 lg:block">
            <p>Niños</p>
          </div>
          <div class="text-white transition duration-200 hover:text-gray-400 lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </div>
          <div class="cursor-pointer items-end justify-end px-3 py-4 space-x-2 text-white transition duration-200 transform rounded-sm shadow-sm lg:flex hover:shadow-md bg-gradient-to-t ">
            <div class="">
              <img src="../assets/img/perfil.png" alt="" class="">
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden lg:block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>  
        </div>
      </nav>
    </div>
    <!--MODO TABLET - LAPTOP - PC-->
    <div class="flex">
      <figure class="relative transition-all duration-300 filter">
        <a href="#">
          <img :src="img780 +imgBanner" alt="image description">
        </a>
        <figcaption class="absolute px-4  text-black bottom-6 lg:block">
          <div class="space-x-2 justify-between flex"> 
            <div class="">
              <button type="button" class="bg-white hover:bg-slate-400 text-black font-bold py-1 px-5 lg:py-2 lg:px-10 lg:m-4 rounded">
                <div class="flex space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-3 lg:w-4 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                    <span class="text-xs lg:text-lg">
                        <div class="flex">
                            <div class="flex-auto sm:flex-col cursor-pointer">
                                <p class="flex flex-row justify-between md:flex-row text-red-600">    
                                    <div>
                                        <label for="tw-modal" class="">Ver Trailer</label>                
                                    </div>

                                    <input type="checkbox" id="tw-modal" class="peer fixed appearance-none opacity-0" />

                                    <!--Modal-->
                                    <a for="tw-modal" class="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100" >
                                        <!--Modal box-->
                                        <label class=" bg-black  text-black transition">
                                            <!-- <iframe  width="560" height="315" :src='trailer' frameborder="0" allowfullscreen></iframe> -->
                                            <div class="flex-col lg:flex-col">
                                                <div class="hidden lg:block">
                                                    <iframe width="800" height="800" :src='trailer' frameborder="0" allowfullscreen></iframe>
                                                </div>
                                                <div class="lg:hidden">
                                                    <iframe :src='trailer' allowfullscreen class="w-96 h-96"></iframe>
                                                </div>
                                            </div>
                                        </label>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </span>
                </div>
              </button>
              <button type="button" class="bg-slate-600 hover:bg-slate-800 text-white font-bold py-1 px-5 m-1 lg:py-2 lg:px-10 lg:m-4 rounded ">
                <div class="flex space-x-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-3 lg:w-4 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  <span class="text-xs lg:text-lg">More info</span>
                </div>
              </button>
            </div>     
          </div>
        </figcaption>
      </figure>
    </div>  
  </section>
  <section >
    <!--Section Content-->
    <div class="bg-black flex flex-col lg:flex-row">
      <div class="text-sm md:text-base xl:text-lg sm:max-w-xl lg:max-w-7xl px-4 py-5">
        <p class="text-white tracking-wide">
          <span class="text-green-600 font-bold ">94% para ti</span>
          <span class="text-slate-500"> 2023 2 temporadas </span>
          <span class="text-sm text-slate-500 border-solid border-2 border-slate-500"> HD</span>
        </p>
        <p class="text-white">{{ overview }}</p>
      </div>
      <div class="text-white px-5 py-5">
        <p class="">
          <span class="text-slate-500">Elenco : </span>{{ nameCredits }} </p>
        <div class="flex">
          <p>
            <span class="text-slate-500">Generos : </span>
          </p>
          <p v-for="item in moviesGeneres" :key="item.id">
            {{ ' '+ item.name + ' ' }}
          </p>
        </div>
        <p>
          <span class="text-slate-500">Este titulo es : </span>
          {{ title }}
        </p>
      </div>
    </div>
  </section>
  <section  class="px-3 min-h-screen bg-black ">
    <div class="w-full h-96 py-5 " id="lanzamiento_ultimo">
      <p class="text-3xl font-semibold text-white">Top Billed Cast</p>
      <div class=" scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-black w-auto h-72 items-center mt-9 overflow-x-auto overscroll-x-contain flex space-x-4">
        <div class="Card " v-for="item in cast.slice(0, 5)" :key="item.id">
          <div>
              <img class="w-full h-60 bg-norway bg-cover rounded-t-lg" :src='imgCast+item.profile_path'  :alt="item.id">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-96 py-5 " id="lanzamiento_ultimo">
      <p class="text-3xl font-semibold text-white">Mas titulos similares a este</p>
      <div class=" scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-black w-auto h-72 items-center mt-9 overflow-x-auto overscroll-x-contain flex space-x-4">
        <div class="Card" v-for="item in movieSimilars.slice(0, 5)" :key="item.id">
          <router-link :to="`/details/${item.id}`" >
            <div class="">
              <img class="w-full h-60 bg-norway bg-cover rounded-t-lg" :src='img+item.poster_path' :alt="item.id">
            </div>
          </router-link>
        </div>
      </div>
    </div>       
  </section>  
  <section class="px-3 bg-black ">
    <div class="text-slate-500 flex  justify-between py-28 cursor-pointer">
      <div>
      </div>
      <div class="space-y-4">
        <div class=" text-white flex space-x-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-amber-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-blue-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
          </svg>
        </div>
        <p class="hover:underline">Audio Descriptivo</p>
        <p class="hover:underline">Relaciones con inversionistas</p>
        <p class="hover:underline">Avisos Legales</p>
      </div>
      <div class="space-y-7">
        <p class="hover:underline">Tarjetas de regalo</p>
        <p class="hover:underline">Terminos de uso</p>
        <p class="hover:underline">Informacion corporaitiva</p>
      </div>
      <div>
        
      </div>
    </div>
  </section>
  <section class="bg-black justify-center items-center text-center">
    <p class="text-slate-500 p-5 text-xs "> &copy 1993-2023 Milton, ClonNetflixV1</p>
  </section>
</template>
<script>
    import axios from 'axios'
    const API_KEY = ''
    const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8'
    },
    params:{
        'api_key':API_KEY
    }
    })

    export default{
        data(){
            return{
                title:'',
                img:'',
                trailer:'',
                overview:'',
                vote_average:'',
                cast:[],
                imgCast:'https://image.tmdb.org/t/p/w300',
                img:'https://image.tmdb.org/t/p/w300',
                img780:'https://image.tmdb.org/t/p/original',
                imgBanner:'',
                nameCredits:'',
                moviesGeneres:[],
                movieSimilars:[]

            }
        },
        methods:{
            async movieDetails(){
                const {data} = await api(`movie/${this.$route.params.movieId}`)
                //console.log(data)
                this.title = data.title
                this.overview = data.overview
                this.vote_average = data.vote_average
                this.img =  'https://image.tmdb.org/t/p/w780' + data.poster_path 
            },  
            async movieTrailer(){
                const {data} = await api(`movie/${this.$route.params.movieId}/videos`)   
                this.trailer = 'https://www.youtube.com/embed/' + data.results[0].key
            },
            async creditMovie(){
                const {data} = await api(`movie/${this.$route.params.movieId}/credits`)
                //console.log(data.cast)
                this.cast = data.cast
                this.nameCredits = data.cast[0].name
            },
            async detailMovieBanner(id){
            const {data} = await api(`movie/${this.$route.params.movieId}/images`)
            const imaDetail = data.backdrops[this.numRandom()].file_path
            this.imgBanner = imaDetail 
            
            },
            async movieDetails(){
                const {data} = await api(`movie/${this.$route.params.movieId}`)
                //console.log(data.genres)
                this.title = data.title
                this.overview = data.overview
                this.vote_average = data.vote_average
                this.moviesGeneres = data.genres 
            },  
            numRandom(){
            let randNum =  Math.floor(Math.random() * 20) + 1;
            return randNum
            
            },
            async movieImage(){
            const {data} = await api(`movie/${this.$route.params.movieId}/images`)
            this.logoMovie = data.logos[4].file_path
            //console.log(data.logos[0].file_path)
            },
            async movieSim(){
              const { data } = await api(`movie/${this.$route.params.movieId}}/similar`)
              this.movieSimilars = data.results
              console.log(data.results)
            }

        },
        mounted(){
            this.movieDetails()
            this.movieTrailer() 
            this.creditMovie()
            this.detailMovieBanner()    
            this.numRandom()
            this.movieDetails()
            this.movieImage()
            this.movieSim()
        }
    }
</script>