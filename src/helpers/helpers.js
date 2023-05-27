import { Loading, Notify } from "quasar";
import axios from "axios";

const helpers = {
  async axiosGet(url, datos = null) {
    return await axios
      .get(url, { params: datos })
      .then((respuesta) => {
        return respuesta.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async axiosPost(url, datos) {
    return await axios
      .post(url, { params: datos })
      .then((respuesta) => {
        return respuesta;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  validarCamposForm(camposForm = []) {
    camposForm.forEach((e) => {
      if (!e.value) {
        return false;
      }
    });
    return true;
  },
  showCargando() {
    Loading.show();
  },
  hideCargando() {
    Loading.hide();
  },
  mostrarMensaje(mensaje, tiempo) {
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
  mostrarAlerta(mensaje, tiempo) {
    if (mensaje) {
      let timeReal = 3000;
      if (tiempo) {
        timeReal = tiempo;
      }
      Notify.create({
        position: "top",
        color: "negative",
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
  cargarLista(lista) {
    let nuevaLista = [];
    lista.forEach((e) => {
      nuevaLista.push(e.nombre);
    });
    return nuevaLista;
  },
};

export default helpers;
