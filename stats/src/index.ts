// import fs from 'fs';

// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// }).split('\n').map(row => row.split(','));

import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsvFile("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
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
