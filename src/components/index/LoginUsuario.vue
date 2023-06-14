<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row ppal-login">
      <div
        v-if="$q.screen.md || $q.screen.lg || $q.screen.xl"
        class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-pb-xs img-aside"
      ></div>
      <div
        class="q-pa-md q-pt-xl col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-px-sm q-pb-xs"
      >
        <div class="col-md-12 col-xs-12 col-sm-12">
          <q-card style="min-height: 300px; box-shadow: none !important">
            <q-card-section>
              <div
                class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-pb-md"
              >
                <div class="flex justify-center q-pb-xl">
                  <q-img
                    :src="logo"
                    spinner-color="secondary"
                    class="login-logo"
                  />
                </div>
              </div>
              <q-form @submit="validarUsuario()" class="q-gutter-md">
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-pb-xs div-login"
                >
                  <q-input
                    dense
                    outlined
                    class="input-login"
                    v-model="usuario"
                    label="Usuario*"
                    :rules="[
                      (value) => !!value || 'El campo Usuario es obligatorio.',
                    ]"
                  />
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-pb-xs flex"
                >
                  <q-input
                    dense
                    outlined
                    class="input-login"
                    v-model="contrasena"
                    label="Contraseña*"
                    :type="isPwd ? 'password' : 'text'"
                    :rules="[
                      (value) =>
                        !!value || 'El campo Contraseña es obligatorio.',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="verContrasena()"
                      />
                    </template>
                  </q-input>
                </div>
                <div
                  class="flex justify-center col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3"
                >
                  <q-btn
                    class="btn-form"
                    label="Login"
                    type="submit"
                    size="md"
                  />
                </div>
                <div
                  class="flex justify-center items-center col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3"
                >
                  <span style="font-size: 16px">By</span
                  ><img :src="logoSkyline" style="width: 200px" />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import helpers from "src/helpers/helpers.js";
import logo from "assets/img/logopyp2.png";
import imgAside from "assets/img/img-aside.jpg";
import logoSkyline from "assets/img/logo-skyline.png";

export default defineComponent({
  name: "LoginUsuario",
  setup() {
    const router = useRouter();
    const usuario = ref("");
    const contrasena = ref("");
    const data = ref(null);
    const isPwd = ref(true);
    const accesoValido = ref(true);
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

    function validarUsuario() {
      helpers.showCargando();
      helpers
        .axiosGet(url)
        .then((respuesta) => {
          accesoValido.value = respuesta.drinks;
          if (accesoValido.value) {
            helpers.showMessage("Acceso válido", 3000);
            // router.push({ name: "inicio" });
          } else {
            helpers.showAlert("Usuario y/o contraseña incorrectos", 3000);
          }
          router.push({ name: "productos" });
        })
        .catch((error) => {
          console.error(error);
        });
      helpers.hideCargando();
    }

    function verContrasena() {
      isPwd.value = !isPwd.value;
    }

    return {
      logo,
      isPwd,
      imgAside,
      usuario,
      contrasena,
      logoSkyline,
      verContrasena,
      validarUsuario,
    };
  },
});
</script>
