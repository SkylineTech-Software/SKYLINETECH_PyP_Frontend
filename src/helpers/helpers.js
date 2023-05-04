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
  prueba() {
    console.log("pruebaaaa");
  },
};

export default helpers;
