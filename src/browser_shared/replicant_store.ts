import type {
  Total,
  AutoUpdateTotal,
  CountdownRunning,
  Countdown,
  NameCycle,
  Commentators,
  Reader,
  Bids,
  Song,
  ObsData,
  DonationsToRead,
  Hosterka,
  SecondaryTimer,
  Prizes,
} from '@gsps-layouts/types/schemas';
import type {
  Asset,
  LogoCycle,
  Milestones,
  Bid,
  Prize,
} from '@gsps-layouts/types';
import type {
  RunDataActiveRun,
  RunDataArray,
  Timer,
  RunDataActiveRunSurrounding,
} from 'speedcontrol/src/types/schemas';
import clone from 'clone';
import type { ReplicantBrowser } from 'nodecg-types/types/browser';
import Vue from 'vue';
import type { Store } from 'vuex';
import { namespace } from 'vuex-class';
import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

// Declaring replicants.
export const reps: {
  activeRunReplicant: ReplicantBrowser<RunDataActiveRun>;
  totalReplicant: ReplicantBrowser<Total>;
  autoUpdateTotalReplicant: ReplicantBrowser<AutoUpdateTotal>;
  countdownReplicant: ReplicantBrowser<Countdown>;
  countdownRunningReplicant: ReplicantBrowser<CountdownRunning>;
  hostCountdownReplicant: ReplicantBrowser<Countdown>;
  hostCountdownRunningReplicant: ReplicantBrowser<CountdownRunning>;
  nameCycleReplicant: ReplicantBrowser<NameCycle>;
  commentatorsReplicant: ReplicantBrowser<Commentators>;
  readerReplicant: ReplicantBrowser<Reader>;
  timerReplicant: ReplicantBrowser<Timer>;
  sponsors: ReplicantBrowser<Asset[]>;
  sponsors_break: ReplicantBrowser<Asset[]>;
  currentBids: ReplicantBrowser<Bids[]>;
  allBids: ReplicantBrowser<Bids[]>;
  runDataArray: ReplicantBrowser<RunDataArray[]>;
  currentSong: ReplicantBrowser<Song>;
  obsData: ReplicantBrowser<ObsData>;
  runDataActiveSurrounding: ReplicantBrowser<RunDataActiveRunSurrounding>;
  donationsToRead: ReplicantBrowser<DonationsToRead>;
  hosterkaRep: ReplicantBrowser<Hosterka>;
  logoCycles: ReplicantBrowser<LogoCycle[]>;
  logoCyclesBreak: ReplicantBrowser<LogoCycle[]>;
  videosCharity: ReplicantBrowser<Asset[]>;
  videosSponsors: ReplicantBrowser<Asset[]>;
  videosLong: ReplicantBrowser<Asset[]>;
  milestonesReplicant: ReplicantBrowser<Milestones>;
  donationsToAccept: ReplicantBrowser<number>;
  bidsToAccept: ReplicantBrowser<number>;
  readerAlert: ReplicantBrowser<boolean>;
  playLongVideo: ReplicantBrowser<boolean>;
  secondaryTimer: ReplicantBrowser<SecondaryTimer>;
  prizes: ReplicantBrowser<Prizes>;
  currentlyShownBid: ReplicantBrowser<Bid | null>;
  currentlyShownPrize: ReplicantBrowser<Prize | null>;
  currentlyShownBidIndex: ReplicantBrowser<number>;
  currentlyShownPrizeIndex: ReplicantBrowser<number>;
  showBidsPanel: ReplicantBrowser<boolean>;
  showPrizePanel: ReplicantBrowser<boolean>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  totalReplicant: nodecg.Replicant('total'),
  autoUpdateTotalReplicant: nodecg.Replicant('autoUpdateTotal'),
  countdownReplicant: nodecg.Replicant('countdown', { persistent: false }),
  countdownRunningReplicant: nodecg.Replicant('countdownRunning', {
    persistent: false,
  }),
  hostCountdownReplicant: nodecg.Replicant('hostCountdown', {
    persistent: false,
  }),
  hostCountdownRunningReplicant: nodecg.Replicant('hostCountdownRunning', {
    persistent: false,
  }),
  activeRunReplicant: nodecg.Replicant(
    'runDataActiveRun',
    'nodecg-speedcontrol'
  ),
  nameCycleReplicant: nodecg.Replicant('nameCycle'),
  commentatorsReplicant: nodecg.Replicant('commentators'),
  readerReplicant: nodecg.Replicant('reader'),
  timerReplicant: nodecg.Replicant('timer', 'nodecg-speedcontrol'),
  sponsors: nodecg.Replicant('assets:sponsors'),
  sponsors_break: nodecg.Replicant('assets:sponsors-break'),
  currentBids: nodecg.Replicant('currentBids'),
  allBids: nodecg.Replicant('allBids'),
  runDataArray: nodecg.Replicant('runDataArray', 'nodecg-speedcontrol'),
  currentSong: nodecg.Replicant('song'),
  obsData: nodecg.Replicant('obsData', { persistent: false }),
  runDataActiveSurrounding: nodecg.Replicant(
    'runDataActiveRunSurrounding',
    'nodecg-speedcontrol'
  ),
  donationsToRead: nodecg.Replicant('donationsToRead'),
  hosterkaRep: nodecg.Replicant('hosterka'),
  logoCycles: nodecg.Replicant('logoCycles'),
  logoCyclesBreak: nodecg.Replicant('logoCyclesBreak'),
  videosCharity: nodecg.Replicant('assets:videos-charity'),
  videosSponsors: nodecg.Replicant('assets:videos-sponsors'),
  videosLong: nodecg.Replicant('assets:videos-long'),
  milestonesReplicant: nodecg.Replicant('milestones'),
  donationsToAccept: nodecg.Replicant('donationsToAccept'),
  bidsToAccept: nodecg.Replicant('bidsToAccept'),
  readerAlert: nodecg.Replicant('readerAlert', { defaultValue: false }),
  playLongVideo: nodecg.Replicant('playLongVideo', { defaultValue: false }),
  secondaryTimer: nodecg.Replicant('secondaryTimer'),
  prizes: nodecg.Replicant('prizes'),
  currentlyShownBid: nodecg.Replicant('currentlyShownBid', {
    defaultValue: null,
  }),
  currentlyShownPrize: nodecg.Replicant('currentlyShownPrize', {
    defaultValue: null,
  }),
  showBidsPanel: nodecg.Replicant('showBidsPanel', {
    defaultValue: false,
  }),
  showPrizePanel: nodecg.Replicant('showPrizePanel', {
    defaultValue: false,
  }),
  currentlyShownPrizeIndex: nodecg.Replicant('currentlyShownPrizeIndex'),
  currentlyShownBidIndex: nodecg.Replicant('currentlyShownPrizeIndex'),
};

