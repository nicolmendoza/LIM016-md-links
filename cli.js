#!/usr/bin/env node

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
  convertToArrayPlus,
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
  [`${chalk.italic.magentaBright("Option: --basic")}`, `${chalk.italic.blue("Shows basic information about your files")}`],
  [
    `${chalk.italic.magentaBright("Option: --validate")}`,
    `${chalk.italic.blue("Shows status information about links e.g OK, FAIL, status")}`,
  ],
  [
    `${chalk.italic.magentaBright("Option: --stats")}`,
    `${chalk.italic.blue("Shows statistical information (Total links, Unique links, Repeated links)")}`,
  ],
  [
    `${chalk.italic.magentaBright("Option: --validate & --stats ")}`,
    `${chalk.italic.blue("Shows statistical information (Total links, Unique links, Broken links , Repeated links)")}`,
  ],
  [
    `${chalk.italic.magentaBright("Option: --statsPlus ")}`,
    `${chalk.italic.blue("Shows information about the number of times the links appear")}`,
  ],
];

const config = {
  // singleLine: true,
  columns: {
    0: { width: 20 },
    1: { width: 20 },
    2: { width: 25 },
    3: { width: 8 },
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

const configBasic = {
  // singleLine: true,
  columns: {
    0: { width: 30 },
    1: { width: 30 },
    2: { width: 30 }
  },
};

// console.log(table(data, config));

const banner = () => {
  figlet("Markdown Links", function (err, data) {

    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }

    console.log(`${chalk.bold.yellowBright(data)}`);
    console.log(`${chalk.bold.greenBright("Wait a moment...")}`);
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
        "--Please, help",
      ],
    },
  ])
  .then((answer) => {
    if (answer.choose === "--Please, help") {
      console.log(table(help));
    } else {
      mdlinks(answer.path, answer.choose)
        .then((allResult) => {
          if (answer.choose === "--basic") {
            banner();
            if (allResult.length == 0) {
              setTimeout(
                () =>
                  console.log(
                    `${chalk.bold.blue("It was not possible to find md files containing links to extract")}`
                  ),
                2000
              );
            } else {
              setTimeout(
                () =>
                  console.log(table(convertToArrayBasic(allResult), configBasic)),
                2000
              );
            }
          } else if (answer.choose === "--validate") {
            banner();
            if (allResult.length == 0) {
              setTimeout(
                () =>

                  console.log(
                    `${chalk.bold.blue("It was not possible to find md files containing links to extract")}`                  ),
                2000
              );
            } else {

              findStatus(allResult).then((x) =>
                console.log(table(convertToArrayValidate(x), config))
              );
            }
          } else if (answer.choose === "--stats") {
            banner();

            if (allResult.length == 0) {
              setTimeout(
                () =>
                  console.log(
                    `${chalk.bold.blue("It was not possible to find md files containing links to extract")}`                  ),
                2000
              );
            } else {
              findStatus(allResult).then((x) => {
                const array = convertToArrayStats(stats(x));
                console.log(table(array, config));
              });
            }
          } else if (answer.choose === "--validate & --stats") {
            banner();

            if (allResult.length == 0) {
              setTimeout(
                () =>
                  console.log(
                    `${chalk.bold.blue("It was not possible to find md files containing links to extract")}`                  ),
                2000
              );
            } else {
              findStatus(allResult).then((x) => {
                const array = convertToArrayStatsValidate(statsValidate(x));
                console.log(table(array, configStats));
              });
            }
          } else if (answer.choose === "--statsPlus") {
            banner();

            if (allResult.length == 0) {
              setTimeout(
                () =>
                  console.log(
                    `${chalk.bold.blue("It was not possible to find md files containing links to extract")}`                  ),
                2000
              );
            } else {
              findStatus(allResult).then((x) =>
                {const array=convertToArrayPlus(statsPlus(x));
                console.log(table(array,configBasic))})
            }
          }
        })
        .catch((error) => console.log(error));
    }
  });
