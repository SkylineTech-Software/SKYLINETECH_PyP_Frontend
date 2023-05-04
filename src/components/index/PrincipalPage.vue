<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> P&P </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div style="display: flex; justify-content: center; align-items: center">
        <q-img
          :src="logo"
          spinner-color="primary"
          style="max-width: 100%; max-height: 100%"
        />
      </div>
      <q-separator />
      <q-list>
        <span class="text-overline q-pl-sm">dsads</span>
        <q-item
          clickable
          :to="'nosotros'"
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
          "
        >
          <q-icon size="2em" name="description" />
          <q-item-label class="q-pl-sm">Sobre nosotros</q-item-label>
        </q-item>
        <q-separator />
        <span class="text-overline q-pl-sm">sdsadas</span>
        <q-item
          clickable
          :to="'productos'"
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
          "
        >
          <q-icon size="2em" name="format_list_bulleted" />
          <q-item-label class="q-pl-sm">Productos</q-item-label>
        </q-item>
        <q-item
          clickable
          :to="'crear-producto'"
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
          "
        >
          <q-icon size="2em" name="add_circle_outline" />
          <q-item-label class="q-pt-sm q-pl-sm">Crear producto</q-item-label>
        </q-item>
        <q-separator />
        <span class="text-overline q-pl-sm">Informes</span>
        <q-item
          clickable
          :to="'informes'"
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
          "
        >
          <q-icon size="2em" name="" />
          <q-item-label class="q-pl-sm">Informes</q-item-label>
        </q-item>
        <q-separator />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-toolbar>
        <q-toolbar-title>© {{ anoActual }} Skyline Tech v1.0.0</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import logo from "assets/img/logopyp.jpeg";

export default defineComponent({
  name: "HomePage",

  setup() {
    const leftDrawerOpen = ref(false);
    const anoActual = new Date().getFullYear();

    const url = "https://hope.be/wp-content/uploads/2015/05/no-user-image.gif";
    const linksMenu = [
      {
        title: "Sobre nosotros",
        icon: "fa-light fa-file-lines",
        link: "/",
        caption: "sadadada",
      },
      {
        title: "Productos",
        icon: "format_list_bulleted",
        link: "",
        caption: "sadadada",
      },
      {
        title: "Crear producto",
        icon: "add_circle_outline",
        link: "",
        caption: "sadadada",
      },
    ];
    return {
      url,
      logo,
      anoActual,
      linksMenu,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
