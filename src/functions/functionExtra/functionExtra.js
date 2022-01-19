import chalk from "chalk";

const arrayTotal = [["Href", "Text", "Path"]];
export const convertToArrayBasic = (array) => {
  array.forEach((item) => {
    const newArray = [item.href, item.text, item.path];
    arrayTotal.push(newArray);
  });
  return arrayTotal;
};

const arrayTotalValidate = [["Href", "Text", "Path", "State", "Text State"]];
export const convertToArrayValidate = (array) => {
  array.forEach((item) => {
    const newArray = [
      item.href,
      item.text,
      item.path,
      item.state,
      item.textState,
    ];
    arrayTotalValidate.push(newArray);
  });
  return arrayTotalValidate;
};

// Total links, Unique links
const arrayTotalStats = [
  [
    `${chalk.italic.cyan("Total Links")}`,
    `${chalk.italic.cyan("Unique Links")}`,
  ],
];
export const convertToArrayStats = (array) => {
  array.forEach((item) => {
    const newArray = [
      `${chalk.bold.magenta(item.total)}`,
      `${chalk.bold.magenta(item.unique)}`,
    ];
    arrayTotalStats.push(newArray);
  });
  return arrayTotalStats;
};

const arrayTotalStatsValidate = [
  [
    `${chalk.italic.cyan("Total Links")}`,
    `${chalk.italic.cyan("Unique Links")}`,
    `${chalk.italic.cyan("Repeated Links")}`,
    `${chalk.italic.cyan("Broken  Links")}`,
  ],
];
export const convertToArrayStatsValidate = (array) => {
  array.forEach((item) => {
    const newArray = [
      `${chalk.bold.magenta(item.total)}`,
      `${chalk.bold.magenta(item.unique)}`,
      `${chalk.bold.magenta(item.repetidos)}`,
      `${chalk.bold.magenta(item.broken)}`,
    ];
    arrayTotalStatsValidate.push(newArray);
  });
  return arrayTotalStatsValidate;
};
