// import fs from 'fs';

// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// }).split('\n').map(row => row.split(','));

//import { Circle } from "./Circle";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
// import { MatchResult } from "./MatchResults";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
//import { Rectangle } from "./Rectangle";
//import { dateStringToDate } from "./utils";
//import { Wall } from "./Wall";

//const reader = new MatchReader("football.csv");
//reader.read();

const reader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
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
