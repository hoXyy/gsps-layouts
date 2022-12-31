"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replicants_1 = require("./util/replicants");
let cycleTimeout;
// Controls the name cycling ticks for players/hosts
function cycleNames(reset = false) {
    clearTimeout(cycleTimeout);
    let cycle = 0;
    if (doAllPlayersInRunHaveTwitch(replicants_1.activeRunReplicant.value)) {
        if (!reset) {
            cycle = replicants_1.nameCycleReplicant.value + 1;
        }
        if (cycle === 0) {
            // Name
            cycleTimeout = setTimeout(cycleNames, 45 * 1000);
        }
        else if (cycle === 1) {
            // Twitch
            cycleTimeout = setTimeout(cycleNames, 15 * 1000);
        }
        else {
            cycleNames(true);
            return;
        }
    }
    else {
        cycleTimeout = setTimeout(cycleNames, 45 * 1000);
    }
    replicants_1.nameCycleReplicant.value = cycle;
}
function doAllPlayersInRunHaveTwitch(run) {
    let players = [];
    let playersWithTwitch = [];
    if (run && run.teams) {
        for (let i = 0; i < run.teams.length; i++) {
            let team = run.teams[i];
            for (let i = 0; i < team.players.length; i++) {
                players.push(team.players[i].name);
                if (team.players[i].social.twitch) {
                    playersWithTwitch.push(team.players[i].name);
                }
            }
        }
        if (JSON.stringify(players) === JSON.stringify(playersWithTwitch)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
replicants_1.activeRunReplicant.on('change', () => {
    cycleNames(true);
});
cycleNames(true);
