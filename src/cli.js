import { mdlinks } from "./index.js";
import path from "path";
// import {_dirname} from 'path'
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
const ruta = process.argv[2];

const option = process.argv[3];

import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "path",
      message: "Please , write the path",
      // default:'red'
    },
    {
      type: "list",
      name: "choose",
      message: "please, choose",
      choices: [
        "--basic",
        "--validate",
        "--stats",
        "--validate & --stats",
        "--statsPlus",
        "Please, help",
      ],
    },
  ])
  .then((answer) => {
    mdlinks(answer.path, answer.choose)
      .then((allResult) => {
        if (answer.choose === "--basic") {
          // const allResult = findLinks(pathsFind);
          console.log(allResult);
        } else if (answer.choose === "--validate") {
          findStatus(allResult).then((x) => console.log(x));
        } else if (answer.choose === "--stats") {
          findStatus(allResult).then((x) => stats(x));
        } else if (answer.choose === "--statsPlus") {
          findStatus(allResult).then((x) => statsPlus(x));
        }
      })
      .catch((error) => console.log(error));
  });

// mdlinks(answer, option).then(
//   (x) => console.log(x),
//   (error) => console.log(error)
// );
