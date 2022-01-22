import { findStatus } from "../src/functions/cli-function.js";
import { jest } from "@jest/globals";
import axios from "axios";

jest.mock("axios");

// jest.mock('../src/functions/cli-function.js');

const allResult2 = [
  {
    href: "https://www.youtube.com/watch?v=WgSc1nv_4Gw",
    text: "¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube",
    path: "C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\prueba.md",
  },
];

const resultExito = [
  {
    href: "https://www.youtube.com/watch?v=WgSc1nv_4Gw",
    text: "¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube",
    path: "C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\prueba.md",
    state: 200,
    textState: "ok",
  },
];

const allResult = [
  {
    href: "https://medium.com/netscapea-guide-to-create-a-nodejs-command-line-package-c2166ad0452e",
    text: "Linea de comando CLI",
    path: "C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data2\\data2.md",
  },
];

const resultFail = [
  {
    href: "https://medium.com/netscapea-guide-to-create-a-nodejs-command-line-package-c2166ad0452e",
    text: "Linea de comando CLI",
    path: "C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data2\\data2.md",
    state: 404,
    textState: "fail",
  },
];


it("La función findStatus", (done) => {
  findStatus(allResult).then((result) => {
    expect(result).toEqual(resultFail);
    done();
  });
});

describe("La función findStatus", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("is a function", () => {
    expect(typeof findStatus).toBe("function");
  });

  test("Me devuelve  el estado de los links ", () => {
    return expect(findStatus(allResult)).toBeInstanceOf(Promise);
  });
  it("La función ", (done) => {

    findStatus(allResult2).then((result) => {
      expect(result).toEqual(resultExito);
      done();
    });
  });

  it ('La función findStatus', (done) => {

    findStatus(allResult).then((result) => {
      expect(result).toEqual(resultFail);
      done();
    });
  });
});


