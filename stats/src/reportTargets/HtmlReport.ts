import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const htmlString = `<div>
      <h1>Output analysis</h1>
      <p>${report}</p></div>
    `;

    fs.writeFileSync("report.html", htmlString);
  }
}
