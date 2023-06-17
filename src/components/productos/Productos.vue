<style>
.block {
  color: #fff !important;
}
.q-btn--flat:before {
  background-color: rgba(12, 44, 26, 0.527);
}
</style>
<template>
  <q-page>
    <div class="row">
      <div class="q-pl-lg q-pt-lg row col-12">
        <q-item-label class="title-green text-h5 text-bold">
          {{ "Listado de equipos" }}
        </q-item-label>
      </div>
      <div class="q-pa-md row col-12">
        <div class="col-md-12 col-xs-12 col-sm-12">
          <div class="q-ma-sm">
            <q-card class="card q-pb-md">
              <div
                class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm row"
              >
                <q-card-section class="col-12">
                  <q-table
                    style="display: grid; box-shadow: none"
                    title="Equipos"
                    :rows="[currentPageItems]"
                    :columns="columns"
                    row-key="name"
                    hide-bottom
                  >
                    <template v-slot:header="props">
                      <q-tr :props="props">
                        <q-th auto-width />
                        <q-th auto-width />
                        <q-th auto-width />
                        <q-th
                          v-for="col in props.cols"
                          :key="col.name"
                          :props="props"
                        >
                          {{ col.label }}
                        </q-th>
                      </q-tr>
                    </template>
                    <template v-slot:body="props">
                      <q-tr
                        :props="props"
                        v-for="col in props.row"
                        :key="col.name"
                      >
                        <q-td
                          ><q-btn
                            size="sm"
                            padding="xs"
                            icon="edit_note"
                            :to="`/crear-producto/${col.id}`"
                            style="background-color: #678966; color: #fff"
                        /></q-td>
                        <q-td
                          ><q-btn
                            size="sm"
                            padding="xs"
                            icon="delete_outline"
                            @click="
                              (confirmDelete = true), (productId = col.id)
                            "
                            style="background-color: #678966; color: #fff"
                        /></q-td>
                        <q-td
                          ><q-btn
                            size="sm"
                            icon="qr_code_scanner"
                            padding="xs"
                            @click="abrirModal(col)"
                            style="background-color: #678966; color: #fff"
                          ></q-btn
                        ></q-td>
                        <q-td>
                          {{ col.reference }}
                        </q-td>
                        <q-td>
                          {{ col.tradeMark }}
                        </q-td>
                        <q-td>
                          {{ col.bearings }}
                        </q-td>
                        <q-td>
                          {{ col.model }}
                        </q-td>
                        <q-td>
                          {{ col.serial }}
                        </q-td>
                        <q-td>
                          {{ col.potency }}
                        </q-td>
                        <q-td>
                          {{ col.voltage }}
                        </q-td>
                        <q-td>
                          {{ col.current }}
                        </q-td>
                        <q-td>
                          {{
                            col.client.name + " - " + (col.client.campus || "")
                          }}
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                  <q-pagination
                    v-model="currentPage"
                    :max="totalPages"
                    class="custom-pagination q-mt-md"
                    active-color="teal-10"
                    :max-pages="4"
                    :boundary-numbers="false"
                  />
                </q-card-section>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <!--Modal Qr-->
      <template>
        <q-page>
          <q-dialog v-model="modalQr" full-width>
            <div class="row">
              <q-card
                class="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3"
                style="margin: auto"
              >
                <div class="q-pa-md row col-12">
                  <div class="col-md-12 col-xs-12 col-sm-12">
                    <div class="q-ma-sm">
                      <q-card class="card q-pb-md" style="min-height: 250px">
                        <q-card-section class="col-12 text-center">
                          <div
                            class="col-xs-12 col-sm-6 col-md-6 col-lg-8 col-xl-6 q-pt-md"
                          >
                            <q-img
                              @click="printImage(urlQRCode)"
                              :src="urlQRCode"
                              spinner-color="white"
                              style="
                                height: 200px;
                                max-width: 200px;
                                cursor: pointer;
                              "
                            />
                          </div>
                          <div
                            class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 q-pt-md"
                          >
                            <span
                              ><b>{{ "Referencia: " }}</b
                              >{{ reference }}</span
                            >
                            <br />
                            <span
                              ><b>{{ "Modelo: " }}</b
                              >{{ model }}</span
                            >
                            <br />
                            <span
                              ><b>{{ "Potencia: " }}</b
                              >{{ potency }}</span
                            >
                            <br />
                            <span
                              ><b>{{ "Voltaje: " }}</b
                              >{{ voltage }}</span
                            >
                            <br />
                            <span
                              ><b>{{ "Corriente: " }}</b
                              >{{ current }}</span
                            >
                            <br />
                            <span>
                              <b>
                                {{ "Cliente: " }}
                              </b>
                              {{ client }}
                              {{ ` - ${clientCampus ? clientCampus : ""}` }}
                            </span>
                            <!--  -->
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
                <q-card-actions align="center">
                  <q-btn
                    label="Cancelar"
                    @click="modalQr = false"
                    class="q-ma-sm btn-cancel"
                  />
                </q-card-actions>
              </q-card>
            </div>
          </q-dialog>
        </q-page>
      </template>
      <!--Modal eliminar producto-->
      <template>
        <q-dialog v-model="confirmDelete" persistent>
          <q-card>
            <q-card-section>
              <div class="text-h6">
                <span class="title-dark-green">Eliminar equipo</span>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <p>Está seguro de eliminar el equipo?</p>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn
                label="Eliminar"
                @click="deleteProduct()"
                class="q-pt-sm btn-add"
              />
              <q-btn
                label="Cancelar"
                class="q-pt-sm btn-cancel"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </template>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import helpers from "src/helpers/helpers.js";
