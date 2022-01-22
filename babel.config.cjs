// import { async } from "jshint/src/prod-params"

module.exports={

  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
  }

};
