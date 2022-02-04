import {
  verificarRutaAbsoluta,
  verificarSiEsArchivo,
  verificarTipo,
  verificarSiExisteRuta,
  extraerArchivos,
  findLinks,
  stats,
  statsPlus,
} from "./functions/mdLinks-function.js";

export const mdlinks = (ruta, option) => {
  return new Promise((resolve, reject) => {
    if (ruta) {
      const newRuta2 = verificarRutaAbsoluta(ruta);
      const exits = verificarSiExisteRuta(newRuta2);
      if (exits) {
        const pathsFind = extraerArchivos(newRuta2);
        const allResult = findLinks(pathsFind);
        resolve(allResult);
      } else {
        reject("Error: The path does not exist , please enter a valid path");
      }
    } else {
      reject("Error: Please enter a valid path");
    }
  });
};
