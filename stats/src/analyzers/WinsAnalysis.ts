import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResults";
import { MatchData } from "../MatchData";

export class WinsAnalysis implements Analyzer {
  matchWins: number = 0;
  team: string;

  constructor(team: string) {
    this.team = team;
  }

  run(matches: MatchData[]): string {
    for (let match of matches) {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      ) {
        this.matchWins++;
      }
    }

    return this.team + " wins " + this.matchWins + " match(es)";
  }
}
