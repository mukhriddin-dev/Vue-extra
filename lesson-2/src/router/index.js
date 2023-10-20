import {createRouter, createWebHistory} from "vue-router";
import Home from "@pg/Home/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@pg/About/About.vue"),
    },
    {
        path: "/employees",
        name: "employees",
        component: () => import("@pg/Employees/Employees.vue"),
    },
    {
        path: "/transaction",
        name: "transactions",
        component: () => import("@pg/Transactions/Transaction.vue"),
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...routes,
        {
            path: "/:pathMatch(.*)*",
            name: "error",
            component: () => import("@pg/Error/Error.vue"),
        },
    ],
});

export {routes, router};
