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
            <q-card class="card q-pb-md">
              <q-form @submit="createProduct()">
                <q-card-section class="col-12 row">
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm row"
                  >
                    <div class="col-10">
                      <q-select
                        dense
                        outlined
                        label="Cliente*"
                        :rules="[
                          (value) =>
                            !!value || 'El campo Cliente es obligatorio..',
                        ]"
                        v-model="clientId"
                        :options="clientOptions"
                      ></q-select>
                    </div>
                    <div class="col-2 q-px-sm q-pb-xs">
                      <q-btn
                        icon="add_box"
                        style="color: #678966"
                        @click="modalClient = true"
                        size="md"
                        class="q-mt-xs"
                        dense
                      />
                      <q-tooltip anchor="center middle"
                        >Agregar cliente</q-tooltip
                      >
                    </div>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="reference"
                      label="Referencia*"
                      :rules="[
                        (value) =>
                          !!value || 'El campo Referencia es obligatorio.',
                      ]"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="trademark"
                      label="Marca*"
                      :rules="[
                        (value) => !!value || 'El campo Marca es obligatorio.',
                      ]"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="bearings"
                      label="Rodamientos"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="model"
                      label="Modelo*"
                      :rules="[
                        (value) => !!value || 'El campo Modelo es obligatorio.',
                      ]"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="serial"
                      label="Serie"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="potency"
                      label="Potencia*"
                      :rules="[
                        (value) =>
                          !!value || 'El campo Potencia es obligatorio.',
                      ]"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-input
                      dense
                      outlined
                      v-model="voltage"
                      label="Voltaje*"
                      :rules="[
                        (value) =>
                          !!value || 'El campo Voltaje es obligatorio.',
                      ]"
                    ></q-input>
                  </div>
                  <div
                    class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                  >
                    <q-select
                      dense
                      outlined
                      label="Corriente*"
                      :rules="[
                        (value) =>
                          !!value || 'El campo Corriente es obligatorio.',
                      ]"
                      v-model="current"
                      :options="opcionesTipoEquipos"
                    ></q-select>
                  </div>
                </q-card-section>
                <div class="row">
                  <div class="q-px-md">
                    <q-btn
                      label="Guardar"
                      class="q-ma-sm btn-add"
                      no-caps
                      type="submit"
                    />
                    <q-btn
                      class="q-ma-sm btn-cancel"
                      label="Cancelar"
                      no-caps
                    />
                  </div>
                </div>
              </q-form>
            </q-card>
          </div>
        </div>
      </div>
      <!--Modal crear cliente-->
      <template>
        <q-page>
          <q-dialog v-model="modalClient" persistent full-width>
            <div class="row">
              <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <div class="q-pl-lg q-pt-lg row col-12 q-pb-md">
                  <q-item-label class="title-green text-h5 text-bold">
                    {{ "Crear cliente" }}
                  </q-item-label>
                </div>
                <q-separator />
                <div class="q-pa-md row col-12">
                  <div class="col-md-12 col-xs-12 col-sm-12">
                    <div class="q-ma-sm">
                      <div class="row title-green text-bold q-pb-md">
                        {{ "Cliente" }}
                      </div>
                      <q-card class="card q-pb-md">
                        <q-form @submit="createClient()">
                          <q-card-section class="col-12 row">
                            <div
                              class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                            >
                              <q-input
                                dense
                                outlined
                                v-model="name"
                                label="Nombre*"
                                :rules="[
                                  (value) =>
                                    !!value ||
                                    'El campo Nombre es obligatorio.',
                                ]"
                              ></q-input>
                            </div>
                            <div
                              class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                            >
                              <q-input
                                dense
                                outlined
                                v-model="address"
                                label="Dirección*"
                                :rules="[
                                  (value) =>
                                    !!value ||
                                    'El campo Dirección es obligatorio.',
                                ]"
                              ></q-input>
                            </div>
                            <div
                              class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                            >
                              <q-input
                                dense
                                outlined
                                v-model="phone"
                                label="Telefono*"
                                :rules="[
                                  (value) =>
                                    !!value ||
                                    'El campo Telefono es obligatorio.',
                                ]"
                              ></q-input>
                            </div>
                            <div
                              class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                            >
                              <q-input
                                dense
                                outlined
                                v-model="campus"
                                label="Sede*"
                                :rules="[
                                  (value) =>
                                    !!value || 'El campo Sede es obligatorio.',
                                ]"
                              ></q-input>
                            </div>
                            <div
                              class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                            >
                              <q-input
                                dense
                                outlined
                                v-model="email"
                                label="Email*"
                                :rules="[
                                  (value) =>
                                    !!value || 'El campo Email es obligatorio.',
                                ]"
                              ></q-input>
                            </div>
                          </q-card-section>
                        </q-form>
                      </q-card>
                    </div>
                  </div>
                </div>
                <q-separator />
                <q-card-actions align="right">
                  <q-btn label="Aceptar" class="q-ma-sm btn-add" />
                  <q-btn
                    label="Cancelar"
                    @click="modalClient = false"
                    class="q-ma-sm btn-cancel"
                  />
                </q-card-actions>
              </q-card>
            </div>
          </q-dialog>
        </q-page>
      </template>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import helpers from "src/helpers/helpers.js";
import environments from "assets/environment/environment.js";

export default defineComponent({
  name: "Crear-Producto",
  components: {},
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const clientId = ref(null);
    const name = ref(null);
    const address = ref(null);
    const phone = ref(null);
    const campus = ref(null);
    const email = ref(null);
    const reference = ref(null);
    const trademark = ref(null);
    const bearings = ref(null);
    const model = ref(null);
    const serial = ref(null);
    const potency = ref(null);
    const voltage = ref(null);
    const clientOptions = ref([]);
    const modalClient = ref(false);
    const current = ref([]);
    const opcionesTipoEquipos = ref([]);
    const tipoEquipos = [
      { id: 1, name: "Monofásico" },
      { id: 1, name: "Trifásico" },
    ];

    function inicio() {
      opcionesTipoEquipos.value = helpers.loadList(tipoEquipos);
      getClients();
    }

    function createProduct() {
      const data = {
        clientId: clientId.value.value,
        reference: reference.value,
        trademark: trademark.value,
        bearings: bearings.value,
        model: model.value,
        serial: serial.value,
        potency: potency.value,
        voltage: voltage.value,
        current: current.value.label,
      };

      // helpers
      //   .axiosPost(`${environments.API_URL}/product`, { data })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

      console.log({ data });
    }

    function getClients() {
      helpers
        .axiosGet(`${environments.API_URL}/client`)
        .then((response) => {
          clientOptions.value = helpers.loadList(response.data.clients);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function createClient() {
      console.log("create client");
    }

    onMounted(inicio);

    return {
      id,
      current,
      route,
      name,
      address,
      phone,
      campus,
      email,
      clientId,
      reference,
      trademark,
      bearings,
      model,
      serial,
      potency,
      voltage,
      modalClient,
      tipoEquipos,
      clientOptions,
      opcionesTipoEquipos,
      inicio,
      createProduct,
      createClient,
    };
  },
});
</script>
