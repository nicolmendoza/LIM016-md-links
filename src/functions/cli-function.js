import axios from "axios";

const resultState = [];
export const findStatus = (allResult) => {
  return new Promise((resolve, reject) => {
    const hola = allResult.map((item) => {
      return axios
        .get(item.href)
        .then((x) => {
          const stat = { state: x.status, textState: "ok" };
          const finalResult = Object.assign(item, stat);
          resultState.push(finalResult);
          return resultState;
        })
        .catch(() => {
          const stat = { state: 404, textState: "fail" };
          const finalResult = Object.assign(item, stat);
          // console.log(finalResult);
          resultState.push(finalResult);
          return resultState;
        });
      // .then(x=>console.log(x))
    });
    Promise.all(hola).then(() => resolve(resultState));
  });
};
