/* eslint-disable */
const fs = require("fs");
const custom = require("./src/Customize/configs/ResumeOverrides.json");

const manifestFile = "./public/manifest.json";
const manifest = require("./public/manifest.json"); // eslint-disable-line import/no-dynamic-require

// update and write the manifest
manifest.name = custom.siteTitle;
// eslint-disable-next-line camelcase
manifest.short_name = custom.resume.basics.name;
manifest.description = custom.siteDescription;
fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2), (err) => {
  if (err) return console.log(err);
  return console.log(`Updating manifest ${manifestFile}`); // eslint-disable-line no-console
});
