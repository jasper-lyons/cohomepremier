var fs = require('fs'),
    path = require('path');

function getJsonFile(path) {
  if (!fs.existsSync(path)) return {};

  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (e) {
    return {};
  }
}

function mergeObjects(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
}

module.exports = {
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  html: {
    dataFunction: function (file) {
      var globalDataPath = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src, TASK_CONFIG.html.dataFile),
          pageDataFile = path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.html.src, 'data', path.basename(file.path, '.html') + '.json');

      var data = [globalDataPath, pageDataFile]
        .map(getJsonFile)
        .reduce(mergeObjects,{});


      return data;
    }
  },

  javascripts: {
    entry: {
      app: ['./app.js']
    },
    provide: {
      $: 'jquery',
      jQuery: 'jquery',
      skel: 'skel.min'
    }
  },

  stylesheets: {
    autoprefixer: ['> 0.1%']
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  }
}