// All the replicant types.
export interface ReplicantTypes {
  totalReplicant: Total;
  autoUpdateTotalReplicant: AutoUpdateTotal;
  countdownReplicant: Countdown;
  countdownRunningReplicant: CountdownRunning;
  hostCountdownReplicant: Countdown;
  hostCountdownRunningReplicant: CountdownRunning;
  activeRunReplicant: RunDataActiveRun;
  nameCycleReplicant: NameCycle;
  commentatorsReplicant: Commentators;
  readerReplicant: Reader;
  timerReplicant: Timer;
  sponsors: Asset[];
  sponsors_break: Asset[];
  currentBids: Bids[];
  allBids: Bids[];
  runDataArray: RunDataArray[];
  currentSong: Song;
  obsData: ObsData;
  runDataActiveSurrounding: RunDataActiveRunSurrounding;
  donationsToRead: DonationsToRead;
  hosterkaRep: Hosterka;
  logoCycles: LogoCycle[];
  logoCyclesBreak: LogoCycle[];
  videosCharity: Asset[];
  videosSponsors: Asset[];
  videosLong: Asset[];
  milestonesReplicant: Milestones;
  donationsToAccept: number;
  bidsToAccept: number;
  readerAlert: boolean;
  playLongVideo: boolean;
  secondaryTimer: SecondaryTimer;
  prizes: Prizes;
  currentlyShownBid: Bid | null;
  currentlyShownPrize: Prize | null;
  showBidsPanel: boolean;
  showPrizePanel: boolean;
  currentlyShownPrizeIndex: number;
  currentlyShownBidIndex: number;
}

@Module({ name: 'ReplicantModule', namespaced: true })
export class ReplicantModule extends VuexModule {
  // Replicant values are stored here.
  reps: { [k: string]: unknown } = {};

  // This sets the state object above when a replicant sends an update.
  @Mutation
  setState({ name, val }: { name: string; val: unknown }): void {
    Vue.set(this.reps, name, clone(val));
  }

  // This is a generic mutation to update a named replicant.
  @Mutation
  setReplicant<K>({ name, val }: { name: string; val: K }): void {
    Vue.set(this.reps, name, clone(val)); // Also update local copy, although no schema validation!
    reps[name].value = clone(val);
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let replicantModule!: ReplicantModule;
export const replicantNS = namespace('ReplicantModule');

export async function setUpReplicants(store: Store<unknown>): Promise<void> {
  // Listens for each declared replicants "change" event, and updates the state.
  Object.keys(reps).forEach((name) => {
    reps[name].on('change', (val) => {
      store.commit('ReplicantModule/setState', { name, val });
    });
  });
  // We should make sure the replicant are ready to be read, needs to be done in browser context.
  await NodeCG.waitForReplicants(...Object.keys(reps).map((key) => reps[key]));
  replicantModule = getModule(ReplicantModule, store);
}
