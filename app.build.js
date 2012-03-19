({
  baseUrl: "public/javascripts",
  optimize: "uglify",
  inlineText: true,

  paths: {
    text: 'libs/text',
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    localstorage: 'libs/backbone/localstorage'
  },

  name: "main",
  out: "public/javascripts/production.js"
})
