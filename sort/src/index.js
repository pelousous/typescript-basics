"use strict";
exports.__esModule = true;
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var collection = new NumbersCollection_1.NumberCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(collection);
sorter.sort();
console.log(collection.data);
