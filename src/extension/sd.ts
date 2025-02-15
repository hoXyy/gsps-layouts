import { get as nodecg } from './util/nodecg';
import type { Configschema } from '@gsps-layouts/types/schemas/configschema';
import { TaggedLogger } from './util/tagged-logger';
import {
  prizesReplicant,
  currentBidsRep,
  currentlyShownBidIndex,
  currentlyShownPrizeIndex,
  showBidsPanel,
  showPrizePanel,
  currentlyShownBid,
  currentlyShownPrize,
} from './util/replicants';
import { Bid, Prize } from '@gsps-layouts/types';
import clone from 'clone';

const logger = new TaggedLogger('Stream Deck');
const config = (nodecg().bundleConfig as Configschema).sd;
const router = nodecg().Router();
let currentPrizeTier = 10;

if (config.enabled) {
  logger.debug('HTTP Endpointy dla Decka włączone');
  router.get('/sd/showNextPrize/:tier', (req, res) => {
    res.send('OK!');
    showBidsPanel.value = false;
    if (prizesReplicant.value.length > 0) {
      // If prize panel is disabled, enable it and start from the beginning of current tier
      if (!showPrizePanel.value) {
        currentlyShownPrizeIndex.value = 0;
        currentPrizeTier = parseInt(req.params['tier']);
        const prizeToShow = getPrize(parseInt(req.params['tier']));
        currentlyShownPrize.value = prizeToShow;
        showPrizePanel.value = true;
      } else {
        // If different tier, start from the beginning
        if (parseInt(req.params['tier']) != currentPrizeTier) {
          currentPrizeTier = parseInt(req.params['tier']);
          currentlyShownPrizeIndex.value = 0;
        } else {
          currentlyShownPrizeIndex.value++;
          currentPrizeTier = parseInt(req.params['tier']);
        }
        showPrizePanel.value = true;
        const prizeToShow = getPrize(parseInt(req.params['tier']));
        currentlyShownPrize.value = prizeToShow;
      }
    }
    logger.debug(`Pokazuję następną nagrodę z tieru ${req.params['tier']}`);
  });

  router.get('/sd/hidePrizes', (req, res) => {
    res.send('OK!');
    currentlyShownPrize.value = null;
    showPrizePanel.value = false;
    logger.debug('Ukrywam nagrody');
  });

  router.get('/sd/showNextBid', (req, res) => {
    res.send('OK!');
    showPrizePanel.value = false;
    currentlyShownBid.value = getBid();
    logger.debug('Pokazuję następną licytację');
  });

  router.get('/sd/hideBids', (req, res) => {
    res.send('OK!');
    currentlyShownBid.value = null;
    showBidsPanel.value = false;
    logger.debug('Ukrywam licytacje');
  });

  router.get('/sd/switchFromHostScreen', (req, res) => {
    res.send('OK!');
    nodecg().sendMessage('switchFromHostScreen');
    logger.debug('Zmieniam scenę na przerwę');
  });
}

function getPrize(tier: number): Prize | null {
  const cloned = clone(prizesReplicant.value);
  const prizesInTier = cloned.filter((prize) => prize.minimumBid == tier);
  if (currentlyShownPrizeIndex.value + 1 > prizesInTier.length) {
    currentlyShownPrizeIndex.value = 0;
  }
  let selectedPrize = prizesInTier[currentlyShownPrizeIndex.value];
  return selectedPrize;
}

function getBid(): Bid | null {
  if (currentBidsRep.value.length > 0) {
    const currentBids = clone(currentBidsRep.value)
    // If bid panel is disabled, enable it and set it to show first bid in the list
    if (!showBidsPanel.value) {
      showBidsPanel.value = true;
      currentlyShownBidIndex.value = 0;
      return currentBids[0];
    } else {
      currentlyShownBidIndex.value++;
      if (currentlyShownBidIndex.value + 1 > currentBidsRep.value.length) {
        currentlyShownBidIndex.value = 0;
      }
      return currentBids[currentlyShownBidIndex.value];
    }
  } else {
    showBidsPanel.value = false;
    return null;
  }
}

nodecg().mount(router);
