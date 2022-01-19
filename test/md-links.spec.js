import { verificarRutaAbsoluta,stats,statsValidate,statsPlus, verificarSiExisteRuta,findLinks , verificarSiEsArchivo , verificarTipo , extraerArchivos } from "../src/functions/mdLinks-function.js";
import {linkAbsolute,arrayStatsValidate,arrayStatsValidateResult,arrayStats,arrayStatsResult, linkRelative , rutasFile , linkAbsoluteDir , linkAbsolute2, arrayPath, resultBasic, arrayStatsPlus, arrayStatsPlusResult} from './dataFunction.js'

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

describe("verifica si la ruta existe", () => {
  it("is a function", () => {
    expect(typeof verificarSiExisteRuta).toBe("function");
  });

  it("debe retornar true si la ruta existe", () => {
    expect(verificarSiExisteRuta(linkAbsolute)).toBeTruthy()
  });

});

describe("verifica si la ruta existe", () => {
  it("is a function", () => {
    expect(typeof verificarSiEsArchivo).toBe("function");
  });

  it("debe retornar true si la ruta existe", () => {
    expect(verificarSiEsArchivo(linkAbsolute)).toBeTruthy()
  });

});

describe("verifica si la ruta existe", () => {
  it("is a function", () => {
    expect(typeof verificarTipo).toBe("function");
  });

  it("debe retornar true si la ruta existe", () => {
    expect(verificarTipo(linkAbsolute)).toBe('.md')
  });

});

describe("extrae archivos", () => {
  it("is a function", () => {
    expect(typeof extraerArchivos).toBe("function");
  });

  it("verifica que la ruta pertenezca a un archivo md", () => {
    expect(extraerArchivos(linkAbsolute)).toStrictEqual([linkAbsolute])
  });

  it("extrae archivos de un directorio", () => {
    expect(extraerArchivos(linkAbsoluteDir)).toStrictEqual([linkAbsolute,linkAbsolute, linkAbsolute2])
  });

});

describe("encunetra links", () => {
  it("is a function", () => {
    expect(typeof findLinks).toBe("function");
  });

  it("verifica que la ruta pertenezca a un archivo md", () => {
    expect(findLinks(arrayPath)).toStrictEqual(resultBasic)
  });

});

describe("encunetra links", () => {
  it("is a function", () => {
    expect(typeof stats).toBe("function");
  });

  it("verifica que la ruta pertenezca a un archivo md", () => {
    expect(stats(arrayStats)).toStrictEqual(arrayStatsResult)
  });

});

// stats


describe("encunetra links", () => {
  it("is a function", () => {
    expect(typeof statsValidate).toBe("function");
  });

  it("verifica que la ruta pertenezca a un archivo md", () => {
    expect(statsValidate(arrayStatsValidate)).toStrictEqual(arrayStatsValidateResult)
  });

});

describe("encunetra links", () => {
  it("is a function", () => {
    expect(typeof statsPlus).toBe("function");
  });

  it("verifica que la ruta pertenezca a un archivo md", () => {
    expect(statsPlus(arrayStatsPlus)).toStrictEqual(arrayStatsPlusResult)
  });

});
