import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  reader: DataReader;
  matches: MatchData[] = [];

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  static fromCsvFile(file: string) {
    return new MatchReader(new CsvFileReader(file));
  }

  load() {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
