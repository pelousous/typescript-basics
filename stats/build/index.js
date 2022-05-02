"use strict";
// import fs from 'fs';
Object.defineProperty(exports, "__esModule", { value: true });
// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// }).split('\n').map(row => row.split(','));
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsvFile("football.csv");
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// let manWin = 0;
// for (let el of matchReader.matches) {
//   console.log(el);
//   if (
//     (el[1] === "Man United" && el[5] === MatchResult.HomeWin) ||
//     (el[2] === "Man United" && el[5] === MatchResult.AwayWin)
//   ) {
//     manWin++;
//   }
// }
// console.log("Man Win", manWin);
// console.log(dateStringToDate("05/07/2020"));
