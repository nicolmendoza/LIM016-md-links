import fs from "fs";
import path from "path";



export const verificarRutaAbsoluta = (ruta) => {
  return path.isAbsolute(ruta) ? ruta : path.resolve(ruta);
};

export const verificarSiExisteRuta = (ruta) => {
  return fs.existsSync(ruta);
};

export const verificarSiEsArchivo = (ruta) => {
  return fs.statSync(ruta).isFile();
};

export const verificarTipo = (ruta) => {
  return path.extname(ruta);
};

const rutasFile = [];
export const extraerArchivos = (newRuta2) => {
  if (verificarSiEsArchivo(newRuta2)) {
    // console.log("path is file");
    const tipo = verificarTipo(newRuta2);
    if (tipo === ".md") {
      rutasFile.push(newRuta2);
    } else {
      console.log("no es un archivo md");
    }
  } else {
    const rutasPrueba = fs
      .readdirSync(newRuta2)
      .map((item) => `${newRuta2}\\` + item);
    // console.log(rutasPrueba)
    rutasPrueba.forEach((item) => extraerArchivos(item));
  }

  return rutasFile;
};

export const findLinks = (array) => {
  // console.log(array)
  const texto = array.map((file) => fs.readFileSync(file, "utf-8"));

  var expression = /\[([^\]]*)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
  var regex = new RegExp(expression);
  let link;
  let text;

  const allResult = [];
  let objectFromOneLink;
  let objectFromLink;

  texto.forEach((t, i) => {
    let result = new Object();
    if (t.match(regex).length > 1) {
      t.match(regex).forEach((v) => {
        const link = v.split("](")[1].slice(0, -1);

        const text = v.split("](")[0].slice(1);

        objectFromLink = {
          href: link,
          text: text,
          path: array[i],
        };
        allResult.push(objectFromLink);
      });
      // console.log(allResult)
    } else if (t.match(regex).length === 1) {
      // console.log(t.match(regex).length);
      link = t.match(regex).map((v) => v.split("](")[1].slice(0, -1));

      text = t.match(regex).map((v) => v.split("](")[0].slice(1));

      objectFromOneLink = {
        href: link[0],
        text: text[0],
        path: array[i],
      };
      allResult.push(objectFromOneLink);
    }
  });
// console.log(allResult)
  return allResult;
};


export const stats = (arrayStates) => {
  // console.log(arrayStates)
  const links = [];
  arrayStates.forEach((item) => links.push(item.href));
  let unicos = new Set(links);
  const linksOrdenados = links.sort();
  const almacenador = [];
  const unicosElementos = [];
  let contador = 1;

  for (let i = 0; linksOrdenados.length > i; i++) {
    if (linksOrdenados[i + 1] == linksOrdenados[i]) {
      contador++;
    } else {
      unicosElementos.push(linksOrdenados[i]);
      almacenador.push(contador);
      contador = 1;
    }
  }
  // console.log(unicosElementos);
  // console.log(almacenador);

  const unique = almacenador.filter((item) => item == 1);
  const repetidos = almacenador.filter((item) => item > 1);
  // console.log(unique.length)

  const arrayStats = [
    {
      total: arrayStates.length,
      unique: unique.length,
    },
  ];
// console.log(arrayStats)
  return arrayStats;
};

export const statsValidate = (arrayStates) => {
  // console.log(arrayStates)
  const linksRotos = arrayStates.filter((item) => item.state === 404);

  const links = [];
  arrayStates.forEach((item) => links.push(item.href));
  let unicos = new Set(links);
  const linksOrdenados = links.sort();
  const almacenador = [];
  const unicosElementos = [];
  let contador = 1;

  for (let i = 0; linksOrdenados.length > i; i++) {
    if (linksOrdenados[i + 1] == linksOrdenados[i]) {
      contador++;
    } else {
      unicosElementos.push(linksOrdenados[i]);
      almacenador.push(contador);
      contador = 1;
    }
  }
  // console.log(unicosElementos);
  // console.log(almacenador);

  const unique = almacenador.filter((item) => item == 1);
  const repetidos = almacenador.filter((item) => item > 1);
  // console.log(unique.length)

  const objectStats = [
    {
      total: arrayStates.length,
      unique: unique.length,
      repetidos: repetidos.length,
      broken: linksRotos.length,
    },
  ];
// console.log(objectStats)
  return objectStats;
};

export const statsPlus = (arrayStates) => {
  console.log(arrayStates)
  const array = [];
  const links = [];
  arrayStates.forEach((item) => links.push(item.href));
  let unicos = new Set(links);
  const linksOrdenados = links.sort();
  const almacenador = [];
  const unicosElementos = [];
  let contador = 1;
  for (let i = 0; linksOrdenados.length > i; i++) {
    if (linksOrdenados[i + 1] == linksOrdenados[i]) {
      contador++;
    } else {
      unicosElementos.push(linksOrdenados[i]);
      almacenador.push(contador);
      contador = 1;
    }
  }

  for (let a = 0; unicosElementos.length > a; a++) {
    const object = {
      href: `${unicosElementos[a]}`,
      veces: `${almacenador[a]}`,
    };
    array.push(object);
  }
  console.log(array)
  return  (array)
};




