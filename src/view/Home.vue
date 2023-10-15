<script setup>
import { ref, onBeforeMount, defineAsyncComponent } from "vue"
import MovieList from "../components/MovieList.vue";
const movies = ref([])
const bannerMovie = ref(null)

const AsyncBanner = defineAsyncComponent(() => {
  return import("../components/Banner.vue")
})

const getMovies = async () => {
  movies.value = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
  .then(res => res.json())
  .then(res => res.results)
}

function getRandomInt (min, max)  {
  return Math.floor(Math.random() * (max - min) + min)
}     

onBeforeMount(async() => {
  await getMovies() 
  bannerMovie.value = movies.value[getRandomInt(0, movies.value.length - 1)]
})

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' }
]

const agreed = ref(false)
</script>

<template>
  <body>
    
 
 <AsyncBanner 
    :banner="bannerMovie"
    />
    <MovieList 
    :movies="movies"
    />
  

    <footer>
  <div class="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
      <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-transparent px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">1</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
          <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</footer>

</body>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');
body{
  background-color: #232323;
   font-family: 'Itim', cursive;
}

</style>