import {
  timerReplicant,
  activeRunReplicant,
  obsDataReplicant,
} from './util/replicants';
import { get as nodecg } from './util/nodecg';
import type { Configschema } from '@gsps-layouts/types/schemas/configschema';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { TaggedLogger } from './util/tagged-logger';
import io from 'socket.io-client';

const config = (nodecg().bundleConfig as Configschema).highlighter;
let sheets: GoogleSpreadsheet;

if (config.enabled) {
  sheets = new GoogleSpreadsheet(config.spreadsheetId);
  sheets.loadInfo();
  sheets.useServiceAccountAuth({
    client_email: config.service_email!,
    private_key: config.private_key!,
  });
}

const log = new TaggedLogger('highlighter');

function makeHighlight() {
  if (config.enabled) {
    const sheet = sheets.sheetsByTitle['Raw'];
    const timestamp = formatTime(Date.now());
    const timer = timerReplicant.value.time;
    const run = getCurrentGame();
    const scene = obsDataReplicant.value.scene;

    try {
      sheet.addRow([timestamp, run, timer, scene || 'Brak sceny']).then(() => {
        log.info('Highlight wykonany poprawnie');
      });
    } catch (err) {
      log.error(`Błąd przy dodawaniu danych do arkusza: ${err}`);
    }
  } else {
    log.error('Robienie highlightów jest obecnie wyłączone w konfiguracji');
  }
}

function getCurrentGame() {
  let run: string = 'Brak ustawionej gry';
  if (activeRunReplicant.value.game) {
    run = activeRunReplicant.value.game;
  }
  if (activeRunReplicant.value.category) {
    run += ' ' + activeRunReplicant.value.category;
  }
  return run;
}

function formatTime(timestamp: number) {
  const raw = new Date(timestamp);
  const formatted = raw.toISOString();
  return formatted;
}

nodecg().listenFor('makeHighlight', makeHighlight);

if (config.remote && config.remote.enabled) {
  const socket = io(config.remote.url!);
  let loggedXhrPollError = false;

  socket.on('connect', () => {
    log.info(`Podłączono do socketa highlightera na ${config.remote!.url!}`);
    loggedXhrPollError = false;
  });

  socket.on('connect_error', (err: { message: string }) => {
    if (err.message === 'xhr poll error') {
      if (loggedXhrPollError) {
        return;
      }

      loggedXhrPollError = true;
    }

    log.error('Highlighter socket connect_error:', err);
  });

  socket.on('highlight', () => {
    makeHighlight();
  });
}
