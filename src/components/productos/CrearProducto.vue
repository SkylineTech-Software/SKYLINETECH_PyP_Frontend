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
                      v-model="tradeMark"
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
                      v-if="!id"
                    />
                    <q-btn
                      label="Editar"
                      class="q-ma-sm btn-add"
                      no-caps
                      @click="editProduct()"
                      v-if="id"
                    />
                    <q-btn
                      class="q-ma-sm btn-cancel"
                      label="Cancelar"
                      @click="cancelar()"
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
              <q-card
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8"
                style="margin: auto"
              >
                <div class="q-pl-lg q-pt-lg row col-12 q-pb-md">
                  <q-item-label class="title-green text-h5 text-bold">
                    {{ "Crear cliente" }}
                  </q-item-label>
                </div>
                <q-separator />
                <div class="q-pa-md row col-12">
                  <div class="col-md-12 col-xs-12 col-sm-12">
                    <div class="q-ma-sm">
                      <q-card class="card q-pb-md">
                        <q-form>
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
                                label="Teléfono*"
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
                                label="Sede"
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
                                  (value) =>
                                    /\S+@\S+\.\S+/.test(value) ||
                                    'Ingrese un correo electrónico válido.',
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
                <q-card-actions align="left">
                  <q-btn
                    label="Aceptar"
                    class="q-ma-sm btn-add"
                    @click="createClient()"
                  />
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
import { useRoute, useRouter } from "vue-router";
import helpers from "src/helpers/helpers.js";
import environments from "assets/environment/environment.js";

export default defineComponent({
  name: "Crear-Producto",
  components: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    // const id = route.params.id;
    const id = ref(null);
    const clientId = ref({ label: "", value: "" });
    const name = ref(null);
    const address = ref(null);
    const phone = ref(null);
    const campus = ref(null);
    const email = ref(null);
    const reference = ref(null);
    const tradeMark = ref(null);
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
      { id: 2, name: "Trifásico" },
    ];

    function inicio() {
      opcionesTipoEquipos.value = helpers.loadList(tipoEquipos);
      id.value = route.params.id;
      if (id.value) {
        getProduct(id.value);
      }
      getClients();
    }

    function createProduct() {
      helpers.showCargando();
      const data = {
        reference: reference.value,
        tradeMark: tradeMark.value,
        bearings: bearings.value,
        model: model.value,
        serial: serial.value,
        potency: potency.value,
        voltage: voltage.value,
        current: current.value.label,
        clientId: clientId.value.value,
      };

      helpers
        .axiosPost(`${environments.API_URL}/product`, data)
        .then((response) => {
          if (response.status === 201) {
            helpers.showMessage("Producto creado exitosamente", 2000);
          } else {
            helpers.showAlert("Error creando el producto", 2000);
          }
          router.push("/productos");
          helpers.hideCargando();
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function editProduct() {
      helpers.showCargando();
      const data = {
        reference: reference.value,
        tradeMark: tradeMark.value,
        bearings: bearings.value,
        model: model.value,
        serial: serial.value,
        potency: potency.value,
        voltage: voltage.value,
        current: current.value.label,
        clientId: clientId.value.value,
      };

      helpers
        .axiosPut(`${environments.API_URL}/product/${id.value}`, data)
        .then((response) => {
          if (response.status === 200) {
            helpers.showMessage("Producto editado exitosamente", 2000);
          } else {
            helpers.showAlert("Error creando el producto", 2000);
          }
          router.push("/productos");
          helpers.hideCargando();
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function getProduct(id) {
      helpers.showCargando();
      helpers
        .axiosGet(`${environments.API_URL}/product/${id}`)
        .then((response) => {
          clientId.value = {
            label: response.data.product.client.name,
            value: response.data.product.client.id,
          };
          reference.value = response.data.product.reference;
          tradeMark.value = response.data.product.tradeMark;
          bearings.value = response.data.product.bearings;
          model.value = response.data.product.model;
          serial.value = response.data.product.serial;
          potency.value = response.data.product.potency;
          voltage.value = response.data.product.voltage;
          current.value = response.data.product.current;
          helpers.hideCargando();
        })
        .catch((error) => {
          console.error(error);
        });
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
      helpers.showCargando();
      const data = {
        name: name.value,
        address: address.value,
        phone: phone.value,
        campus: campus.value,
        email: email.value,
      };

      helpers
        .axiosPost(`${environments.API_URL}/client`, data)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            clientId.value = {
              label:
                response.data.data.client.name +
                " " +
                response.data.data.client.campus,
              value: response.data.data.client.id,
            };
            clientOptions.value.push(clientId.value);
            modalClient.value = false;
            helpers.showMessage("Cliente creado exitosamente", 2000);
          } else {
            helpers.showAlert("Error creando el cliente", 2000);
          }
          helpers.hideCargando();
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function cancelar() {
      router.push({ name: "productos" });
    }

    onMounted(() => {
      inicio();
    });

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
      tradeMark,
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
      cancelar,
      createProduct,
      createClient,
      getProduct,
      editProduct,
    };
  },
});
</script>
