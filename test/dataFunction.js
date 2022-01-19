import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const rutasFile = [];

export const linkRelative = "test/data/data1.md";
export const linkAbsolute = path.normalize(`${__dirname}/data/data1.md`);
// console.log(linkRelative,path.normalize(linkAbsolute) )
// console.log(__dirname)

export const linkAbsoluteDir = path.normalize(`${__dirname}/data`);

export const linkAbsolute2 = path.normalize(`${__dirname}/data/data2/data2.md`);

export const arrayPath = [
  "C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data2\\data2.md",
];

export const resultBasic = [
  {
    href: "https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e",
    text: "Linea de comando CLI",
    path: `${linkAbsolute2}`,
  },
];

export const arrayStats=[
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data2\\data2.md',
    state: 200,
    textState: 'ok'
  }
]


export const arrayStatsResult=[ { total: 1, unique: 1 } ]

export const arrayStatsValidate=[
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data1.md',
    state: 200,
    textState: 'ok'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data1.md',
    state: 200,
    textState: 'ok'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data2\\data2.md',
    state: 200,
    textState: 'ok'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data1.md',
    state: 200,
    textState: 'ok'
  },
  {
    href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
    text: 'Asíncronía en js',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data1.md',
    state: 200,
    textState: 'ok'
  }
]

export const arrayStatsValidateResult=[ { total: 5, unique: 5, repetidos: 0, broken: 0 } ]


export const arrayStatsPlus=[
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    path: 'C:\\Users\\20150_000\\Desktop\\proyectos\\LIM016-md-links\\test\\data\\data2\\data2.md',
    state: 200,
    textState: 'ok'
  }
]

export const arrayStatsPlusResult=[
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    veces: '1'
  }
]
