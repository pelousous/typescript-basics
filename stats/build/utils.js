"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    // const dateParts = dateString.split('/');
    const dateParts = dateString.split('/').map(part => parseInt(part));
    const day = dateParts[0];
    const month = dateParts[1] - 1;
    const year = dateParts[2];
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
