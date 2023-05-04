<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <div
        class="col-xs-12 col-sm-3 col-md-3 col-lg-4 col-xl-4 q-px-sm q-pb-xs"
      ></div>
      <div
        class="q-pa-md q-pt-xl col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 q-px-sm q-pb-xs"
      >
        <div class="col-md-12 col-xs-12 col-sm-12">
          <q-card flat bordered style="min-height: 300px">
            <q-card-section>
              <q-form @submit="validarUsuario" class="q-gutter-md">
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-pb-xs"
                >
                  <q-input
                    style="width: 80%; margin: auto"
                    filled
                    dense
                    v-model="usuario"
                    label="Usuario"
                    :rules="[
                      (val) => (val && val.length > 0) || 'Ingrese el usuario',
                    ]"
                  />
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-pb-xs"
                >
                  <q-input
                    style="width: 80%; margin: auto"
                    filled
                    dense
                    type="password"
                    v-model="contrasena"
                    label="Contraseña"
                    :rules="[]"
                  />
                </div>
                <div
                  class="flex justify-center col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-pb-xs q-pt-md"
                >
                  <q-btn
                    label="Ingresar"
                    type="submit"
                    color="primary"
                    size="md"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div
        class="col-xs-12 col-sm-6 col-md-3 col-lg-4 col-xl-4 q-px-sm q-pb-xs"
      ></div>
    </div>
    <q-footer bordered>
      <q-toolbar>
        <q-toolbar-title>© {{ anoActual }} Skyline Tech v1.0.0</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import helpers from "../../helpers/helpers.js";

export default defineComponent({
  name: "LoginUsuario",
  setup() {
    const router = useRouter();
    const usuario = ref(null);
    const contrasena = ref(null);
    const data = ref(null);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

    function validarUsuario() {
      router.push({ name: "inicio" });

      helpers.axiosGet(url).then((respuesta) => {
        data.value = respuesta.drinks;
        data.value.forEach((element) => {
          console.log(element);
        });
      });
    }

    return {
      usuario,
      contrasena,
      validarUsuario,
    };
  },
});
</script>
