System.config({
  baseURL: './',
  defaultJSExtensions: true,
  transpiler: 'typescript',
  paths: {
    'npm:*': 'node_modules/*'
  },

  packages: {
    'app': { defaultExtension: 'ts' }
  },

  map: {
    'jquery': '//code.jquery.com/jquery-2.1.4.min.js',
    'typescript': 'npm:typescript/lib/typescript.js',
    'materialize': 'npm:materialize-css/bin/materialize.js'
  },

  meta: {
    'jquery': {
      format: 'global',
      exports: '$'
    },
    'materialize': {
      format: 'global'
    }
  }
});
