const fs = require('fs');
const custom = require('./src/Customize/configs/Site.json');
const manifestFile = './public/manifest.json';
const manifest = require(manifestFile);
    
// update manifest
manifest.name = custom.pageTitle;
manifest.short_name = custom.name;
manifest.description = custom.pageDescription;
    
// write the latest
fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  console.log('Updating manifest ' + manifestFile);
});