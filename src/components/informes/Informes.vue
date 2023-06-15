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
                    :rows="[rows]"
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
                            @click="viewParts()"
                            style="
                              cursor: pointer;
                              background-color: #678966;
                              color: #fff;
                            "
                            >{{ "Ver más" }}</q-btn
                          >
                        </q-td>
                        <q-td>
                          {{ "col.materials" }}
                        </q-td>
                        <q-td>
                          {{ col.observations }}
                        </q-td>
                        <q-td>
                          {{ col.product.reference }}
                        </q-td>
                      </q-tr>
                    </template>
                  </q-table>
                </q-card-section>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import helpers from "src/helpers/helpers.js";
import environments from "assets/environment/environment.js";
import columnsReports from "src/columns/report.js";

const columns = columnsReports;

export default defineComponent({
  name: "Listado-Informes",
  setup() {
    const rows = ref([]);

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

    function viewParts() {
      console.log("viewParts");
    }

    onMounted(() => {
      inicio();
    });

    return {
      rows,
      columns,
      helpers,
      inicio,
      viewParts,
      getReports,
    };
  },
});
</script>
