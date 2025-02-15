import needle from 'needle';
import type { NeedleResponse } from 'needle';
import { TaggedLogger } from './util/tagged-logger';
const log = new TaggedLogger('foobar');

class FoobarControl {
  address: string;

  constructor(address: string) {
    this.address = address;
  }

  togglePause() {
    needle('post', `${this.address}/api/player/pause/toggle`, {}).catch(
      (error) => {
        log.error('Błąd przy (od)pauzowaniu foobara: ' + error.message);
      }
    );
  }

  mute() {
    needle('post', `${this.address}/api/player?isMuted=true`, {}).catch(
      (error) => {
        log.error('Błąd przy wyciszaniu foobara: ' + error.message);
      }
    );
  }

  unmute() {
    needle('post', `${this.address}/api/player?isMuted=false`, {}).catch(
      (error) => {
        log.error('Błąd przy odciszaniu foobara: ' + error.message);
      }
    );
  }

  async getSong(): Promise<string> {
    try {
      const playerInfo: NeedleResponse = await needle(
        'get',
        `${this.address}/api/player?columns=${encodeURIComponent(
          '%artist%,%title%'
        )}`
      );
      if (
        playerInfo.body.player.activeItem.columns[0] &&
        playerInfo.body.player.activeItem.columns[1]
      ) {
        return `${playerInfo.body.player.activeItem.columns[0]} - ${playerInfo.body.player.activeItem.columns[1]}`;
      } else {
        return 'Brak piosenki';
      }
    } catch (error: any) {
      log.error('Błąd otrzymywania piosenki: ' + error.message);
      return 'Brak piosenki';
    }
  }
}

export default FoobarControl;
