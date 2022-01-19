import { mdlinks } from "./index.js";
import path from "path";
import figlet from "figlet";

import {
  verificarRutaAbsoluta,
  verificarSiEsArchivo,
  verificarTipo,
  verificarSiExisteRuta,
  extraerArchivos,
  findLinks,
  statsValidate,
  statsPlus,
  stats,
} from "./functions/mdLinks-function.js";

import { findStatus } from "./functions/cli-function.js";

import {
  convertToArrayBasic,
  convertToArrayValidate,
  convertToArrayStats,
  convertToArrayStatsValidate,
} from "./functions/functionExtra/functionExtra.js";

const ruta = process.argv[2];
import chalk from "chalk";

const option = process.argv[3];

import inquirer from "inquirer";

import { table } from "table";

const help = [
  ["option: --basic", "Shows basic information about your files"],
  [
    "option: --validate",
    "Shows status information about links e.g OK, FAIL status",
  ],
  [
    "option: --stats",
    "Shows statistical information (Total links, Unique links)",
  ],
  [
    "option: --validate & --stats ",
    "Shows statistical information (Total links, Unique links, Broken links)",
  ],
];

const config = {
  // singleLine: true,
  columns: {
    0: { width: 30 },
    1: { width: 30 },
    2: { width: 30 },
    3: { width: 10 },
    4: { width: 10 },
  },
};

const configStats = {
  // singleLine: true,
  columns: {
    0: { width: 20 },
    1: { width: 20 },
    2: { width: 20 },
    3: { width: 20 },
  },
};

const configHelp = {
  // singleLine: true,
  columns: {
    0: { width: 40 },
    1: { width: 40 },
    2: { width: 40 },
  },
};

// const config = {
//   // singleLine: true,
//   columns: {
//     0: { width: 30 },
//     1: { width: 30 },
//     2: { width: 30 },
//     3: { width: 10 },
//     4: { width: 10 },
//   },
// };

// console.log(table(data, config));

const banner = () => {
  figlet("Markdown Links", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }

    console.log(`${chalk.dim.yellowBright(data)}`);
    console.log("Wait a moment...");
    // return callback()
  });
};

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
    if (answer.choose === "Please, help") {
      console.log(table(help));
    } else {
      banner();
      mdlinks(answer.path, answer.choose)
        .then((allResult) => {
          if (answer.choose === "--basic") {
            setTimeout(
              () => console.log(table(convertToArrayBasic(allResult), config)),
              2000
            );
          } else if (answer.choose === "--validate") {
            // convertToArrayValidate
            findStatus(allResult).then((x) =>
              console.log(table(convertToArrayValidate(x), config))
            );
          } else if (answer.choose === "--stats") {
            findStatus(allResult).then((x) => {
              const array = convertToArrayStats(stats(x));
              console.log(table(array, config));
            });
          } else if (answer.choose === "--validate & --stats") {
            findStatus(allResult).then((x) => {
              const array = convertToArrayStatsValidate(statsValidate(x));
              console.log(table(array, configStats));
            });
          } else if (answer.choose === "--statsPlus") {
            findStatus(allResult).then((x) => console.log(statsPlus(x)) );
          }
        })
        .catch((error) => console.log(error));
    }
  });
