import Home from "../view/Home.vue"
import Movie from "../view/Movie.vue"
import { createRouter, createWebHistory } from "vue-router"
import Genres from "../components/Genremovie.vue"
import search from "../components/Search.vue"
import tickets from "../components/Tickets.vue"
import login from "../components/Login.vue"
const routes = [
    { path: "/", component: Home },
    { path: "/movies/:id", component: Movie },
    { path:"/a",component:Genres},
    { path:"/s",component:search},
    { path:"/t",component:tickets},
    { path:"/l",component:login}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})


