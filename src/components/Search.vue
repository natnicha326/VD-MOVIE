<script setup>
import { ref, onBeforeMount, defineAsyncComponent } from "vue"
import MovieList from "../components/MovieList.vue";
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const agreed = ref(false)

function confirmBooking() {
        alert("กำลังค้นหา...");
        window.location.reload();
    }
</script>

<template>
    <div class="isolate" :style="{ backgroundColor: '#232323' }">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">

        <form>
          <div class="sm:col-span-2">
            <div class="mt-2.5">
              <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="mt-10">
            <button type="submit" class="block w-full rounded-full confirm-button px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="confirmBooking">ยืนยัน</button>
          </div>
        </form>
      </div>
    </div>
</template>

<style scoped>
.isolate {
  padding-top: 250px;
  padding-bottom: 500px;
}

#company {
  border: none; 
  border-radius: 50px;
}
.confirm-button {
  background-color: #ff0000; 
  color: #ffffff; 
}
</style>

  