import environments from "assets/environment/environment.js";
import columnsProducts from "src/columns/products.js";

const columns = columnsProducts;

export default defineComponent({
  name: "Listado-Productos",
  setup() {
    const rows = ref([]);
    const modalQr = ref(false);
    const confirmDelete = ref(false);
    const urlQRCode = ref(null);
    const reference = ref(null);
    const model = ref(null);
    const potency = ref(null);
    const voltage = ref(null);
    const current = ref(null);
    const client = ref(null);
    const clientCampus = ref(null);
    const productId = ref(null);
    const currentPage = ref(1);
    const perPage = 10;

    function inicio() {
      getProducts();
    }

    function getProducts() {
      helpers
        .axiosGet(`${environments.API_URL}/product`)
        .then((response) => {
          rows.value = response.data.products;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function deleteProduct() {
      helpers
        .axiosPatch(`${environments.API_URL}/product/remove/${productId.value}`)
        .then((response) => {
          if (response.status === 200) {
            helpers.showMessage("Equipo eliminado exitosamente", 2000);
            productId.value = null;
            confirmDelete.value = false;
            inicio();
          } else {
            helpers.showAlert("Error eliminando el equipo", 2000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function abrirModal(col) {
      urlQRCode.value = col.qrCode;
      reference.value = col.reference;
      potency.value = col.potency;
      voltage.value = col.voltage;
      current.value = col.current;
      client.value = col.client.name;
      model.value = col.model;
      clientCampus.value = col.client.campus;
      modalQr.value = true;
    }

    function printImage(source) {
      const pagelink = "about:blank";
      const pwa = window.open(pagelink, "_new");
      /* eslint-disable */
      const page = `<html><head></head><body onload="step1()">
        <img src="${source}"/></body><script>function step1(){
        setTimeout("step2()", 10);}
        function step2(){window.print();window.close()}
        <\/script></html>`;
      /* eslint-enable */
      pwa.document.open();
      pwa.document.write(page);
      pwa.document.close();
    }

    const currentPageItems = computed(() => {
      const startIndex = (currentPage.value - 1) * perPage;
      const endIndex = startIndex + perPage;
      return rows.value.slice(startIndex, endIndex);
    });

    const totalPages = computed(() => {
      return Math.ceil(rows.value.length / perPage);
    });

    onMounted(() => {
      inicio();
    });

    return {
      columns,
      rows,
      modalQr,
      urlQRCode,
      reference,
      model,
      potency,
      voltage,
      current,
      client,
      productId,
      clientCampus,
      confirmDelete,
      currentPage,
      currentPageItems,
      totalPages,
      abrirModal,
      printImage,
      deleteProduct,
    };
  },
});
</script>
