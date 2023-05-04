const routes = [
  {
    path: "/",
    component: () => import("components/index/LoginUsuario.vue"),
  },
  {
    name: "inicio",
    path: "/inicio",
    component: () => import("src/components/index/PrincipalPage.vue"),
    children: [
      {
        name: "nosotros",
        path: "/nosotros",
        component: () => import("components/nosotros/Nosotros.vue"),
      },
      {
        name: "productos",
        path: "/productos",
        component: () => import("components/productos/Productos.vue"),
      },
      {
        name: "crear-producto",
        path: "/crear-producto/:id?",
        component: () => import("components/productos/CrearProducto.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
