import {
  verificarRutaAbsoluta,
  verificarSiEsArchivo,
  verificarTipo,
  verificarSiExisteRuta,
  extraerArchivos,
  findLinks,
  findStatus,
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
        resolve( allResult)
        // if (option === undefined) {
        //   const allResult = findLinks(pathsFind);
        //   console.log(allResult);
        // }
        // else if(option === "--validate"){
        //  findStatus(allResult).then(x=>console.log(x))
        // }
        // else if(option==='--stats'){
        //   findStatus(allResult).then(x=>stats(x))
        // }
        // else if(option==='--statsPlus'){
        //   findStatus(allResult).then(x=>statsPlus(x))
        // }
      } else {
        reject("Error:la ruta no existe");
      }
    } else {
      reject("Error:ingrese una ruta");
    }
  });
};

