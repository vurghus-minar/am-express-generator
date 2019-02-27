#! /usr/bin/env node

/**
Name : Express MVC scaffold and file generator
Author:  Vurghus Minar <vurghus.minar@outlook.com>
License : MIT
Version : 1.0
**/

//Module Dependencies
var generate = require("./generator.js");

module.exports = {
  listen: function() {
    //Slice out the array
    var userArgs = process.argv.slice(2);

    //Read Argument Values and Assign
    var resourceType = userArgs[0],
      resourceName = userArgs[1];

    if (resourceType === "help") {
      console.log("Help!");
      process.exit();
    }

    switch (resourceType) {
      case "controller":
        generate.controller(resourceName);
        break;
      case "model":
        generate.model(resourceName);
        break;
      case "request":
        generate.request(resourceName);
        break;
      case "route":
        generate.route(resourceName);
        break;
      default:
        console.error("Invalid arguments supplied!");
        break;
    }
  }
};
