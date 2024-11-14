// This implimentation was explained by the package readme on the npm website

//var generateName = require("sillyname");

import generateName from "sillyName"; //import function from npm module
var sillyName = generateName();

console.log("My name is : " + sillyName + "."); // Or within the "" do ${sillyname}