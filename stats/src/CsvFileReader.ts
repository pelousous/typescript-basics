import fs from "fs";

export class CsvFileReader {
  fileName: string;
  data: string[][] = [];

  constructor(filename: string) {
    this.fileName = filename;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
