import { Loading, Notify } from "quasar";
import axios from "axios";

const helpers = {
  async axiosGet(url, datos = null) {
    this.showCargando();
    return await axios
      .get(url, datos)
      .then((respuesta) => {
        this.hideCargando();
        return respuesta.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async axiosPost(url, datos) {
    this.showCargando();
    return await axios
      .post(url, datos)
      .then((respuesta) => {
        this.hideCargando();
        return respuesta;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async axiosPatch(url, datos = null) {
    this.showCargando();
    return await axios
      .patch(url, datos)
      .then((respuesta) => {
        this.hideCargando();
        return respuesta;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async axiosPut(url, datos) {
    this.showCargando();
    return await axios
      .put(url, datos)
      .then((respuesta) => {
        this.hideCargando();
        return respuesta;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  showCargando() {
    Loading.show();
  },
  hideCargando() {
    Loading.hide();
  },
  showMessage(msj, time) {
    if (msj) {
      let timeReal = 3000;
      if (time) {
        timeReal = time;
      }
      Notify.create({
        position: "top",
        color: "positive",
        message: `<p align="center" style="width: 150px;"><br> ${msj}</p>`,
        html: true,
        type: "white",
        multiLine: true,
        actions: [
          {
            label: "Cerrar",
            color: "white",
            style: "border: 1px solid #fff; margin: auto;",
          },
        ],
        timeout: timeReal,
      });
    }
  },
  showAlert(msj, time) {
    if (msj) {
      let timeReal = 3000;
      if (time) {
        timeReal = time;
      }
      Notify.create({
        position: "top",
        color: "negative",
        message: `<p align="center" style="width: 150px;"><br> ${msj}</p>`,
        html: true,
        type: "white",
        multiLine: true,
        actions: [
          {
            label: "Cerrar",
            color: "white",
            style: "border: 1px solid #fff; margin: auto;",
          },
        ],
        timeout: timeReal,
      });
    }
  },
  loadList(list) {
    let newList = [];
    list.forEach((e) => {
      let condicion =
        e.campus !== null && e.campus !== undefined ? true : false;
      let sede = condicion ? " - " + e.campus : "";
      let lbl = e.name !== undefined ? e.name : e.reference;
      newList.push({ label: lbl + sede, value: e.id });
    });
    return newList;
  },
  getLocale() {
    const myLocale = {
      /* starting with Sunday */
      days: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
      daysShort: "Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),
      months:
        "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
          "_"
        ),
      monthsShort: "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
      firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
      format24h: true,
      pluralDay: "dias",
    };
    return myLocale;
  },
};

export default helpers;
