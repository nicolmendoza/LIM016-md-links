// const get = jest.fn((url) => {
//   if (url === 'google.com' ) {
//     return Promise.resolve({
//         status: 200,

//       })
//   }
//   if (url === 'amazon.com') {
//     return Promise.resolve({
//       status: 404,

//     })
//   }
// });

const get = jest.fn(() =>Promise.resolve());



export default {
  get,
};
