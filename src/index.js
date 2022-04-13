"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
var map = new CustomMap_1.CustomMap("google-map");
var user = new User_1.User();
var company = new Company_1.Company();
map.addMarker(user);
map.addMarker(company);
