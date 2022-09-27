const fs = require("fs");
const custom = require("./src/Customize/configs/ResumeOverrides.json");
const manifestFile = "./public/manifest.json";
const manifest = require(manifestFile);

// update and write the manifest
manifest.name = custom.siteTitle;
manifest.short_name = custom.resume.basics.name;
manifest.description = custom.siteDescription;
fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  console.log("Updating manifest " + manifestFile);
});
