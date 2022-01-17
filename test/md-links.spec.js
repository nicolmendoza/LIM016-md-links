import { verificarRutaAbsoluta } from "../src/functions/mdLinks-function";
import {linkAbsolute, linkRelative} from './dataFunction.js'

describe("convert to absolute rute", () => {
  it("is a function", () => {
    expect(typeof verificarRutaAbsoluta).toBe("function");
  });

  it("debe retornar una ruta absoluta al ser una ruta relativa", () => {
    expect(verificarRutaAbsoluta(linkRelative)).toBe(linkAbsolute);
  });

  it("debe de retornar la ruta absoluta", () => {
    expect(verificarRutaAbsoluta(linkAbsolute)).toBe(linkAbsolute);
  });
});
