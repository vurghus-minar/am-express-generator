#!/usr/bin/env node

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
      process.stdout.write("Help is at hand! \n");
      process.stdout.write("help === Display help \n");
      process.stdout.write(
        "controller <name> === e.g controller name, generates controller scaffold \n"
      );
      process.stdout.write(
        "model <Name> === e.g model name, generates model scaffold \n"
      );
      process.stdout.write(
        "route <name> === e.g route name, generates route scaffold \n"
      );
      process.stdout.write(
        "request <name> === e.g request name, generates request scaffold \n"
      );
      process.stdout.write(
        "all <name> === e.g all name, generates complete scaffold \n"
      );
      process.exit();
    }

    switch (resourceType) {
      case "controller":
        generate.controller(resourceType, resourceName);
        break;
      case "model":
        generate.model(resourceType, resourceName);
        break;
      case "request":
        generate.request(resourceType, resourceName);
        break;
      case "route":
        generate.route(resourceType, resourceName);
        break;
      default:
        console.error("Invalid arguments supplied!");
        break;
    }
  }
};
