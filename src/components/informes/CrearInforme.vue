<template>
  <q-page>
    <div class="row">
      <div class="q-pl-lg q-pt-lg row col-12">
        <q-item-label class="title-green text-h5 text-bold">
          {{ "Crear informe" }}
        </q-item-label>
      </div>
      <div class="q-pa-md row col-12">
        <div class="col-md-12 col-xs-12 col-sm-12">
          <div class="q-ma-sm">
            <q-card class="card q-pb-md">
              <q-form @submit="createInform()">
                <div
                  class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm row"
                >
                  <q-card-section class="col-12">
                    <div
                      class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm row"
                    >
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Cliente"
                          v-model="client"
                          readonly
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Direccion"
                          v-model="address"
                          readonly
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Sede"
                          v-model="campus"
                          readonly
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Marca"
                          v-model="tradeMark"
                          readonly
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Referencia"
                          v-model="reference"
                          readonly
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm items-start"
                      >
                        <q-input
                          dense
                          outlined
                          v-model="date"
                          mask="date"
                          :rules="['date']"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date
                                  v-model="date"
                                  color="teal-10"
                                  :locale="myLocale"
                                >
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Cerrar"
                                      color="teal-10"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Teléfono"
                          v-model="phone"
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Técnico"
                          v-model="managers"
                        ></q-input>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-select
                          dense
                          outlined
                          label="Alcance"
                          v-model="scope"
                          :options="scopeList"
                        ></q-select>
                      </div>
                      <div
                        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                      >
                        <q-input
                          dense
                          outlined
                          label="Observaciones"
                          type="textarea"
                          v-model="observations"
                        ></q-input>
                      </div>
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
                        @click="cancelar()"
                        no-caps
                      />
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card>
          </div>
        </div>
      </div>
      <!--Modal Seleccionar Producto-->
      <template>
        <q-page>
          <q-dialog v-model="modalProducts" persistent full-width>
            <div class="row">
              <q-card
                class="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3"
                style="margin: auto"
              >
                <div class="q-pa-md row col-12">
                  <div class="col-md-12 col-xs-12 col-sm-12">
                    <div class="q-ma-sm">
                      <q-item-label
                        class="title-green text-h6 text-bold q-pb-md"
                      >
                        {{ "Seleccionar equipo" }}
                      </q-item-label>
                      <q-card class="card q-pb-md" style="min-height: 150px">
                        <q-card-section class="col-12 text-center">
                          <div
                            class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                          >
                            <q-select
                              dense
                              outlined
                              label="Equipo*"
                              :rules="[
                                (value) =>
                                  !!value || 'El campo Equipo es obligatorio.',
                              ]"
                              v-model="product"
                              :options="productList"
                            ></q-select>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
                <q-card-actions align="center">
                  <q-btn
                    label="Aceptar"
                    @click="selectProduct()"
                    class="q-ma-sm btn-add"
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
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import helpers from "src/helpers/helpers.js";
import lists from "src/helpers/lists.js";
import environments from "assets/environment/environment.js";

export default defineComponent({
  name: "Crear-Informes",
  components: {},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const idModal = ref(null);
    const product = ref(null);
    const productList = ref([]);
    const client = ref(null);
    const address = ref(null);
    const campus = ref(null);
    const tradeMark = ref(null);
    const reference = ref(null);
    const date = ref(null);
    const phone = ref(null);
    const managers = ref(null);
    const scope = ref(null);
    const scopeList = helpers.loadList(lists.scopeList);
    const numberManagers = ref(0);
    const observations = ref(null);
    const myLocale = helpers.getLocale();
    const viewDate = ref(false);
    const modalProducts = ref(false);
    const redirectInform = ref(false);

    function inicio() {
      getProducts();
      if (id === "") {
        modalProducts.value = true;
        getProduct(id);
      } else {
        getProduct(id);
      }
    }

    function selectProduct() {
      if (!product.value) {
        helpers.showAlert("Seleccione un equipo para continuar");
        return;
      }
      idModal.value = product.value.value;
      getProduct(idModal.value);
      redirectInform.value = true;
      modalProducts.value = false;
    }

    function getProducts() {
      helpers
        .axiosGet(`${environments.API_URL}/product`)
        .then((response) => {
          productList.value = helpers.loadList(response.data.products);
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
          if (id) {
            client.value = response.data.product.client.name;
            address.value = response.data.product.client.address;
            campus.value = response.data.product.client.campus;
            reference.value = response.data.product.reference;
            tradeMark.value = response.data.product.tradeMark;
          }
          helpers.hideCargando();
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function cancelar() {
      router.push({ name: "informes" });
    }

    onMounted(inicio);

    return {
      client,
      address,
      campus,
      scope,
      tradeMark,
      reference,
      date,
      viewDate,
      scopeList,
      phone,
      managers,
      product,
      myLocale,
      productList,
      modalProducts,
      observations,
      redirectInform,
      numberManagers,
      inicio,
      cancelar,
      getProduct,
      selectProduct,
    };
  },
});
</script>
