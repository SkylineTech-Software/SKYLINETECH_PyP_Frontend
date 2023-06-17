<template>
  <q-page>
    <div class="row">
      <div class="q-pl-lg q-pt-lg row col-12">
        <q-item-label class="title-green text-h5 text-bold">
          {{ "Listado de informes" }}
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
                    title="Informes"
                    :rows="[currentPageItems]"
                    :columns="columns"
                    row-key="name"
                    hide-bottom=""
                    binary-state-sort
                  >
                    <template v-slot:header="props">
                      <q-tr :props="props">
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
                            style="background-color: #678966; color: #fff"
                        /></q-td>
                        <q-td>
                          {{ col.product.reference }}
                        </q-td>
                        <q-td
                          >{{ col.product.client.name }}
                          {{
                            col.product.client.campus &&
                            `- ${col.product.client.campus}`
                          }}</q-td
                        >
                        <q-td>{{ col.product.client.address }}</q-td>
                        <q-td>
                          {{ col.technical }}
                        </q-td>
                        <q-td>
                          {{ col.dateInform.split("T")[0] }}
                        </q-td>
                        <q-td>
                          {{ col.scope }}
                        </q-td>
                        <q-td>
                          <q-btn
                            size="0.8em"
                            @click="viewParts(col.replacementParts)"
                            style="
                              cursor: pointer;
                              background-color: #678966;
                              color: #fff;
                            "
                            >{{ "Ver repuestos" }}</q-btn
                          >
                        </q-td>
                        <q-td>
                          <q-btn
                            size="0.8em"
                            @click="viewMaterials(col.materials)"
                            style="
                              cursor: pointer;
                              background-color: #678966;
                              color: #fff;
                            "
                            >{{ "Ver materiales" }}</q-btn
                          >
                        </q-td>
                        <q-td>
                          {{ col.observations }}
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

      <template>
        <q-page>
          <q-dialog v-model="modalParts" persistent full-width>
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
                        {{ "Repuestos y/o correctivos" }}
                      </q-item-label>
                      <q-card class="card q-pb-md" style="min-height: 150px">
                        <q-card-section class="col-12 text-center">
                          <div
                            class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                          >
                            <div v-for="part in informParts" :key="part.name">
                              <div class="q-mb-sm">
                                <span
                                  ><b>{{ "Nombre: " }}</b
                                  >{{ part.name }}
                                  <b class="q-ml-md"> {{ "Cantidad: " }}</b
                                  >{{ part.mount }}
                                  <b class="q-ml-md"> {{ "Referencia: " }}</b
                                  >{{ part.reference }}</span
                                >
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
                <q-card-actions align="center">
                  <q-btn
                    label="Cerrar"
                    @click="modalParts = false"
                    class="q-ma-sm btn-add"
                  />
                </q-card-actions>
              </q-card>
            </div>
          </q-dialog>
        </q-page>
      </template>

      <template>
        <q-page>
          <q-dialog v-model="modalMaterials" persistent full-width>
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
                        {{ "Materiales" }}
                      </q-item-label>
                      <q-card class="card q-pb-md" style="min-height: 150px">
                        <q-card-section class="col-12 text-center">
                          <div
                            class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 q-px-sm q-py-sm"
                          >
                            <div
                              v-for="part in informMaterials"
                              :key="part.name"
                            >
                              <div>
                                <span
                                  ><b>{{ "Nombre: " }}</b
                                  >{{ part.name }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
                <q-card-actions align="center">
                  <q-btn
                    label="Cerrar"
                    @click="modalMaterials = false"
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
import { defineComponent, ref, onMounted, computed } from "vue";
import helpers from "src/helpers/helpers.js";
import environments from "assets/environment/environment.js";
import columnsReports from "src/columns/report.js";

const columns = columnsReports;

export default defineComponent({
  name: "Listado-Informes",
  setup() {
    const rows = ref([]);

    const modalParts = ref(false);
    const modalMaterials = ref(false);

    const informParts = ref([]);
    const informMaterials = ref([]);

    const currentPage = ref(1);
    const perPage = 10;

    function inicio() {
      getReports();
    }

    function getReports() {
      helpers
        .axiosGet(`${environments.API_URL}/informe-producto`)
        .then((response) => {
          rows.value = response.data.informProducts;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function viewParts(payload) {
      modalParts.value = true;
      informParts.value = payload;
      console.log(informParts.value);
    }

    function viewMaterials(payload) {
      modalMaterials.value = true;
      informMaterials.value = payload;
      console.log(informMaterials.value);
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
      rows,
      columns,
      helpers,
      currentPage,
      currentPageItems,
      totalPages,
      modalParts,
      modalMaterials,
      informParts,
      informMaterials,
      inicio,
      viewParts,
      viewMaterials,
      getReports,
    };
  },
});
</script>
