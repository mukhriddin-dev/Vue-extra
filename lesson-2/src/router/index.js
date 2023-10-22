import {createRouter, createWebHistory} from "vue-router";
import Home from "@pg/Home/Home.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
        icon: "bx bx-tachometer",
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@pg/About/About.vue"),
        icon: "bx bx-info-circle",
    },
    {
        path: "/employees",
        name: "employees",
        component: () => import("@pg/Employees/Employees.vue"),
        icon: "bx bx-tachometer",
    },

    {
        path: "/transaction",
        name: "transactions",
        component: () => import("@pg/Transactions/Transaction.vue"),
        icon: "bx bx-tachometer",
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: () => import("@pg/Layout.vue"),
            children: [
                ...routes.map((item) => ({path: item.path, name: item.name, component: item.component})),
                {
                    path: "/employees/:id",
                    name: "employees-item",
                    component: () => import("@pg/Employees/EmployeeItem.vue"),
                    icon: "bx bx-tachometer",
                },
            ],
        },

        {
            path: "/login",
            name: "login",
            component: () => import("@pg/Login/Login.vue"),
            // beforeEnter: (to, from, next) => {
            //     if (!localStorage.getItem("token")) {
            //         next({name: "login"});
            //     }
            //     next();
            // }
        },
        {
            path: "/:pathMatch(.*)*",
            name: "error",
            component: () => import("@pg/Error/Error.vue"),
        },
    ],
});

router.beforeEach((to, from, next) => {
    console.log("TO", to, "FROM: ", from);
    if (to.name !== "login" && !localStorage.getItem("token")) {
        next({name: "login"});
    }
    next();
});

export {routes, router};
