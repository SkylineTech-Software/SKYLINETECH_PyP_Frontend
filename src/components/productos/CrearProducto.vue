<template>
  <q-page>
    <div class="row">
      <div class="q-pl-lg q-pt-lg row col-12">
        <q-item-label class="title-green text-h5 text-bold">
          {{ id ? "Modificar equipo" : "Crear equipo" }}
        </q-item-label>
      </div>
      <div class="q-pa-md row col-12">
        <div class="col-md-12 col-xs-12 col-sm-12">
          <div class="q-ma-sm">
            <div class="row title-green text-bold q-pb-md">
              {{ "Equipos" }}
            </div>
            <q-card class="card">
              <q-card-section class="col-12 row">
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="cliente"
                    label="Cliente*"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="telefono"
                    label="Teléfono"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="direccion"
                    label="Dirección"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input dense outlined v-model="sede" label="Sede"></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="referencia"
                    label="Referencia*"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="marca"
                    label="Marca*"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="rodamientos"
                    label="Rodamientos"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="modelo"
                    label="Modelo*"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="serie"
                    label="Serie"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="potencia"
                    label="Potencia*"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="voltaje"
                    label="Voltaje*"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="equiposObra"
                    label="No. equipos instalados en obra"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-input
                    dense
                    outlined
                    v-model="equiposIntevenidos"
                    label="No. equipos intervenidos"
                  ></q-input>
                </div>
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                >
                  <q-select
                    dense
                    outlined
                    label="Tipo*"
                    v-model="tipo"
                    :options="opcionesTipoEquipos"
                  ></q-select>
                </div>
              </q-card-section>
              <div class="row">
                <div class="q-px-md">
                  <q-btn label="Guardar" class="q-ma-sm btn-add" no-caps />
                  <q-btn class="q-ma-sm btn-cancel" label="Cancelar" no-caps />
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import helpers from "src/helpers/helpers.js";

export default defineComponent({
  name: "Crear-Producto",
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const cliente = ref(null);
    const telefono = ref(null);
    const direccion = ref(null);
    const sede = ref(null);
    const referencia = ref(null);
    const marca = ref(null);
    const rodamientos = ref(null);
    const modelo = ref(null);
    const serie = ref(null);
    const potencia = ref(null);
    const voltaje = ref(null);
    const equiposObra = ref(0);
    const equiposIntevenidos = ref(0);
    const tipo = ref(null);
    const opcionesTipoEquipos = ref([]);
    const tipoEquipos = [
      {
        id: 1,
        nombre: "Monofásico",
      },
      {
        id: 1,
        nombre: "Trifásico",
      },
    ];

    function inicio() {
      opcionesTipoEquipos.value = helpers.cargarLista(tipoEquipos);
      console.log(id);
    }

    onMounted(inicio);

    return {
      id,
      tipo,
      route,
      cliente,
      telefono,
      direccion,
      sede,
      referencia,
      marca,
      rodamientos,
      modelo,
      serie,
      potencia,
      voltaje,
      equiposObra,
      equiposIntevenidos,
      tipoEquipos,
      opcionesTipoEquipos,
      inicio,
    };
  },
});
</script>
