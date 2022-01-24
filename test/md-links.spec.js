import {
  verificarRutaAbsoluta,
  stats,
  statsValidate,
  statsPlus,
  verificarSiExisteRuta,
  findLinks,
  verificarSiEsArchivo,
  verificarTipo,
  extraerArchivos,
} from "../src/functions/mdLinks-function.js";

import {
  linkAbsolute,
  arrayStatsValidate,
  arrayStatsValidateResult,
  arrayStats,
  arrayStatsResult,
  linkRelative,
  rutasFile,
  linkAbsoluteDir,
  linkAbsolute2,
  arrayPath,
  resultBasic,
  arrayStatsPlus,
  arrayStatsPlusResult,
  arrayStatsValidate2,
  arrayStatsValidateResult2,
  allResult,
  arrayStats2,
  arrayStats2Result,
  arrayStatsPlus2,
  arrayStatsPlusResult2,
  arrayFindLinks,
  arrayFindLinksResult,
  arrayFindLinks2,
  arrayFindLinksResult2
} from "./dataFunction.js";
import { mdlinks } from "../src/index.js";

describe("verifica si la ruta ingresada es absoluta", () => {
  it("es una funciòn", () => {
    expect(typeof verificarRutaAbsoluta).toBe("function");
  });

  it("debe retornar una ruta absoluta al ingresar una ruta relativa", () => {
    expect(verificarRutaAbsoluta(linkRelative)).toBe(linkAbsolute);
  });

  it("debe retornar una ruta absoluta al ingresar una ruta absoluta", () => {
    expect(verificarRutaAbsoluta(linkAbsolute)).toBe(linkAbsolute);
  });
});

describe("verifica si la ruta existe", () => {
  it("es una funciòn", () => {
    expect(typeof verificarSiExisteRuta).toBe("function");
  });

  it("debe retornar true si la ruta existe", () => {
    expect(verificarSiExisteRuta(linkAbsolute)).toBeTruthy();
  });
});

describe("verifica si la ruta que ingresa es un archivo", () => {
  it("is a function", () => {
    expect(typeof verificarSiEsArchivo).toBe("function");
  });

  it("debe retornar true si la ruta ingresada es de un archivo", () => {
    expect(verificarSiEsArchivo(linkAbsolute)).toBeTruthy();
  });
});

describe("verifica que el tipo del archivo es .md", () => {
  it("es una funcion", () => {
    expect(typeof verificarTipo).toBe("function");
  });

  it("debe retornar .md si la ruta del archivo es .md", () => {
    expect(verificarTipo(linkAbsolute)).toBe(".md");
  });
});

describe("se extraen los archivos de la ruta ingresada", () => {
  it("es una función", () => {
    expect(typeof extraerArchivos).toBe("function");
  });

  it("Al ingresar la ruta de un archivo me devuelve un array con la direcciòn", () => {
    expect(extraerArchivos(linkAbsolute)).toStrictEqual([linkAbsolute]);
  });

  it("Al ingresar la ruta de un directorio me devuelve un array con las direcciones de los archivos que contiene", () => {
    expect(extraerArchivos(linkAbsoluteDir)).toStrictEqual([
      linkAbsolute,
      linkAbsolute,
      linkAbsolute2,
    ]);
  });
});

describe("findLinks extrae los links , el texto del link , y la dirección del archivo ", () => {
  it("es una funciòn", () => {
    expect(typeof findLinks).toBe("function");
  });

  it("debe de retornarme un array con el link, texto y dirección del archivo que tiene un  solo un link", () => {
    expect(findLinks(arrayPath)).toStrictEqual(resultBasic);
  });
  it("debe de retornar un array vacio al no tener links el archivo", () => {
    expect(findLinks(arrayFindLinks)).toStrictEqual(arrayFindLinksResult);
  });
  it("debe de retornar un array con los links, textos y dirección del archivo que tiene varios links", () => {
    expect(findLinks(arrayFindLinks2)).toStrictEqual(arrayFindLinksResult2);
  });
});

describe("me devuelve un array con información de los números de links repetidos, totales y únicos ", () => {
  it("es una función", () => {
    expect(typeof stats).toBe("function");
  });

  it("al pasar un array con información de un solo link me devuelve el número de links repetidos, totales y únicos", () => {
    expect(stats(arrayStats)).toStrictEqual(arrayStatsResult);
  });

  it("al pasar un array con información de varios links me devuelve el número de los links repetidos, totales y únicos", () => {
    expect(stats(arrayStats2)).toStrictEqual(arrayStats2Result);
  });
});


describe(" StatsValidate me devuelve un array con información del número total de links, links únicos, links repetidos, y links rotos ",() => {
  it("es una función", () => {
    expect(typeof statsValidate).toBe("function");
  });

  it("me devuelve un array con información del número total de links, links únicos, links repetidos, y links rotos", () => {
    expect(statsValidate(arrayStatsValidate)).toStrictEqual(
      arrayStatsValidateResult
    );
  });
  it("me devuelve un array con información del número total de links, links únicos, links repetidos, y links rotos", () => {
    expect(statsValidate(arrayStatsValidate2)).toStrictEqual(
      arrayStatsValidateResult2
    );
  });
});

describe("La función statsPlus me devuelve información del número de veces en que aparece cada Link", () => {
  it("es una función", () => {
    expect(typeof statsPlus).toBe("function");
  });

  it("me devuelve un array con el link y el número de veces que aparece el link ingresado", () => {
    expect(statsPlus(arrayStatsPlus)).toStrictEqual(arrayStatsPlusResult);
  });
  it("me devuelve un array con los links y el número de veces que aparece los links ingresados", () => {
    expect(statsPlus(arrayStatsPlus2)).toStrictEqual(arrayStatsPlusResult2);
  });
});


describe("La función mdLinks", () => {
  it("es una función", () => {
    expect(typeof mdlinks).toBe("function");
  });

  test('Es una promesa que se resuelve con  un array de objetos ', () => {
    return expect(mdlinks('./test', '')).toBeInstanceOf(Promise);
  });

  it("me devuelve un error al ingresar una ruta no válida", () => {
    return mdlinks().catch((err) => {
      expect(err).toEqual('Error: Please enter a valid path')
    });
  })
  it("me devuelve un error al ingresar una ruta que no existe", () => {
    return mdlinks("ruta", "").catch((err) => {
      expect(err).toEqual('Error: The path does not exist , please enter a valid path')
    });
  })

});

