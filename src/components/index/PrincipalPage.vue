<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header-inicio" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="
            $q.screen.md || $q.screen.lg || $q.screen.xl
              ? icon
              : 'arrow_forward'
          "
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Pumps S.A.S </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer class="aside-menu" v-model="leftDrawerOpen" side="left">
      <div class="flex items-center justify-center items-center">
        <q-img class="img-aside-menu" :src="logo" spinner-color="primary" />
      </div>
      <q-separator />
      <q-list>
        <span class="text-overline q-pl-sm">Equipos</span>
        <q-item clickable :to="'/productos'" class="flex row items-center">
          <q-icon size="2em" name="format_list_bulleted" />
          <q-item-label class="q-pl-sm">Ver equipos</q-item-label>
        </q-item>
        <q-item class="flex row items-center" clickable :to="'/crear-producto'">
          <q-icon size="2em" name="add_circle_outline" />
          <q-item-label class="q-pt-sm q-pl-sm">Crear equipo</q-item-label>
        </q-item>
        <hr />
        <span class="text-overline q-pl-sm">Informes</span>
        <q-item class="flex row items-center" clickable :to="'/informes'">
          <i class="fa-regular fa-rectangle-list" style="font-size: 22px"></i>
          <q-item-label class="q-pl-sm">Ver informes</q-item-label>
        </q-item>
        <q-item
          class="flex row items-center"
          clickable
          :to="'/reporte/product'"
        >
          <q-icon size="2em" name="addchart" />
          <q-item-label class="q-pl-sm">Crear informe</q-item-label>
        </q-item>
        <hr />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import logo from "assets/img/logopyp2.png";

export default defineComponent({
  name: "HomePage",

  setup() {
    const leftDrawerOpen = ref(true);
    const icon = ref("arrow_back");
    const handleSwipe = (e) => {
      if (e.direction === "right") {
        leftDrawerOpen.value = true;
      }
    };

    onMounted(() => {
      document.addEventListener("swipe", handleSwipe);
    });

    return {
      logo,
      icon,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
        icon.value = leftDrawerOpen.value ? "arrow_back" : "arrow_forward";
      },
    };
  },
});
</script>
