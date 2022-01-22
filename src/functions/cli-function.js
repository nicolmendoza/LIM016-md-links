import axios from "axios";


export const findStatus = (allResult) => {
  const resultState = [];
  return new Promise((resolve, reject) => {
    const result = allResult.map((item) => {
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
    Promise.all(result).then(() => resolve(resultState));
  });
};
