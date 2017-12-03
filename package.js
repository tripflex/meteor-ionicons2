Package.describe({
  name: 'tripflex:ionicons2',
  summary: 'Ionic icons 2 with offline support',
  version: '2.0.1',
  git: 'https://github.com/tripflex/meteor-ionicons2.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

    api.addFiles([
        'css/ionicons.css'
    ], 'client' );

    api.addAssets([
        'fonts/ionicons.eot',
        'fonts/ionicons.svg',
        'fonts/ionicons.ttf',
        'fonts/ionicons.woff',
    ], 'client');
});
