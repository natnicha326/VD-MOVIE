<script setup>
import { RouterView } from "vue-router"
import Navbar from "./components/Navbar.vue";
</script>


<template>
<div class="mom">
    <Navbar />
    <Suspense>
        <RouterView />
    </Suspense>
</div>
</template>
<style scoped>
ิ
.mom {
    margin: 0; 
    padding: 0; 
}

</style>
