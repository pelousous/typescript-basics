import fs from "fs";

export abstract class CsvFileReader<T> {
  fileName: string;
  data: T[] = [];

  constructor(filename: string) {
    this.fileName = filename;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }

  abstract mapRow(row: string[]): T;
}
