"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("./MatchResults");
class WinsAnalysis {
    constructor(team) {
        this.matchWins = 0;
        this.team = team;
    }
    run(matches) {
        for (let match of matches) {
            if ((match[1] === this.team && match[5] === MatchResults_1.MatchResult.HomeWin) ||
                (match[2] === this.team && match[5] === MatchResults_1.MatchResult.AwayWin)) {
                this.matchWins++;
            }
        }
        return this.team + " wins " + this.matchWins + " match(es)";
    }
}
exports.WinsAnalysis = WinsAnalysis;
