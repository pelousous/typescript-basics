"use strict";
// import fs from 'fs';
Object.defineProperty(exports, "__esModule", { value: true });
// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// }).split('\n').map(row => row.split(','));
//import { Circle } from "./Circle";
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
// import { MatchResult } from "./MatchResults";
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
//import { Rectangle } from "./Rectangle";
//import { dateStringToDate } from "./utils";
//import { Wall } from "./Wall";
//const reader = new MatchReader("football.csv");
//reader.read();
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
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
