(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'app': 'client', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    '@angular': 'node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    '@angular/common':{main:'/bundles/common.umd.js',defaultExtension:'js'},
    '@angular/compiler':{main:'/bundles/compiler.umd.js',defaultExtension:'js'},
    '@angular/core':{main:'/bundles/core.umd.js',defaultExtension:'js'},
    '@angular/forms':{main:'/bundles/forms.umd.js',defaultExtension:'js'},
    '@angular/http':{main:'/bundles/http.umd.js',defaultExtension:'js'},
    '@angular/platform-browser':{main:'/bundles/platform-browser.umd.js',defaultExtension:'js'},
    '@angular/platform-browser-dynamic':{main:'/bundles/platform-browser-dynamic.umd.js',defaultExtension:'js'},
    '@angular/router':{main:'/bundles/router.umd.js',defaultExtension:'js'},
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'symbol-observable': { main: 'index.js', defaultExtension: 'js' }
  };

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);