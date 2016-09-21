System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "build.js": [
      "app/app.ts",
      "npm:materialize-css@0.97.7.js",
      "npm:jquery@3.1.0.js",
      "app/language/LanguageHandler.ts",
      "app/Translator.ts",
      "app/data/languages/Deutsch.ts",
      "app/language/Language.ts",
      "app/language/LanguageTranslator.ts",
      "app/data/languages/Wiichaeller.ts"
    ]
  },

  packages: {
    "app": {
      "defaultExtension": "ts"
    }
  },

  meta: {
    "jquery": {
      "format": "global",
      "exports": "$"
    },
    "materialize": {
      "format": "global"
    }
  },

  map: {
    "jquery": "npm:jquery@3.1.0",
    "materialize": "npm:materialize-css@0.97.7",
    "typescript": "npm:typescript@1.8.10",
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:materialize-css@0.97.7": {
      "css": "github:systemjs/plugin-css@0.1.27",
      "jquery": "github:components/jquery@3.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
