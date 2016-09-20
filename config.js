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
    'jquery': 'npm:jquery/dist/jquery.js',
    'typescript': 'npm:typescript/lib/typescript.js',
  },

  meta: {
    'jquery': {
      format: 'global',
      exports: 'jQuery'
    }
  }
});
