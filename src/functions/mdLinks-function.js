import fs from "fs";
import path from "path";
// import chalk from "chalk";


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
  const texto = array.map((file) => fs.readFileSync(file, "utf-8"));
  const expression = /\[([^\]]*)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/gm;
  const regex = new RegExp(expression);

  const allResult = [];


  texto.forEach((t, i) => {

    if (t.match(regex) === null) {
      return allResult;
    } else if (t.match(regex).length > 1) {
      t.match(regex).forEach((v) => {
        const link = v.split("](")[1].slice(0, -1);

        const text = v.split("](")[0].slice(1);

       const objectFromLink = {
          href: link,
          text: text,
          path: array[i],
        };
        allResult.push(objectFromLink);
      });
    } else if (t.match(regex).length === 1) {
     const link = t.match(regex).map((v) => v.split("](")[1].slice(0, -1));

     const text = t.match(regex).map((v) => v.split("](")[0].slice(1));

     const objectFromOneLink = {
        href: link[0],
        text: text[0],
        path: array[i],
      };
      allResult.push(objectFromOneLink);
    }
  });
  return allResult;
};

export const stats = (arrayStates) => {
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

  const unique = almacenador.filter((item) => item == 1);
  const repetidos = almacenador.filter((item) => item > 1);
  // console.log(unique.length)

  const arrayStats = [
    {
      total: arrayStates.length,
      unique: unique.length,
      repetidos: repetidos.length,
    },
  ];
  return arrayStats;
};

export const statsValidate = (arrayStates) => {
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

  const unique = almacenador.filter((item) => item == 1);
  const repetidos = almacenador.filter((item) => item > 1);

  const objectStats = [
    {
      total: arrayStates.length,
      unique: unique.length,
      repetidos: repetidos.length,
      broken: linksRotos.length,
    },
  ];
  return objectStats;
};

export const statsPlus = (arrayStates) => {
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
  return array;
};
