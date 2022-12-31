"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_1 = require("./util/nodecg");
const tagged_logger_1 = require("./util/tagged-logger");
const fs_1 = __importDefault(require("fs"));
const csv_stringify_1 = require("csv-stringify");
const log = new tagged_logger_1.TaggedLogger('VoD Timestamp');
const config = (0, nodecg_1.get)().bundleConfig.obs;
(0, nodecg_1.get)().listenFor('createVoDTimeStamp', ({ timestamp, run }) => {
    var _a;
    if ((_a = config.timestamps) === null || _a === void 0 ? void 0 : _a.enabled) {
        createVoDTimeStamp(timestamp, run);
    }
});
function createVoDTimeStamp(timestamp, run) {
    var _a, _b, _c;
    const date = new Date();
    const fileName = date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        '.csv';
    const path = ((_a = config.timestamps) === null || _a === void 0 ? void 0 : _a.csv_folder_path) + '\\' + fileName;
    if (!fs_1.default.existsSync((_b = config.timestamps) === null || _b === void 0 ? void 0 : _b.csv_folder_path)) {
        fs_1.default.mkdirSync((_c = config.timestamps) === null || _c === void 0 ? void 0 : _c.csv_folder_path, { recursive: true });
    }
    if (run && run.game) {
        (0, csv_stringify_1.stringify)([
            {
                timestamp,
                game: run.game,
                category: run.category,
                players: formatPlayers(run),
            },
        ], {
            header: false,
        }, (err, output) => {
            if (err) {
                log.error(`Błąd przy przygotowaniu danych do pliku CSV! ${err}`);
                return;
            }
            else {
                try {
                    fs_1.default.appendFileSync(path, output);
                    log.info('Zapisano timestamp do pliku CSV');
                }
                catch (err) {
                    log.error(`Błąd przy zapisywaniu pliku CSV! ${err}`);
                }
            }
        });
    }
    else {
        log.info('Brak obecnej gry!');
    }
}
function formatPlayers(run) {
    return (run.teams
        .map((team) => team.name || team.players.map((player) => player.name).join(', '))
        .join(' vs. ') || 'Bez gracza');
}
