import { Loading, Notify } from "quasar";
import axios from "axios";

const helpers = {
  async axiosGet(url, datos = null) {
    return await axios
      .get(url, datos)
      .then((respuesta) => {
        return respuesta.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async axiosPost(url, datos) {
    return await axios
      .post(url, datos)
      .then((respuesta) => {
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
  showMessage(mensaje, tiempo) {
    if (mensaje) {
      let timeReal = 3000;
      if (tiempo) {
        timeReal = tiempo;
      }
      Notify.create({
        position: "top",
        color: "positive",
        message: `<p align="center" style="width: 150px;"><br> ${mensaje}</p>`,
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
      newList.push({ label: e.name, value: e.id });
    });
    return newList;
  },
};

export default helpers;
