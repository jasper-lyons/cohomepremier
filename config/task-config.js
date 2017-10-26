module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
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
