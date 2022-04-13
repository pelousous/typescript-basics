"use strict";
exports.__esModule = true;
exports.Company = void 0;
var faker_1 = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.color = 'blue';
        this.name = faker_1["default"].company.companyName();
        this.claim = faker_1["default"].company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1["default"].address.latitude()),
            lng: parseFloat(faker_1["default"].address.longitude())
        };
    }
    Company.prototype.markerContent = function () {
        return "The company name is ".concat(this.name);
    };
    return Company;
}());
exports.Company = Company;
