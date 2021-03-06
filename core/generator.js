/**
Name : Express MVC scaffold and file generator
Author:  Vurghus Minar <vurghus.minar@outlook.com>
License : MIT
Version : 1.0
**/

//Module Dependencies
const fs = require("fs-extra");

module.exports = {
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  generate: function(resourceType, resourceName) {
    //Create directory
    fs.mkdirs("./" + resourceType + "s" + "", function(err) {
      if (err) {
        console.error(err);
      } else {
        const dirName = __dirname;

        const dirStr = dirName.substr(dirName.lastIndexOf("/") + 1) + "$",
          fixedUrl = dirName.replace(new RegExp(dirStr), "");

        const targetFile = fixedUrl + "/templates/" + resourceType;
        const destFile =
          "./" +
          resourceType +
          "s" +
          "/" +
          resourceName +
          module.exports.capitalize(resourceType) +
          ".js";

        fs.copy(targetFile, destFile, function(err) {
          if (err) {
            console.error(err);
          } else {
            fs.readFile(destFile, "utf8", function(err, data) {
              if (err) {
                return console.log(err);
              }
              let result = data.replace(/{{resourceName}}/g, resourceName);

              result = result.replace(
                /{{ResourceName}}/g,
                module.exports.capitalize(resourceName)
              );

              fs.writeFile(destFile, result, "utf8", function(err) {
                if (err) return console.log(err);
              });
            });

            console.log(
              resourceType + " " + resourceName + " created successfully!"
            );
          }
        });
      }
    });
  }
};
