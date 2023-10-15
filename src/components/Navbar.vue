<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
</script>

<template>

    <nav class="absolute top-4 left-0 right-0 w-full flex z-10 text-white items-center gap-20 mx-6 py-4 bg-transparent border-b-2 border-neutral-400">
    <RouterLink to="/" class="flex text-3xl items-center font-bold gap-2">
      <img
        src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/387339581_3416462871950911_2367800329082791993_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGUgOoSRcCS2PMg-kVUa61U_Nnx86p4qw382fHzqnirDUkhRUmO4VYnHmX3SXDkScKKJnbxhKu8NcGyOlkqKDFD&_nc_ohc=UPtFy8yQkngAX-TQWwr&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdSG72BvaDA746OjSwF9K6JD4mO1ByELXDnCbUjcQ48Nqg&oe=6551CF78"
        width="190"
        alt="Icon"/>
    </RouterLink>
        <ul class="flex items-center gap-4 font-semibold font-size:50px">
            <RouterLink to="/" class="p-2 text-white-800 hover:text-gray-500">
            <span>หน้าหลัก</span>
        </RouterLink>
        <RouterLink to="/a" class="p-2 text-white-800 hover:text-gray-500">
            <span>ประเภทหนัง</span>
        </RouterLink>
        <RouterLink to="/t" class="p-2 text-white-800 hover:text-gray-500">
            <span>จองตั๋วหนัง</span>
        </RouterLink>
        <RouterLink to="/s" class="p-2 text-white-800 hover:text-gray-500">
            <span>ค้นหา🔍</span>
        </RouterLink> 
        <RouterLink to="/l" class="p-2 text-white-800 hover:text-gray-500">
            <span>ลงชื่อเข้าใช้</span>
        </RouterLink>  
        </ul>
    </nav>
</template>
<style scoped>
.absolute{
    font-family: 'Itim', cursive;
    font-size: 25px;
}
</style>