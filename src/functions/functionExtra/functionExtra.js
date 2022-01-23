import chalk from "chalk";

const arrayTotal = [
  [
    `${chalk.italic.magentaBright("Href")}`,
    `${chalk.italic.magentaBright("Text")}`,
    `${chalk.italic.magentaBright("Path")}`,
  ],
];
export const convertToArrayBasic = (array) => {
  array.forEach((item) => {
    const newArray = [
      `${chalk.italic.cyan(item.href)}`,
      `${chalk.italic.magenta(item.text)}`,
      `${chalk.italic.cyan(item.path)}`,
    ];
    arrayTotal.push(newArray);
  });
  return arrayTotal;
};

const arrayTotalValidate = [
  [
    `${chalk.italic.magenta("Href")}`,
    `${chalk.italic.magenta("Text")}`,
    `${chalk.italic.magenta("Path")}`,
    `${chalk.italic.magenta("State")}`,
    `${chalk.italic.magenta("Text State")}`,
  ],
];
export const convertToArrayValidate = (array) => {
  array.forEach((item) => {
    let newArray;

    if (item.state == 200) {
      newArray = [
        `${chalk.italic.cyan(item.href)}`,
        `${chalk.italic.cyan(item.text)}`,
        `${chalk.italic.cyan(item.path)}`,
        `${chalk.bold.greenBright(item.state)}`,
        `${chalk.bold.yellowBright(item.textState)}`,
      ];
    } else {
      newArray = [
        `${chalk.italic.cyan(item.href)}`,
        `${chalk.italic.cyan(item.text)}`,
        `${chalk.italic.cyan(item.path)}`,
        `${chalk.bold.redBright(item.state)}`,
        `${chalk.bold.magentaBright(item.textState)}`,
      ];
    }

    arrayTotalValidate.push(newArray);
  });
  return arrayTotalValidate;
};

// Total links, Unique links
const arrayTotalStats = [
  [
    `${chalk.italic.magenta("Total Links")}`,
    `${chalk.italic.magenta("Unique Links")}`,
    `${chalk.italic.magenta("Repeated Links")}`,
  ],
];
export const convertToArrayStats = (array) => {
  array.forEach((item) => {
    const newArray = [
      `${chalk.bold.cyanBright(item.total)}`,
      `${chalk.bold.cyanBright(item.unique)}`,
      `${chalk.bold.cyanBright(item.repetidos)}`
    ];
    arrayTotalStats.push(newArray);
  });
  return arrayTotalStats;
};

const arrayTotalStatsValidate = [
  [
    `${chalk.italic.magenta("Total Links")}`,
    `${chalk.italic.magenta("Unique Links")}`,
    `${chalk.italic.magenta("Repeated Links")}`,
    `${chalk.italic.magenta("Broken  Links")}`,
  ],
];
export const convertToArrayStatsValidate = (array) => {
  array.forEach((item) => {
    const newArray = [
      `${chalk.bold.cyanBright(item.total)}`,
      `${chalk.bold.cyanBright(item.unique)}`,
      `${chalk.bold.cyanBright(item.repetidos)}`,
      `${chalk.bold.cyanBright(item.broken)}`,
    ];
    arrayTotalStatsValidate.push(newArray);
  });
  return arrayTotalStatsValidate;
};

const arrayTotalPlus = [
  [
    `${chalk.italic.magenta("Links")}`,
    `${chalk.italic.magenta("Times it Appears")}`
  ],
];
export const convertToArrayPlus = (array) => {
  array.forEach((item) => {
    const newArray = [
      `${chalk.italic.cyan(item.href)}`,
      `${chalk.italic.cyanBright(item.veces)}`
    ];
    arrayTotalPlus.push(newArray);
  });
  return arrayTotalPlus;
};
